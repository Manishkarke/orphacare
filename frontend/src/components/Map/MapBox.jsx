import React, { useEffect, useRef, useState } from "react";
import { MapBoxApiKey } from "../../constants/constants";
import mapboxgl from "mapbox-gl";
import "./MapBox.css";
import "mapbox-gl/dist/mapbox-gl.css";

function MapBox() {
  const mapRef = useRef(null);
  // const [fullScreen, setFullScreen] = useState(false);
  const [lng, setLng] = useState(85.323959);
  const [lat, setLat] = useState(27.717245);
  const [zoom, setZoom] = useState(10);

  // mapboxgl.accessToken = MapBoxApiKey;
  useEffect(() => {
    if (!mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapRef.current,
      accessToken: MapBoxApiKey,
      style: "mapbox://styles/devendrasah/clgd65odx006g01okk92quisx",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lat, lng, zoom]);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.on("move", () => {
      setLat(mapRef.current.getCenter().lat.toFixed(4));
      setLng(mapRef.current.getCenter().lng.toFixed(4));
      setZoom(mapRef.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapRef} className={`map-container`}></div>
    </div>
  );
}

export default MapBox;
