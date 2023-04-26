import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#333",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function FormRow() {
  const { projects, instagram, facebook, linkedIn } = useContext(AppContext);
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
          <div className="footer-col">
            <h3>
              <strong>Projects</strong>
            </h3>
          </div>
          <div className="footer-col">
            <ul>
              {projects.map((project) => (
                <li className="footerlinks">
                  <Link className="footerlink" to={project.url}>
                    {project.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <div className="footer-col">
            <h3>
              <strong>Contact</strong>
            </h3>
          </div>
          <div className="footer-col">
            <ul>
              <li className="footerlinks">
                Address: House No: 7-8-K, Sector Vandana Nagar, Kolar Road,
                Bhopal [M.P]
              </li>
              <li className="footerlinks">No: +917987350062</li>
              <li className="footerlinks">
                <Chip
                  sx={{
                    color: "white",
                  }}
                  variant="outlined"
                  label="Email: anamikarajput461@gmail.com"
                />
              </li>
            </ul>
          </div>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <div className="footer-col">
            <h3>
              <strong>Social</strong>
            </h3>
          </div>
          <div className="footer-col">
            <ul>
              <li className="footerlinks">
                <Link to={facebook} className="footerlink">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </Link>
              </li>
              <li className="footerlinks">
                <Link to={instagram} className="footerlink">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </Link>
              </li>
              <li className="footerlinks">
                <Link to={linkedIn} className="footerlink">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#333" }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
