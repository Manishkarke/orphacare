import React, { useState, useEffect } from "react";
import Card from "../../ui/Card";
import SearchBox from "../../ui/SearchBox";
import { getAllReportsApiHandler } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

function ReportLists() {
  const [reports, setReports] = useState([]);
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
          console.log(response.data.data);
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
    return report.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <SearchBox onSearch={searchHandler} searchFor="Reports" />
      <section className="card-list">
        {filteredReports.map(({ id, name, picture }) => {
          return <Card key={id} id={id} name={name} picture={picture} />;
        })}
      </section>
    </>
  );
}

export default ReportLists;
