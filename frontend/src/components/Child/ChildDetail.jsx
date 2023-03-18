import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../../utils/axios";

function ChildDetail() {
  const [childDetails, setChildDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await customFetch.get(`/kids-adoption/getKid/${id}`);
        setChildDetails(response.data.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(`Child detial is ${childDetails}`);
  return (
    <article className='child-container'>
      <div className='child-img'>
        <img src={childDetails.picture} alt={`${childDetails.name} ${childDetails.surname}`} />
      </div>

      <div className='kid-info'>
        <p>name: {`${childDetails.name} ${childDetails.surname}`}</p>
        <p>age: {`${childDetails.age} years old`}</p>
        <p>caste: {`${childDetails.caste}`}</p>
        <p>Description: {`${childDetails.description}`}</p>
        <p>gender: {`${childDetails.gender}`}</p>
        <p>provience: {`${childDetails.provience}`}</p>
      </div>
      <button className='btn'>Adopt</button>
    </article>
  );
}

export default ChildDetail;
