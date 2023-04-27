import { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import InfoContext from "../store/info-context";
import Icons from "../constants/Icons";
import styles from "./MapView.module.scss";

const MapView = () => {
  const [deaths, setDeaths] = useState([]);

  const { submitForm } = useContext(InfoContext);

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
  }, [submitForm]);

  return (
    <div className={styles.map}>
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {deaths.map((person) => {
          const iconProps = Object.hasOwn(Icons, person.icon) && {
            icon: Icons[person.icon],
          };
          return (
            <Marker
              position={[person.lat, person.long]}
              key={person.id}
              {...iconProps}
            >
              <Popup className={styles.popup}>
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
