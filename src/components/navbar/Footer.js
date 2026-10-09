
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "#d1d5db",
        paddingTop: "50px",
      }}
    >
      <div className="container">

        <div className="row">

          {/* ================= ABOUT ================= */}
          <div className="col-lg-4 col-md-6 mb-4">

            <h4
              style={{
                color: "#22f8d1",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              MHCoder<span style={{ color: "#fff" }}>.com</span>
            </h4>

            <p
              style={{
                lineHeight: "1.8",
                fontSize: "14px",
              }}
            >
              MHCoder is an educational platform where you can learn
              Java, Spring Boot, MySQL, React and Full Stack Development
              through simple tutorials, practical projects and interview
              preparation.
            </p>

            <p
              style={{
                color: "#9ca3af",
                fontSize: "14px",
              }}
            >
              Learn • Practice • Build • Grow
            </p>

          </div>

          {/* ================= LEARNING ================= */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h5
              style={{
                color: "#fff",
                fontWeight: "600",
                marginBottom: "18px",
              }}
            >
              Learning
            </h5>

            <ul
              className="list-unstyled"
              style={{ lineHeight: "2" }}
            >
              <li>
                <a href="/#courses" className="footer-link">
                  Courses
                </a>
              </li>

              <li>
                <a href="/#roadmap" className="footer-link">
                  Roadmap
                </a>
              </li>

              <li>
                <a href="/#tutorials" className="footer-link">
                  Tutorials
                </a>
              </li>

              <li>
                <a href="/#projects" className="footer-link">
                  Projects
                </a>
              </li>
            </ul>

          </div>

          {/* ================= CAREER ================= */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5
              style={{
                color: "#fff",
                fontWeight: "600",
                marginBottom: "18px",
              }}
            >
              Career
            </h5>

            <ul
              className="list-unstyled"
              style={{ lineHeight: "2" }}
            >

              <li>
                <a href="/#interview" className="footer-link">
                  Interview Preparation
                </a>
              </li>

              <li>
                <a href="/#projects" className="footer-link">
                  Practical Projects
                </a>
              </li>

              <li>
                <a href="/#courses" className="footer-link">
                  Java Full Stack
                </a>
              </li>

              <li>
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5
              style={{
                color: "#fff",
                fontWeight: "600",
                marginBottom: "18px",
              }}
            >
              Contact
            </h5>

            <p style={{ fontSize: "14px" }}>
              <strong>Email:</strong>
              <br />
              contact@mhcoder.com
            </p>

            <p style={{ fontSize: "14px" }}>
              <strong>Phone:</strong>
              <br />
              +91 7903047131
              <br />
              +91 9473176939
            </p>

            <p style={{ fontSize: "14px" }}>
              <strong>Location:</strong>
              <br />
              Tilka Manjhi, Bhagalpur
              <br />
              Bihar, India
            </p>

          </div>

        </div>

        {/* ================= SOCIAL MEDIA ================= */}
        <div
          className="text-center"
          style={{
            borderTop: "1px solid #374151",
            paddingTop: "25px",
            marginTop: "10px",
          }}
        >

          <p
            style={{
              color: "#fff",
              marginBottom: "15px",
              fontWeight: "500",
            }}
          >
            Follow MHCoder
          </p>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fab fa-youtube"></i>
          </a>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div
          className="text-center"
          style={{
            borderTop: "1px solid #374151",
            marginTop: "25px",
            padding: "20px 0",
          }}
        >

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#9ca3af",
            }}
          >
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#22f8d1" }}>
              MHCoder.com
            </span>
            . All Rights Reserved.
          </p>

          <p
            style={{
              margin: "5px 0 0",
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            Learn Programming • Build Projects • Grow Your Career
          </p>

        </div>

      </div>

      {/* ================= FOOTER CSS ================= */}
      <style>
        {`
          .footer-link {
            color: #9ca3af;
            text-decoration: none;
            font-size: 14px;
            transition: all 0.3s ease;
          }

          .footer-link:hover {
            color: #22f8d1;
            padding-left: 4px;
          }

          .social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border: 1px solid #374151;
            border-radius: 50%;
            color: #d1d5db;
            margin: 0 5px;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .social-link:hover {
            color: #111827;
            background: #22f8d1;
            border-color: #22f8d1;
            transform: translateY(-3px);
          }
        `}
      </style>
    </footer>
  );
}
