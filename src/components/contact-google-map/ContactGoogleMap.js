// @flow
import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import markerPng from '../../images/marker.png';
import MapStyles from './map-styles.json';

/**
 *
 * @param props
 * @constructor
 * Google Map embedding component.
 */
const CMap = (props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.center}
    defaultOptions={{ styles: MapStyles }}
    mapTypeId={google.maps.MapTypeId.ROADMAP}
  >
    <Marker
      // $FlowFixMe
      position={new google.maps.LatLng(props.center.lat, props.center.lng)}
      draggable={false}
      icon={markerPng}
      title="The Playground"
      url="https://goo.gl/maps/4s6AbLht13G2"
    />
  </GoogleMap>
);

const ContactGoogleMap = withScriptjs(withGoogleMap(CMap));

export default ContactGoogleMap;
