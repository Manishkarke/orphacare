import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import customFetch from "../../utils/axios";
import { getAccessTokenFromLocalStorage } from "../../utils/localStorage";
import Child from "./Child";
// import { childList } from "../../constants/constants";

function AdoptKids() {
  const navigate = useNavigate();
  const [kids, setKids] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const accessToken = getAccessTokenFromLocalStorage();

  useEffect(() => {
    (async () => {
      try {
        const response = await customFetch.get("/kids-adoption/getAllKids", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (response.data.status === "error") {
          // Redirect to log in page
          navigate("/signin");
        } else {
          setKids(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [accessToken, navigate]);
  return (
    <>
      <div className='searchbox'>
        <input
          type='text'
          name='searchbox'
          id='searchbox'
          placeholder='Search Child'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <section className='card-list'>
        {kids
          .filter((kids) => {
            return searchTerm.toLowerCase() ? kids.name.toLowerCase().includes(searchTerm) : kids;
          })
          .map(({ id, picture, name, surname, description }) => {
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
