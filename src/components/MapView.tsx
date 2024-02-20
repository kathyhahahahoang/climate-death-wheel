import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useInfoContext } from "../store/info-context.tsx";
import Icons from "../constants/Icons";
import styles from "./MapView.module.scss";

type DeathObject = {
  id: string;
  name: string;
  lat: number;
  long: number;
  cause: string;
  icon: string;
};

const MapView = () => {
  const [deaths, setDeaths] = useState<DeathObject[]>([]);

  const { submitForm } = useInfoContext();

  useEffect(() => {
    const loadedDeaths: DeathObject[] = [];

    const fetchDeaths = async () => {
      try {
        const response = await fetch(
          "https://climate-18479-default-rtdb.firebaseio.com/deaths.json"
        );
        const responseData = await response.json();

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
      } catch (error) {
        console.log("Could not fetch data");
      }
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

        {deaths.map((death) => {
          const iconProps = Object.hasOwn(Icons, death.icon) && {
            icon: Icons[death.icon],
          };
          return (
            <Marker
              position={[death.lat, death.long]}
              key={death.id}
              {...iconProps}
            >
              <Popup className={styles.popup}>
                <p>Name: {death.name}</p>
                <p>Death by: {death.cause}</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
