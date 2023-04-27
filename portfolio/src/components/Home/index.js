import React, { useContext } from "react";
import "./home.css";
import { Button } from "@mui/material";
import { AppContext } from "../../context/appContext";
import { Link } from "react-scroll";

const Home = () => {
  const { myDetails } = useContext(AppContext);
  const renderContent = () => {
    return (
      <div className="row">
        <div className="intro-text">
          <h1>{myDetails.Name}</h1>
          <div className="designation">
            {myDetails.Designation &&
              myDetails.Designation.map((designation) => (
                <p key={designation}>{`•  ${designation}`}</p>
              ))}
          </div>
          <Button  variant="contained" className="learnMore">
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="Link"
              to="about"
            >
              Learn More
            </Link>
          </Button>{" "}
        </div>
      </div>
    );
  };

  return (
    <header id="home" className="header">
      <div className="intro">{renderContent()}</div>
    </header>
  );
};

export default Home;
