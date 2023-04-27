import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Container,
  Chip,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "./projectDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import AOS from "aos";
import "aos/dist/aos.css";
import ViewImages from "../../components/ViewImages";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProjectDetails() {
  const [showStep, setShowStep] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { getProjectDetails, projectDetails, openModal } =
    useContext(AppContext);
  useEffect(() => {
    getProjectDetails(id);
  }, [getProjectDetails , id]);
  const styles = {
    root: {
      flexGrow: 1,
      margin: "2rem",
    },
    paper: {
      // padding: "2rem",
      textAlign: "center",
      color: "white",
      boxShadow: "none",
      background: "#414a52",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      // padding: "2rem",
    },
    text: {
      textAlign: "left",
      // padding: "2rem",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <div id="projectDetails" className="projectDetails">
      <IconButton onClick={() => navigate("/")} className="backButton">
        <ArrowBackIcon />
        <span className="backText">Go Back</span>
      </IconButton>
      <Container className="container">
        <div className="section-title text-center center">
          <h2>{projectDetails.Name}</h2>
          <hr />
        </div>
        <div style={styles.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper style={styles.paper}>
                <img
                  onClick={() => openModal(projectDetails.image)}
                  src={projectDetails.image}
                  className="img-responsive"
                  alt={projectDetails.Name}
                  style={styles.image}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={{ ...styles.paper, ...styles.text }}>
                <div className="desp">
                  <div className={styles.aboutContent}>
                    <p>
                      <strong>
                        <h3>Description:</h3>{" "}
                      </strong>
                      {projectDetails.description}
                    </p>
                    <h3>Skills Used</h3>
                    <Paper
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        listStyle: "none",
                        // p: 0.2,
                        m: 0,
                        backgroundColor: "#414a52",
                        boxShadow: "none",
                      }}
                      component="ul"
                    >
                      {projectDetails.SkillsUsed &&
                        projectDetails.SkillsUsed.map((skills) => {
                          return (
                            <Chip
                              variant="outlined"
                              className="skill"
                              label={skills}
                            />
                          );
                        })}
                    </Paper>
                    <div className="projetLink">
                      <h3>URL : </h3>
                      <p>
                        <Link to={projectDetails.url} className="Link">
                          {projectDetails.url
                            ? projectDetails.url.replace("https://", "")
                            : ""}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className="seeSteps">
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#9cf6f6",
                      "&.Mui-checked": {
                        color: "#9cf6f6",
                      },
                    }}
                    // defaultChecked
                    onClick={() => setShowStep(!showStep)}
                  />
                }
                label={showStep ? "Hide" : "Show"}
              />
            </FormGroup>
          </div>
          <h3>
            CLICK ON Button , IF YOU WANT TO SEE STEPS TO RUN THE APPLIATION THE
            SHOW
          </h3>
        </div>

        {showStep ? (
          <>
            <div style={styles.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Paper style={{ ...styles.paper, ...styles.text }}>
                    <div className="desp">
                      <div className={styles.aboutContent}>
                        <p>
                          <strong>
                            <h3>Step 1 :</h3>{" "}
                          </strong>
                          {projectDetails.step1}
                        </p>
                        <p>
                          <strong>here is url :</strong>
                        </p>
                        <p>
                          {" "}
                          <Link className="projectLink" to={projectDetails.url}>
                            {projectDetails.url}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} data-aos="fade-left">
                  <Paper style={styles.paper}>
                    <img
                      onClick={() => openModal(projectDetails.image1)}
                      src={projectDetails.image1}
                      className="img-responsive"
                      alt=""
                      style={styles.image}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <div style={styles.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} data-aos="fade-right">
                  <Paper style={styles.paper}>
                    <img
                      onClick={() => openModal(projectDetails.image2)}
                      src={projectDetails.image2}
                      className="img-responsive"
                      alt=""
                      style={styles.image}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} data-aos="fade-left">
                  <Paper style={{ ...styles.paper, ...styles.text }}>
                    <div className="desp">
                      <div className={styles.aboutContent}>
                        <p>
                          <strong>
                            <h3>Step 2 :</h3>{" "}
                          </strong>
                          {projectDetails.step2}
                        </p>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <div style={styles.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} data-aos="fade-right">
                  <Paper style={{ ...styles.paper, ...styles.text }}>
                    <div className="desp">
                      <div className={styles.aboutContent}>
                        <p>
                          <strong>
                            <h3>Step 3 :</h3>{" "}
                          </strong>
                          {projectDetails.step3}
                        </p>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} data-aos="fade-left">
                  <Paper style={styles.paper}>
                    <img
                      onClick={() => openModal(projectDetails.image3)}
                      src={projectDetails.image3}
                      className="img-responsive"
                      alt=""
                      style={styles.image}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <div style={styles.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} data-aos="fade-right">
                  <Paper style={styles.paper}>
                    <img
                      onClick={() => openModal(projectDetails.image4)}
                      src={projectDetails.image4}
                      className="img-responsive"
                      alt=""
                      style={styles.image}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} data-aos="fade-left">
                  <Paper style={{ ...styles.paper, ...styles.text }}>
                    <div className="desp">
                      <div className={styles.aboutContent}>
                        <p>
                          <strong>
                            <h3>Step 4 :</h3>{" "}
                          </strong>
                          {projectDetails.step4}
                        </p>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </>
        ) : null}
      </Container>
      <ViewImages />
    </div>
  );
}

export default ProjectDetails;
