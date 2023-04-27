import React, { useContext, useState } from "react";
import "./project.css";
import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/appContext";
import { Link, useNavigate } from "react-router-dom";
import ViewImages from "../ViewImages";

const Projects = () => {
  const {  projects,openModal ,localProjectsData } = useContext(AppContext);
  const isAvailable = projects.length > 0 ? projects : localProjectsData
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate()

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(isAvailable.length - 2);
    }
  };

  const handleNext = () => {
    if (currentIndex < isAvailable.length - 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  return (
    <>
      <div id="projects" className="projects">
        <div>
          <div className="container">
            <div className="section-title text-center center">
              <h2>Projects</h2>
              <hr />
            </div>
            <div className="sectionProject">
              {/* <div className="categories">
                <ul className="cat">
                  <li>
                    <ol className="type">
                      <li>
                        <Link
                          to="/projects"
                          // data-filter="*"
                          className="activeView"
                        >
                          View All Projects
                        </Link>
                      </li>
                    </ol>
                  </li>
                </ul>
              </div> */}
             <center>
             <Button className="viewAll" onClick={()=>navigate('/projects')} variant="contained">
              View All Projects
              </Button>
             </center>
              <Container>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {isAvailable
                    .slice(currentIndex, currentIndex + 3)
                    .map((item, index) => (
                      <Grid item xs={2} sm={4} md={4} key={index}>
                        <div className="card" key={index}>
                          <img
                            onClick={() => openModal(item.image)}
                            src={item.image}
                            alt={item.Name}
                          />
                          <h3>{item.Name}</h3>
                          <p className="ellipsis">{item.description}</p>
                          <Link className="link" to={`/project/${item._id}`}>
                            View Details
                          </Link>
                        </div>
                      </Grid>
                    ))}
                  <ViewImages />
                </Grid>
                <div className="actions">
                  <div>
                    <Button
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className="actionsBTN"
                      variant="contained"
                    >
                      Back
                    </Button>
                  </div>
                  <div>
                    <Button
                      onClick={handleNext}
                      disabled={currentIndex === isAvailable.length - 3}
                      className="actionsBTN"
                      variant="contained"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
