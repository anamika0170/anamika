import React, { useContext, useState } from "react";
import { Grid, Paper, Container, Button, Snackbar, Alert } from "@mui/material";
import "./about.css";
import { Link } from "react-scroll";
import { AppContext } from "../../context/appContext";
import ViewImages from "../ViewImages";
import aboutImage from "../../assets/about.jpeg";
import { saveAs } from "file-saver";
import pdfPath from "../../assets/Anamikaupdated.pdf";

function About() {
  const [showAlert, setShowAlert] = useState(false);
  const { myDetails, openModal, localMyDetailsData } = useContext(AppContext);
  const isAvailable = myDetails.length > 0 ? myDetails : localMyDetailsData;
  const styles = {
    root: {
      flexGrow: 1,
      margin: "2rem",
    },
    paper: {
      // padding: "2rem",
      textAlign: "center",
      color: "#333",
      boxShadow: "none",
      background: "#9cf6f6",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      padding: "2rem",
    },
    text: {
      textAlign: "left",
      // padding: "2rem",
    },
  };
  const handleDownload = () => {
    const pdfUrl = pdfPath;
    const pdfFileName = "Anamika-Rajput-Resume";
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, pdfFileName);
        setShowAlert(true)
      });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div key={isAvailable._id} id="about" className="about">
      <Container className="container">
        <div className="section-title text-center center">
          <h2>About Me</h2>
          <hr />
        </div>
        <div style={styles.root}>
          <Grid container spacing={3}>
          {showAlert ? (
            <Snackbar
              anchorOrigin={{ vertical: "center", horizontal: "center" }}
              open={showAlert}
              autoHideDuration={6000}
              onClose={handleCloseAlert}
            >
              <Alert
                onClose={handleCloseAlert}
                variant="filled"
                severity="success"
              >
                PDF has been downloaded. You can find it in your download folder
              </Alert>
            </Snackbar>
          ) : null}
            <Grid item xs={12} sm={6}>
              <Paper style={styles.paper}>
                <img
                  onClick={() => openModal(isAvailable.image)}
                  src={isAvailable.image ? isAvailable.image : aboutImage}
                  className="img-responsive"
                  alt=""
                  style={styles.image}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={{ ...styles.paper, ...styles.text }}>
                <div className="about-text">
                  <div className={styles.aboutContent}>
                    <p>{isAvailable.Description}</p>
                    <h4>Technical skills</h4>
                    <p>There are technical skills which I worked on : </p>
                    <Container maxWidth="xs">
                      <ul>
                        {isAvailable.technicalSkills &&
                          isAvailable.technicalSkills.map((skills, index) => (
                            <li key={index}>{skills}</li>
                          ))}
                      </ul>
                    </Container>
                  </div>
                  <div className="aboutMoreInfo">
                    <Button variant="contained" className="viewBTN">
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="Link"
                        to="projects"
                      >
                        My Projects
                      </Link>
                    </Button>
                    <Button
                      onClick={handleDownload}
                      variant="contained"
                      className="downloadResume"
                    >
                      Download Full Resume
                    </Button>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
      <ViewImages />
    </div>
  );
}

export default About;
