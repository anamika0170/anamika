import React, { useContext } from "react";
import { Grid, Paper, Container, Button } from "@mui/material";
import "./about.css";
import { Link } from "react-scroll";
import { AppContext } from "../../context/appContext"; 
import ViewImages from "../ViewImages";

function About() {
  const { myDetails, openModal } = useContext(AppContext);
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
  return (
    <div key={myDetails._id} id="about" className="about">
      <Container className="container">
        <div className="section-title text-center center">
          <h2>About Me</h2>
          <hr />
        </div>
        <div style={styles.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper style={styles.paper}>
                <img
                  onClick={() => openModal(myDetails.image)}
                  src={myDetails.image}
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
                    <p>{myDetails.Description}</p>
                    <h4>Technical skills</h4>
                    <p>There are technical skills which I worked on : </p>
                    <Container maxWidth="xs">
                      <ul>
                        {myDetails.technicalSkills &&
                          myDetails.technicalSkills.map((skills, index) => (
                            <li key={index}>{skills}</li>
                          ))}
                      </ul>
                    </Container>
                  </div>
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
