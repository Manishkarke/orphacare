import React, { useState, useEffect, Children } from "react";
import Card from "../../ui/Card";
// import SearchBox from "../../ui/SearchBox";
import { getAllReportsApiHandler } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Report from "./Report";
// import Model from "../../ui/Model";
import AddReport from "../form/AddReport";
import OverlayModel from "../../ui/OverlayModel";

function ReportLists() {
  const [reports, setReports] = useState([]);

  const [showModal, setShowModal] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllReportsApiHandler();

        if (response.data.status === "error") {
          // Redirect to log in page
          navigate("/signin");
        } else {
          setReports(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [navigate]);

  // Define searchHandler to update the search term state
  // const searchHandler = (data) => {
  //   setSearchTerm(data);
  // };

  // Filter Reports array based on search term
  // const filteredReports = reports.filter((report) => {
  //   return report.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <>
      <button type="button" className="btn" onClick={() => setShowModal(true)}>
        Add Report
      </button>
      {showModal && (
        <OverlayModel
          children={<AddReport closeModal={setShowModal} />}
          closeModal={setShowModal}
        />
      )}
      {/* <SearchBox onSearch={searchHandler} searchFor="Reports" /> */}
      <section className="card-list">
        {reports.map(({ id, image, remarks }) => {
          return (
            <Report key={id} picture={image} description={remarks}></Report>
          );
        })}
      </section>
    </>
  );
}

export default ReportLists;
