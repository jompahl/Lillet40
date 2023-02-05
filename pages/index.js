import Navbar from "../components/navbar";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";

export default function Home() {
  function handleClick() {
    window.location =
      "mailto:johndahlberg@hotmail.com ? &subject=Lillet 40 år &body=Namn:";
  }

  function showInMapClicked() {
    window.open("https://maps.google.com?q=57.708870,11.974560");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        background:
          "linear-gradient(0deg, rgb(233,233,233), rgba(233, 233, 233, 0.7)), url(/images/lillet.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Navbar></Navbar>
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
            <b>Lillet</b> is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <StaticGoogleMap
            size="600x600"
            apiKey="AIzaSyBY3NyQJO8KUYmIoQanyPF5ozjSPdF7d4Y"
            className="map"
          >
            <Marker.Group label="L" color="green">
              <Marker location="57.708870,11.974560" />
            </Marker.Group>
          </StaticGoogleMap>
          <p>
            Adress: <a onClick={() => showInMapClicked()}>TODO FÅ ADRESS</a>
          </p>
          <p>Osa genom att klicka på knappen nedan!</p>
          <button
            style={{
              width: "70%",
              color: "rgb(233,233,233)",
              backgroundColor: "rgb(100,143,123)",
              borderRadius: "5px",
              padding: "2px",
              border: "0px",
              marginBottom: "20px",
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
    </div>
  );
}
