import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGl, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import { MapBoxApiKey } from "../../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import GeoCoder from "./GeoCoder";

function ReactMap() {
  const mapRef = useRef(null);
  const [newPlace, setNewPlace] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 14,
  });

  // Find user Current location by its IP Address
  // useEffect(() => {
  //   if (!viewport.latitude && !viewport.longitude) {
  //     console.log("I am running");
  //     fetch("https://ipapi.co/json")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setNewPlace({ lng: data.longitude, lat: data.latitude });
  //         mapRef.current?.flyTo({ center: [data.longitude, data.latitude] });
  //       });
  //   }
  // });

  const LocationMark = (event) => {
    const [longitude, latitude] = event.lngLat.toArray();
    setNewPlace({
      lng: longitude,
      lat: latitude,
    });
  };

  const locateOnDrag = (event) => {
    console.log(event);
    const [longitude, latitude] = event.lngLat.toArray();
    setNewPlace({
      lng: longitude,
      lat: latitude,
    });

    console.log(
      `New Location: Latitide: ${newPlace.lat} longitude: ${newPlace.lng}`
    );
  };

  return (
    <div
      style={{ width: "400px", height: "400px", zIndex: 999 }}
      onDrag={() => setViewport()}
    >
      <ReactMapGl
        ref={mapRef}
        {...viewport}
        mapStyle="mapbox://styles/devendrasah/clgd65odx006g01okk92quisx"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapboxAccessToken={MapBoxApiKey}
        scrollZoom={true}
        onMove={(event) => setViewport(event.viewState)}
        onDblClick={LocationMark}
      >
        {newPlace ? (
          <Marker
            longitude={newPlace?.lng}
            latitude={newPlace?.lat}
            offsetLeft={-3.5 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
            draggable
            onDragEnd={locateOnDrag}
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#FF0000", fontSize: "2rem", cursor: "pointer" }}
            />
          </Marker>
        ) : null}
        <FullscreenControl position="bottom-right" />
        <NavigationControl />
        <GeolocateControl
          position="bottom-right"
          trackUserLocation
          onGeolocate={(e) => {
            setViewport((prevViewport) => {
              return {
                ...prevViewport,
                longitude: e.coords.longitude,
                latitude: e.coords.latitude,
              };
            });
            console.log(
              `my location: lat: ${viewport.latitude} lng: ${viewport.longitude}`
            );
          }}
          showUserHeading={true}
        />
        {/* <GeoCoder /> */}
      </ReactMapGl>
    </div>
  );
}

export default ReactMap;
