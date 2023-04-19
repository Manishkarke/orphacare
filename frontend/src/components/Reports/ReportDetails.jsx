import React, { useEffect, useState } from "react";
import './Report.css'
import { getAReportApiHandler } from "../../utils/axios";
import { useParams } from "react-router-dom";

function ReportDetails() {
  const { id } = useParams();
  console.log(`THe id ias as: ${id}`);
  const [reportDetail, setReportDetail] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await getAReportApiHandler(id);
        setReportDetail(response.data.data)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <article className="report-container">
      <div className="report-img">
        <img src={reportDetail.image} alt={`${reportDetail.name}`} />
      </div>

      <div className="report-info">
        <p>name: {`${reportDetail.name}`}</p>
        <p>age: {`${reportDetail.childAge} years old`}</p>
        {/* <p>caste: {`${childDetails.caste}`}</p> */}
        <p>Description: {`${reportDetail.remarks}`}</p>
      </div>
    </article>
  );
}

export default ReportDetails;
