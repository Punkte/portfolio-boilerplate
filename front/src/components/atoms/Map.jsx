import React, { useEffect, useRef, useState } from "react";
import mapboxgl, { Map as Mapbox, LngLat } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import PropTypes from "prop-types";


const StyledMap = styled.div`
  width: 100%;
  min-height: 500px;
`

const Map = ({lngLat}) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX || process.env.STORYBOOK_MAPBOX;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new Mapbox({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: new LngLat(...lngLat),
        zoom: 10
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, lngLat]);

  return <StyledMap ref={el => (mapContainer.current = el)} />;
};

Map.defaultProps = {
  lngLat: [2.333333, 48.866667], // paris
}

Map.protoTypes = {
  lngLat: PropTypes.arrayOf(PropTypes.number)
}

export default Map