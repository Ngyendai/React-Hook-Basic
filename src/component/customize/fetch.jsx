import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setisError] = useState(false);
  useEffect(() => {
    try {
      async function fectchData() {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map(item => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        console.log("check data covid :", data);
        setData(data);
        setLoading(false);
        setisError(false);
      }
      fectchData();
    } catch (e) {
      setisError(true);
      setLoading(false);
    }

    // console.log(">>> check res: ", res.data);
  }, []);
  return {
    data,
    loading,
    isError,
  };
};

export default useFetch;
