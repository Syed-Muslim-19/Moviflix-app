import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "black" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 style={{ color: "red", fontWeight: "900" }}>{props.title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "700",
        }}
      >
        <center>
          <img
            src={props.posterURL}
            alt=""
            style={{ marginBottom: "50px", marginTop: "20px" }}
          />
        </center>
        <p>
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "900",
            }}
          >
            Names
          </span>{" "}
          : {props.title}
        </p>
        <p>
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "900",
            }}
          >
            Genres
          </span>{" "}
          : {props.genres}
        </p>
        <p>
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "900",
            }}
          >
            Year
          </span>{" "}
          : {props.year}
        </p>
        <p>
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "900",
            }}
          >
            Director
          </span>{" "}
          : {props.director}
        </p>
        <p>
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "900",
            }}
          >
            Actors
          </span>{" "}
          : {props.actors}
        </p>
        <p>
          <span style={{ textDecoration: "underline", fontWeight: "900" }}>
            About
          </span>{" "}
          : {props.plot}
        </p>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "black" }}>
        <Button onClick={props.onHide} style={{ borderColor: "red" }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Movies(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card
      style={{
        width: "200px",
        position: "relative",
        display: "inline-block",
        margin: "50px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        style={{ border: "none", width: "120%", marginLeft: "-20px" }}
      >
        <Card.Img variant="top" src={props.posterURL} />

        <Card.Body>
          <>
            <h5 style={{ fontWeight: "900", color: "white" }}>{props.title}</h5>
          </>
        </Card.Body>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={props.title}
        posterURL={props.posterURL}
        plot={props.plot}
        director={props.director}
        year={props.year}
        genres={props.genres}
        actors={props.actors}
      />
    </Card>
  );
}

export default Movies;
