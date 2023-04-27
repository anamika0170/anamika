import React, { useState, useContext } from "react";
import "./contact.css";
import { Alert, Button, Container, Snackbar } from "@mui/material";
import { AppContext } from "../../context/appContext";

const Contact = () => {
  const {sendContactForm } = useContext(AppContext);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormFilled, setFormFilled] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      sendContactForm(userDetails);
      setIsNotification(true);
      setFormFilled(true);
    } catch (error) {
      setIsNotification(true);
      setFormFilled(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const showNotification = () => {
    return (
      <>
        <Snackbar
          open={isNotification}
          autoHideDuration={6000}
          onClose={()=>setIsNotification(false)}
          anchorOrigin={
            {
              vertical:"top",
              horizontal:"center"
            }
          }
        >
          {
            isFormFilled ?
            <Alert variant="filled" severity="success">Your Information Sent , Soon i will contact you !</Alert>
            :<Alert variant="filled" severity="error">opps! message not sent , try after some time </Alert>
          }
        </Snackbar>
      </>
    );
  };
  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <Container maxWidth="sm">
          <div className="section-title center">
          {showNotification()}
            <h2>Get In Touch</h2>
            <hr />
          </div>
          <div className="col-md-8 col-md-offset-2">
            <form
              onSubmit={handleSubmit}
              name="sentMessage"
              id="contactForm"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                      value={userDetails.name}
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                      value={userDetails.email}
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  value={userDetails.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                className="sendBtn"
              >
                Send Message
              </Button>
            </form>
            <div className="social">
              <ul>
                <li>
                  {/* <a href="#"> */}
                    <i className="fa fa-facebook"></i>
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href="#"> */}
                    <i className="fa fa-twitter"></i>
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href="#"> */}
                    <i className="fa fa-dribbble"></i>
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href="#"> */}
                    <i className="fa fa-behance"></i>
                  {/* </a> */}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
