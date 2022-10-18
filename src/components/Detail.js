import "../App.css";
import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Detail(url) {
  const MySwal = withReactContent(Swal);

  console.log(url);
  const [get, setGet] = useState([]);
  const API_URL_DETAIL = url;

  const fetchData = async () => {
    const { data } = await axios.get(API_URL_DETAIL);
    setGet(data);
  };

  useEffect(() => {
    fetchData({});
  }, []);

  MySwal.fire({
    title: get.name,
  });
}
