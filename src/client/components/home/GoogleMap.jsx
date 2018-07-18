// @flow

import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

import styles from "../sass/blocks/home/map.scss";

const GOOGLE_KEY = "AIzaSyBV-L0mWf9biL-iuHzs7GDq5TY2tzd0I7Q";

const AdressGoogleMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&language=ru`, // v=3.exp&libraries=geometry,drawing,places,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className={styles["map__container"]} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 55.758, lng: 37.549648 }}
    options={{ disableDefaultUI: true }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 55.757517, lng: 37.549648 }}
        icon="/img/index/map-marker.png"
      />
    )}
  </GoogleMap>
));

export default AdressGoogleMap;
