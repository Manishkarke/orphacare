import React, { useEffect } from "react";
import { getAReportApiHandler } from "../../utils/axios";

function ReportDetails({ id }) {
  useEffect(() => {
    (async () => {
      try {
        const response = await getAReportApiHandler(id);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  });
  
  return (
    <div className="container">
      <div className="img">
        <img />
      </div>
      <div className="info"></div>
    </div>
  );
}

export default ReportDetails;
