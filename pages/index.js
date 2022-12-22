import { useRouter } from "next/router";
import TurkeyMap from "turkey-map-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="container">
      <label
        htmlFor="Turkey"
        style={{
          fontSize: "40px",
          position: "relative",
          left: "40%",
          fontFamily: "Impact, Haettenschweiler, sans-serif",
          letterSpacing: "2px",
        }}
      >
        Türkiye Haritası
      </label>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <TurkeyMap
          hoverable={true}
          onClick={({ plateNumber, name }) => {
            router.push(`/${name}`);
            console.log(
              "Cursor is over on " + plateNumber + " - " + name + "!"
            );
          }}
        />
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div
          className="text-white mb-3 mb-md-0"
          style={{
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Copyright © 2022 Created by Fatih Güzel
        </div>
      </div>
    </div>
  );
}
