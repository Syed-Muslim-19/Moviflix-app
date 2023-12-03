import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./compo/Header";
import Cards from "./compo/cards";
import Movies from "./compo/movies";
import Info from "./compo/Info";
import data from "./data.json";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "./compo/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// Modal component
function Modal({ movie, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Info title={movie.title} posterURL={movie.posterURL} />
        {/* Add additional information or controls for closing the modal */}
      </div>
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    setMovies(data);
  }, []);

  useEffect(() => {
    if (isView) {
      mainControl.start("visible");
    }
  }, [isView, mainControl]);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <Router>
      <div className="Main-Body">
        <Header />
        <div className="internalBody">
          <Cards onCardClick={openModal} />
          <div
            className="movies"
            style={{
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <h1
              style={{
                textAlign: "left",
                marginLeft: "10%",
                marginTop: "10%",
                marginBottom: "50px",
                color: "white",
                fontWeight: "900",
              }}
            >
              MOVIES
            </h1>
            <div className="movement" ref={ref}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.5 }}
              >
                <Routes>
                  {movies.map((element, id) => (
                    <Route
                      key={id}
                      path={`/movies/${id}`} // Adjust the path as needed
                      element={
                        <Info
                          title={element.title}
                          posterURL={element.posterUrl}
                        />
                      }
                    />
                  ))}
                </Routes>
                {selectedMovie && (
                  <Modal movie={selectedMovie} onClose={closeModal} />
                )}
                {movies.map((element, id) => (
                  <Link
                    key={id}
                    to={`/movies/${id}`}
                    onClick={() => openModal(element)}
                  >
                    <Movies
                      title={element.title}
                      posterURL={element.posterUrl}
                      plot={element.plot}
                      director={element.director}
                      year={element.year}
                      genres={element.genres}
                      actors={element.actors}
                    />
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="foot">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
