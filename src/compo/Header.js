import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <Navbar
      style={{
        backgroundColor: "transparent",
        zIndex: "2",
        position: "absolute",
        top: "0",
        left: "0",
        marginTop: "-11px",
        width: "100%",
      }}
    >
      <Container>
        <Navbar.Brand>
          <h1
            style={{
              color: "red",
              fontWeight: "900",
              fontFamily: "sans-serif",
              float: "left",
            }}
          >
            MOVIFLIX
          </h1>
        </Navbar.Brand>
        <Navbar.Brand>
          <div>
            <CiSearch
              style={{
                color: "white",
                fontSize: "30px",
                clear: "both",
              }}
            />
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
