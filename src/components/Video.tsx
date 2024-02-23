import { FormEvent, useState } from "react";
import styles from "./Video.module.scss";
import video from "../assets/img/video.mp4";
import kathy from "../assets/img/kathy.webp";
import { useInfoContext } from "../store/info-context.tsx";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Video = () => {
  const { title, setSubmitForm, icon } = useInfoContext();

  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredAddress, setEnteredAddress] = useState<string>("");
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [submitMessage, setSubmitMessage] = useState<boolean>(false);

  const nameChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setEnteredName(e.currentTarget.value);
  };

  const coordsHandler = async (value: string) => {
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    setEnteredAddress(value);
    setLatitude(lat);
    setLongitude(lng);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnteredAddress("");
    setEnteredName("");
    setSubmitMessage(true);
    fetch("https://climate-18479-default-rtdb.firebaseio.com/deaths.json", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName,
        lat: latitude,
        long: longitude,
        cause: title,
        icon: icon,
      }),
    });
    setSubmitForm(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <p className={styles.text}>See the sign in action!</p>
        <img
          className={styles.img}
          src={kathy}
          alt="Kathy holding her protest sign"
        />
        <video
          className={styles.video}
          src={video}
          controls={true}
          autoPlay={true}
        />
      </div>
      <div className={styles["right-container"]}>
        <p className={styles.heading}>And add your result to the map below!</p>
        <form className={styles["form-container"]} onSubmit={submitHandler}>
          <div className={styles["label-container"]}>
            <label className={styles.label} htmlFor="name">
              Name/Nickname*
            </label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              className={styles.input}
              required
            />
          </div>
          <div className={styles["label-container"]}>
            <label className={styles.label} htmlFor="location">
              General Location*
            </label>
            <PlacesAutocomplete
              value={enteredAddress}
              onChange={setEnteredAddress}
              onSelect={coordsHandler}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    className={styles.input}
                    id="location"
                    required
                    {...getInputProps({})}
                  />
                  <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";

                      const style = suggestion.active
                        ? {
                            backgroundColor: "#fafafa",
                            cursor: "pointer",
                            fontSize: "1.4rem",
                            paddingLeft: ".4rem",
                          }
                        : {
                            backgroundColor: "#ffffff",
                            cursor: "pointer",
                            fontSize: "1.4rem",
                            paddingLeft: ".4rem",
                          };

                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <div className={styles["label-container"]}>
            <label className={styles.label} htmlFor="death">
              Cause of death
            </label>
            <input
              type="text"
              id="death"
              value={title}
              className={styles.input}
              readOnly={true}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="agree"
              className={styles.check}
              required
            />
            <label htmlFor="agree" className={styles["check-text"]}>
              I agree to let Climate Death Wheel use my information for the
              purposes of collecting data for the map
            </label>
          </div>
          <button className={styles.button}>Submit</button>
          {submitMessage && (
            <p className={styles.message}>
              Thanks for contributing to the map!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Video;
