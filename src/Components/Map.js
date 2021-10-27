import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";

import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
// https://codesandbox.io/s/pwly8?file=/src/index.js

// import "../Style.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
});

function AppMap() {
  const onDrawCreate = ({ features }) => {
    console.log(features);
  };

  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };

  return (
    <div>
      
      <Map
        style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
      </Map>
    </div>
  );
}

export default AppMap;
