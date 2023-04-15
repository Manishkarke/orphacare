import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllKidApiHandler } from "../../utils/axios";
// import { getAccessTokenFromLocalStorage } from "../../utils/localStorage";
import Child from "./Child";
import SearchBox from "../../ui/SearchBox";

function AdoptKids() {
  const navigate = useNavigate();
  const [kids, setKids] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllKidApiHandler();

        if (response.data.status === "error") {
          // Redirect to log in page
          navigate("/signin");
        } else {
          setKids(response.data.data);
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

  // Filter kids array based on search term
  const filteredKids = kids.filter((kid) => {
    return kid.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <SearchBox onSearch={searchHandler} searchFor="Child" />
      <section className="card-list">
        {filteredKids.map(({ id, picture, name, surname, description }) => {
          return (
            <Child
              key={id}
              id={id}
              name={`${name} ${surname}`}
              picture={picture}
              description={description}
            />
          );
        })}
      </section>
    </>
  );
}

export default AdoptKids;
