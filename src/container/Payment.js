import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import style from "./style/PaymentStyle.module.scss";

function Payment() {
  const initState = {
    provinces: [],
    districts: [],
    wards: [],
    selectProvince: "",
    selectDistrict: "",
    selectWard: "",
  };

  const INIT_PROVINCE = "init_province";
  const SELECT_PROVINCE = "select_province";
  const INIT_DISTRICTS = "init_districts";
  const SELECT_DISTRICT = "select_district";
  const INIT_WARD = "init_ward";
  const SELECT_WARD = "select_ward";

  const paymentReducer = (state, action) => {
    switch (action.type) {
      case INIT_PROVINCE:
        return {
          ...state,
          provinces: action.payload,
        };
      case SELECT_PROVINCE:
        return {
          ...state,
          selectProvince: action.payload,
        };
      case INIT_DISTRICTS:
        return {
          ...state,
          districts: action.payload,
        };
      case SELECT_DISTRICT:
        return {
          ...state,
          selectDistrict: action.payload,
        };
      case INIT_WARD:
        return {
          ...state,
          wards: action.payload,
        };
      case SELECT_WARD:
        return {
          ...state,
          selectWard: action.payload,
        };
      default:
        throw new Error("invalid payment action");
    }
  };

  const [statePayment, dispatchPayment] = useReducer(paymentReducer, initState);

  const { provinces, districts, wards } = statePayment;

  const fetchProvince = async () => {
    const respone = await axios
      .get("https://provinces.open-api.vn/api/p/")
      .then((respone) => {
        dispatchPayment({
          type: INIT_PROVINCE,
          payload: respone.data,
        });
      });
  };

  const fetchDistrict = async () => {
    const respone = await axios
      .get(
        `https://provinces.open-api.vn/api/p/${statePayment.selectProvince.code}?depth=2`
      )
      .then((respone) => {
        dispatchPayment({
          type: INIT_DISTRICTS,
          payload: respone.data,
        });
      });
  };

  const fetchWard = async () => {
    const respone = await axios
      .get(
        `https://provinces.open-api.vn/api/d/${statePayment.selectDistrict.code}?depth=2`
      )
      .then((respone) => {
        console.log(respone.data);
        dispatchPayment({
          type: INIT_WARD,
          payload: respone.data,
        });
      });
  };

  const handleProvince = () => {
    //fetchAPI only once times
    if (provinces == "") {
      fetchProvince();
    }
    setShowProvince(true);
  };

  const handleSelectProvince = (e, province) => {
    dispatchPayment({
      type: SELECT_PROVINCE,
      payload: { code: province.code, name: province.name },
    });
    setShowProvince(false);
  };

  const handleDistrict = () => {
    if (statePayment.selectProvince && districts != "") {
      fetchDistrict();
    }
    setShowDistric(true);
  };

  useEffect(() => {
    if (statePayment.selectProvince) {
      dispatchPayment({
        type: SELECT_DISTRICT,
        payload: "",
      });
      dispatchPayment({
        type: SELECT_WARD,
        payload: "",
      });
      fetchDistrict();
    }
  }, [statePayment.selectProvince]);

  const handleSelectDistrict = (e, district) => {
    dispatchPayment({
      type: SELECT_DISTRICT,
      payload: { code: district.code, name: district.name },
    });
    setShowDistric(false);
  };

  const handleWard = () => {
    if (statePayment.selectDistrict && wards != "") {
      fetchWard();
    }
    setShowWard(true);
  };

  useEffect(() => {
    if (statePayment.selectDistrict) {
      dispatchPayment({
        type: SELECT_WARD,
        payload: "",
      });
      fetchWard();
    }
  }, [statePayment.selectDistrict]);

  const handleSelectWard = (e, ward) => {
    dispatchPayment({
      type: SELECT_WARD,
      payload: { code: ward.code, name: ward.name },
    });
    setShowWard(false);
  };

  const [showProvince, setShowProvince] = useState(false);
  const [showDistrict, setShowDistric] = useState(false);
  const [showWard, setShowWard] = useState(false);

  return (
    <div className={style.payment}>
      <Form>
        <div className={style.inforPayment}>
          <input placeholder="Your Name's..." />
          <input
            type="tel"
            pattern="[0-9]{2}[0-9]{8}"
            placeholder="Your Phone Number...."
          />
          <input placeholder="Address..." />
        </div>
        <div className={style.inforPayment}>
          <div>
            <input
              placeholder="Province..."
              onFocus={() => handleProvince()}
              value={statePayment.selectProvince.name ?? ""}
              readOnly
            />
            <ul className={showProvince ? style.listAddress : ""}>
              {showProvince
                ? provinces.map((province) => (
                    <li
                      key={province.code}
                      onClick={(e) => handleSelectProvince(e, province)}
                    >
                      {province.name}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
          <div>
            <input
              placeholder="District..."
              readOnly
              onClick={() => handleDistrict()}
              value={statePayment.selectDistrict.name ?? ""}
            />
            <ul className={showDistrict ? style.listAddress : ""}>
              {showDistrict == true && districts != ""
                ? districts.districts.map((district) => (
                    <li
                      key={district.code}
                      onClick={(e) => handleSelectDistrict(e, district)}
                    >
                      {district.name}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
          <div>
            <input
              placeholder="Ward..."
              readOnly
              onClick={() => handleWard()}
              value={statePayment.selectWard.name ?? ""}
            />
            <ul className={showWard ? style.listAddress : ""}>
              {showWard == true && wards != ""
                ? wards.wards.map((ward) => (
                    <li
                      key={ward.code}
                      onClick={(e) => handleSelectWard(e, ward)}
                    >
                      {ward.name}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
        <Button className={style.orderBtn}>Order</Button>
      </Form>
    </div>
  );
}

export default Payment;
