import React, { useState, useEffect } from "react";
// import Card from "../../ui/Card";
import "./Report.css";
import SearchBox from "../../ui/SearchBox";
import { getAllReportsApiHandler } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Report from "./Report";
import AddReport from "../form/AddReport";
import OverlayModel from "../../ui/OverlayModal";

function ReportLists() {
  const [reports, setReports] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
          // console.log(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [navigate]);

  // Define searchHandler to update the search term state
  const searchHandler = (data) => {
    setSearchTerm(data);
  };

  // Filter Reports array based on search term
  const filteredReports = reports.filter((report) => {
    return report.remarks.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="Search-div">
        <SearchBox onSearch={searchHandler} searchFor="Reports" />
        <button
          type="button"
          className="btn"
          onClick={() => setShowModal(true)}
        >
          Add Report
        </button>
      </div>
      {showModal && (
        <OverlayModel
          children={<AddReport closeModal={setShowModal} />}
          closeModal={setShowModal}
        />
      )}
      <section className="card-list">
        {filteredReports.map(({ id, image, remarks }) => {
          return (
            <Report key={id} id={id} picture={image} description={remarks}></Report>
          );
        })}
      </section>
    </>
  );
}

export default ReportLists;
