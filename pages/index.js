import Navbar from "../components/navbar";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import React, { useState } from "react";

export default function Home() {
  const [solved, setText] = useState(false);

  const set = () => {
    setText(true);
  };

  function handleClick() {
    window.location =
      "mailto:saragrottling@gmail.com ? &subject=Lillet 40 år &body=Va kul med fest Maria!%0D%0DJag/Vi kommer! (skriv namn):%0D%0DTyvärr Maria, vi kan inte komma (skriv namn):%0D%0DAllergier/Specialkost (skriv namn):%0D%0DJag/Vi vill boka hotellrum, antal rum:%0D%0DJa! Jag/Vi vill gärna dyka in tidigt och äta lunch på Gottskär Hotell, antal:%0D%0DJa! Jag vill ha storstyrk i minigolf av Lillet! (ja/nej)%0D%0DVi/Jag kommer lagom till fördrinken <3 (ja/nej)";
  }

  function showInMapClicked() {
    window.open("https://maps.google.com?q=Gottskär+Hotell");
  }

  function openLink(link) {
    window.open(link);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: solved ? "100%" : "100vh",
        width: "100%",
        background:
          "linear-gradient(0deg, rgb(233,233,233), rgba(233, 233, 233, 0.7)), url(/images/lillet.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Navbar></Navbar>
      {solved ? (
        <div
          style={{
            display: "flex",
            flexGrow: "1",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div className="imageContainer">
            <div className="image">
              <img src="/images/lilletFace.jpg"></img>
            </div>
          </div>
          <div className="textContainer">
            <p>
              <b style={{ display: "flex", textAlign: "center" }}>
                Välkomna att fira min 40- års dag tillsammans med mig!
              </b>
              <br></br>
              <b>När?</b> 13 Maj kl 16.30<br></br>
              <b>Var?</b> Gottskär Hotell, Onsala
              <br></br>
              <b>Hur?</b> Fördrink serveras förhoppningsvis utomhus kl 16.30 och
              väl till bords serveras en välkomponerad meny med tillhörande
              dryck. Känn er fria att hitta på hyss under kvällen men anmäl
              gärna på förhand till{" "}
              <a href="mailto:Ebba.Didring@gmail.com">Ebba</a> och{" "}
              <a href="mailto:Hans.Didring@protectorforsakring.se">Hans</a>{" "}
              tillika kvällens Toastmadame och Toastmaster.<br></br>
              <b>Klädsel:</b> Kavaj <br></br>
              <b>Boende:</b> Om Ni vill boka hotellövernattning inklusive
              frukost till rabatterat pris (1250-1450 kr) så anger Ni det nedan.
              Läs mer om{" "}
              <a onClick={() => openLink("https://www.gottskarhotell.com/")}>
                Gottskär Hotell.
              </a>{" "}
              <br></br>
              <br></br>
              Frågor besvaras på{" "}
              <a href="mailto:saragrottling@gmail.com">
                saragrottling@gmail.com
              </a>
              <br></br>
            </p>
            <StaticGoogleMap
              size="600x600"
              apiKey="AIzaSyBY3NyQJO8KUYmIoQanyPF5ozjSPdF7d4Y"
              className="map"
            >
              <Marker.Group label="L" color="green">
                <Marker location="57.390345,12.01140" />
              </Marker.Group>
            </StaticGoogleMap>
            <p>
              Adress:{" "}
              <a onClick={() => showInMapClicked()}>Landstormsvägen 31</a>
            </p>
            <p>
              <b style={{ display: "flex", justifyContent: "center" }}>OSA:</b>{" "}
              Senast 31 mars genom knappen nedan. Vill ni dyka in tidigare för
              att nyttja Gottskär´s faciliteter och omgivningar så serveras
              lunch från 11.30 (179:-) Själv kommer jag att äta lunch och
              utmanar er som törs i en minigolfturnering kl 13. Varmt välkomna!
            </p>

            <button
              style={{
                width: "80%",
                color: "rgb(233,233,233)",
                backgroundColor: "rgb(100,143,123)",
                borderRadius: "5px",
                padding: "4px",
                border: "0px",
                marginBottom: "30px",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => handleClick()}
              >
                OSA
              </h3>
            </button>
          </div>
        </div>
      ) : (
        <div className="puzzleContainer">
          <h4 style={{ textAlign: "center", margin: "2px" }}>
            Pussla ihop mig!
          </h4>
          <div
            style={{
              border: "3px solid rgb(100,143,123)",
              margin: "6px",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <JigsawPuzzle
              imageSrc="/images/lilletFace.jpg"
              rows={3}
              columns={3}
              onSolved={set}
              className="jigsaw-puzzle"
            />
          </div>
        </div>
      )}
    </div>
  );
}
