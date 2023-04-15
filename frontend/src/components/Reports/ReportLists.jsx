import React, { useEffect } from "react";
import Card from "../../ui/Card";
import SearchBox from "../../ui/SearchBox";
import { getAllReportsApiHandler } from "../../utils/axios";

function ReportLists() {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerms] = useState("");

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
  }, []);

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
        {reports.map(({ id, name, picture }) => {
          return <Card key={id} id={id} name={name} picture={picture} />;
        })}
      </section>
    </>
  );
}

export default ReportLists;
