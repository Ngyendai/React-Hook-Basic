import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import useFetch from "../customize/fetch";
const Covid = () => {
  const {
    data: dataCovid,
    loading,
    isError,
  } = useFetch(
    "http://api.covid19api.com/country/vietnam?from=2020-03-01T00:00:00Z&to=2021-04-01T00:00:00Z"
  );
  return (
    <>
      //Reactjs - Thư viện của javascript 1 framework phổ biến
      <h2>Covid 19 tracking in VietNam</h2>
      <table>
        {console.log(">>> check data covid:", dataCovid)}
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map(item => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr>
              <td colspan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td colspan="5" style={{ textAlign: "center" }}>
                Something wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Covid;
