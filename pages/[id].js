import React from "react";
import axios from "axios";
import styles from "./id.module.css";
import { useRouter } from "next/router";
const index = ({ id, weather }) => {
  const router = useRouter();

  console.log(weather.weather.icon);
  // Description - Havanın durumu
  // sys.country - Ülke adı
  // name - Şehir Adı
  // main.temp - Derecesi
  return (
    <div>
      <div className={`container ${styles.container}`}>
        <label htmlFor="city" className={`${styles.city}`}>
          {id} <hr />{" "}
          <img
            className={styles.icons}
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
        </label>

        <ul class="list-group">
          <p class={`list-group-item ${styles.description}`}>
            {weather.weather[0].description}{" "}
          </p>

          <p class={`list-group-item ${styles.term}`}>
            {Math.round(weather.main.temp)}°C
          </p>
          <p class={`list-group-item ${styles.minmax}`}>
            {Math.floor(weather.main.temp_min)}°c /
            {Math.ceil(weather.main.temp_max)}
            °c
          </p>
        </ul>
        <button className={styles.button} onClick={() => router.push("/")}>
          Geri Dön
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params, req }) => {
  const { id } = params;
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=03e898d3b3b511c37829cb56ad135964&units=metric&lang=tr`
  );

  const weather = res.data;
  console.log(weather);
  return {
    props: { id, weather },
  };
};

export default index;
