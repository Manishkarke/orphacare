import React, { useState } from "react";
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

function ReactMap() {
  const [newPlace, setNewPlace] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: 85.3239,
    latitude: 27.7172,
    zoom: 10,
  });

  const LocationMark = (event) => {
    const [longitude, latitude] = event.lngLat.toArray();
    setNewPlace({
      lng: longitude,
      lat: latitude,
    });

    console.log(newPlace);
  };

  return (
    <div style={{ width: "400px", height: "400px", zIndex: 999 }} onDrag={() => setViewport()}>
      <ReactMapGl
        {...viewport}
        mapStyle='mapbox://styles/devendrasah/clgd65odx006g01okk92quisx'
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
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#FF0000", fontSize: "2rem", cursor: "pointer" }}
            />
          </Marker>
        ) : null}
        <FullscreenControl position='bottom-right' />
        <NavigationControl />
        <GeolocateControl trackUserLocation={true} showUserHeading={true} />
      </ReactMapGl>
    </div>
  );
}

export default ReactMap;
