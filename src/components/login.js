import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

export default function LoginScreen() {
  return (
    <div className="main-container vh-100 overflow-hidden d-flex">
      <section className="auth-sidebar w-75 d-none d-md-flex h-100 align-items-center pl-0 pl-lg-5 pr-2">
        <div className="sidebar-content p-5 text-white">
          <h1>Welcome back, admin</h1>
          <p>
            “All our dreams can come true, if we have the courage to pursue
            them.”
          </p>
          <p> – Walt Disney</p>
        </div>
      </section>
      <section className="login-content w-100 px-1 px-lg-5 text-center justify-content-center">
        <div className="login-intro pt-3">
          <h2 className="main-title mt-5">Sign in to account</h2>
        </div>
        <div className="login-form px-3 w-100 text-center mx-auto">
          <Form className="login-form mt-5 mx-auto">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="rounded-pill mt-3 text-small"
                placeholder="Enter Username..."
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                className="rounded-pill"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox"
              className="d-flex justify-content-between"
            >
              <Form.Check
                custom
                type="checkbox"
                id="custom-checkbox"
                label="Remember Me"
                className="text-secondary"
              />
              <a href="#">Forgot password?</a>
            </Form.Group>
            <Button className="main-button rounded-pill" type="submit">
              Sign in
            </Button>
            <hr />
            <p className="text-secondary mt-4">Or use your another account</p>
            <div className="social-media-login justify-content-between mx-auto">
              <Button
                className="social-media-facebook rounded-pill"
                type="submit"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Button>
              <button className="social-media-google rounded-pill mt-2">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </button>
            </div>
            <div className="d-flex justify-content-around mt-5">
              <a href="#" className="small">
                Privacy policy
              </a>
              <a href="#" className="small">
                Term &amp; Condition
              </a>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
}
