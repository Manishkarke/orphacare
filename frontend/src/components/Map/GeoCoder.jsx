import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { MapBoxApiKey } from "../../constants/constants";
import { useControl } from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

function GeoCoder() {
  const ctrl = new MapboxGeocoder({
    accessToken: MapBoxApiKey,
    marker: false,
    collapsed: true,
  });
  useControl(() => {
    ctrl.on("result", (e) => {
      const coords = e.result.geometry.coordinates;
    });
  });
  return null;
}

export default GeoCoder;
