import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as Icons from "../constants/Icons";
import L from "leaflet";

const MapView = () => {
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    const fetchDeaths = async () => {
      const response = await fetch(
        "https://climate-death-wheel-default-rtdb.firebaseio.com/deaths.json"
      );
      const responseData = await response.json();

      const loadedDeaths = [];

      for (const key in responseData) {
        loadedDeaths.push({
          id: key,
          name: responseData[key].name,
          lat: responseData[key].lat,
          long: responseData[key].long,
          cause: responseData[key].cause,
          icon: responseData[key].icon,
        });
      }
      setDeaths(loadedDeaths);
    };

    fetchDeaths();
  }, []);

  console.log(Icons.capitalism, typeof Icons.capitalism);

  return (
    <div>
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {deaths.map((person) => {
          return (
            <Marker
              position={[person.lat, person.long]}
              key={person.id}
              icon={Icons.capitalism}
            >
              <Popup>
                <p>Name: {person.name}</p>
                <p>Death by: {person.cause}</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
