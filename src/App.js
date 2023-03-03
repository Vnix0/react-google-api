import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function App(props) {
  return (
    <div className="App">
      <Map
        google={props.google}
        style={{ width: "90%", height: "90%" }}
        zoom={10}
        initialCenter={{
          lat: 28.033886,
          lng: 1.659626,
        }}
      />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC3D1miNFB8aIb09pFPIFwwZ9JqcLVV4XY",
})(App);
