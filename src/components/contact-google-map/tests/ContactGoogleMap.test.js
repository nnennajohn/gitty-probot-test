import React from 'react';
import ContactGoogleMap from '../index';

const testIf =
  process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test;

testIf('Contact Google Map component', () => {
  const wrapper = mount(
    <ContactGoogleMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQ6tkAoMSO8ygMYmhuA9FrOTPVFJYKhqw"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      center={{ lat: 40.463454, lng: -3.67186 }}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
