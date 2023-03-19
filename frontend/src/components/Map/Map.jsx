import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React from "react";
import { googleMapsApi } from "../../constants/constants";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApi,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 40, lng: -80 }}
      mapContainerClassName='map-container'
    ></GoogleMap>
  );
}

export default Map;
