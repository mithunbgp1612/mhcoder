
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{
        background: "#111827",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div className="container">

        {/* Logo */}
        <a
          className="navbar-brand"
          href="/"
          style={{
            fontSize: "26px",
            fontWeight: "700",
            fontFamily: "Baskervville SC, serif",
          }}
        >
          <span style={{ color: "#22f8d1" }}>MHCoder</span>
          <span style={{ color: "#fff" }}>.com</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link menu-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link menu-link" href="/tutorialPage">
                Courses
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link menu-link" href="/roadmap">
                Roadmap
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link menu-link" href="/all-project">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link menu-link" href="/interview">
                Interview
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link menu-link" href="/tutorials">
                Tutorials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link menu-link" href="/contact">
                Contact
              </a>
            </li>

            {/* Start Learning */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href="/#courses"
                className="start-btn"
              >
                Start Learning
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Navbar CSS */}
      <style>
        {`
          .menu-link {
            color: #e5e7eb !important;
            font-size: 15px;
            font-weight: 500;
            margin: 0 4px;
            padding: 8px 12px !important;
            transition: all 0.3s ease;
          }

          .menu-link:hover {
            color: #22f8d1 !important;
          }

          .start-btn {
            display: inline-block;
            text-decoration: none;
            background: #22f8d1;
            color: #111827;
            font-size: 14px;
            font-weight: 600;
            padding: 9px 18px;
            border-radius: 6px;
            transition: all 0.3s ease;
          }

          .start-btn:hover {
            background: #ffffff;
            color: #111827;
            transform: translateY(-1px);
          }

          .navbar-toggler {
            border: 1px solid #475569;
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }

          @media (max-width: 991px) {
            .navbar-nav {
              padding-top: 15px;
            }

            .menu-link {
              padding: 10px 5px !important;
              border-bottom: 1px solid #1f2937;
            }

            .start-btn {
              display: block;
              text-align: center;
              margin-top: 10px;
            }
          }
        `}
      </style>
    </nav>
  );
}
