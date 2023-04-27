import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Container } from "@mui/material";
import { AppContext } from "../../context/appContext";
import { Link, useNavigate } from "react-router-dom";
import "./allProjects.css";
import ViewImages from "../../components/ViewImages";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AllProjects() {
  const { projects, openModal,localProjectsData } = React.useContext(AppContext);
  const isAvailable = projects.length > 0 ? projects : localProjectsData
  const navigate = useNavigate();

  return (
    <div className="projects">
     <IconButton onClick={()=>navigate('/')}  className="backButton">
          <ArrowBackIcon /><span className="backText">Go Back</span>
        </IconButton>
      <Container>
        <div className="section-title text-center center">
          <h2>All Projects</h2>
          <hr />
        </div>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {isAvailable.map((project, index) => {
              return (
                <Grid key={index} sx={{ mt: 5 }} item xs={6}>
                  <div className="card" key={index}>
                    <img
                      onClick={(e) => openModal(e.target.currentSrc)}
                      src={project.image}
                      alt={project.Name}
                    />
                    <h3>{project.Name}</h3>
                    <p className="ellipsis">{project.description}</p>
                    <Link className="link" to={`/project/${project._id}`}>
                      View Details
                    </Link>
                  </div>
                  <ViewImages />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Button fullWidth className="link" variant="contained">
          <Link to={"/"} className="back">
            Go Back
          </Link>
        </Button>
      </Container>
    </div>
  );
}
