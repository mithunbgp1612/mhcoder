import React, { useState } from "react";

import projectHospitalImg from "../Image/projectImg/hospital.png";
import projectCalcImg from "../Image/projectImg/calculator.png";
import projectBookImg from "../Image/projectImg/book.png";
import projectTicketImg from "../Image/projectImg/online-ticket.jpg";

export default function AllProject() {

  const projects = [
    {
      id: 1,
      projectName: "Hospital Management System",
      projectImg: projectHospitalImg,
      category: "Java Full Stack",
      technologies: "Java • Spring Boot • MySQL • React",
      projectDiscription:
        "A complete hospital management application for managing patients, doctors, appointments and hospital records.",
    },

    {
      id: 2,
      projectName: "Online Train Ticket Booking System",
      projectImg: projectTicketImg,
      category: "Full Stack",
      technologies: "Java • Spring Boot • MySQL • React",
      projectDiscription:
        "An online train ticket booking application with user registration, train search, booking and ticket management.",
    },

    {
      id: 3,
      projectName: "Book Management System",
      projectImg: projectBookImg,
      category: "Java Backend",
      technologies: "Java • Spring Boot • JPA • MySQL",
      projectDiscription:
        "A CRUD-based book management system to add, update, delete and search book records.",
    },

    {
      id: 4,
      projectName: "Live News Application",
      projectImg: projectHospitalImg,
      category: "React JS",
      technologies: "React • REST API • JavaScript",
      projectDiscription:
        "A live news application that displays latest news using API integration and responsive UI.",
    },

    {
      id: 5,
      projectName: "React JS Project",
      projectImg: projectCalcImg,
      category: "Frontend",
      technologies: "React JS • JavaScript • CSS",
      projectDiscription:
        "A practical React JS project demonstrating components, props, state, hooks and API integration.",
    },

    {
      id: 6,
      projectName: "Calculator Web Application",
      projectImg: projectCalcImg,
      category: "Web Development",
      technologies: "HTML • CSS • JavaScript",
      projectDiscription:
        "A simple and responsive calculator application for performing basic mathematical operations.",
    },

    {
      id: 7,
      projectName: "Hotel Management System",
      projectImg: projectHospitalImg,
      category: "Java Full Stack",
      technologies: "Java • Spring Boot • React • MySQL",
      projectDiscription:
        "A hotel management system for room management, customer registration, booking and payment management.",
    },

    {
      id: 8,
      projectName: "Employee Management System",
      projectImg: projectBookImg,
      category: "Spring Boot",
      technologies: "Spring Boot • JPA • MySQL • REST API",
      projectDiscription:
        "An employee management application to manage employee details, departments and employee records.",
    },

    {
      id: 9,
      projectName: "E-Commerce Web Application",
      projectImg: projectTicketImg,
      category: "Full Stack",
      technologies: "React • Spring Boot • MySQL",
      projectDiscription:
        "An e-commerce application with product listing, user login, shopping cart and order management.",
    },

    {
      id: 10,
      projectName: "Student Management System",
      projectImg: projectBookImg,
      category: "Java Project",
      technologies: "Java • Spring Boot • MySQL",
      projectDiscription:
        "A student management system for managing student registration, courses, marks and student information.",
    },

    {
      id: 11,
      projectName: "Banking Application",
      projectImg: projectHospitalImg,
      category: "Java Backend",
      technologies: "Java • Spring Boot • MySQL • REST API",
      projectDiscription:
        "A banking application demonstrating customer accounts, deposits, withdrawals and transaction management.",
    },

    {
      id: 12,
      projectName: "Weather Application",
      projectImg: projectCalcImg,
      category: "React JS",
      technologies: "React • JavaScript • Weather API",
      projectDiscription:
        "A weather application that displays current weather information using an external API.",
    },

    {
      id: 13,
      projectName: "Chat Application",
      projectImg: projectTicketImg,
      category: "Web Application",
      technologies: "React • Spring Boot • WebSocket",
      projectDiscription:
        "A real-time chat application for sending and receiving messages between users.",
    },

    {
      id: 14,
      projectName: "Online Examination System",
      projectImg: projectBookImg,
      category: "Full Stack",
      technologies: "Java • Spring Boot • React • MySQL",
      projectDiscription:
        "An online examination platform where students can attend exams and view their results.",
    },

    {
      id: 15,
      projectName: "Food Delivery Application",
      projectImg: projectTicketImg,
      category: "Full Stack",
      technologies: "React • Spring Boot • MySQL",
      projectDiscription:
        "A food delivery application with restaurants, food items, cart, orders and customer management.",
    },

    {
      id: 16,
      projectName: "Portfolio Website",
      projectImg: projectCalcImg,
      category: "Frontend",
      technologies: "React • HTML • CSS • Bootstrap",
      projectDiscription:
        "A modern responsive portfolio website for presenting skills, projects, experience and contact information.",
    },

    {
      id: 17,
      projectName: "Expense Tracker",
      projectImg: projectBookImg,
      category: "React JS",
      technologies: "React • JavaScript • Bootstrap",
      projectDiscription:
        "An expense management application to add income, expenses and track monthly spending.",
    },

    {
      id: 18,
      projectName: "Library Management System",
      projectImg: projectHospitalImg,
      category: "Java Full Stack",
      technologies: "Java • Spring Boot • JPA • MySQL",
      projectDiscription:
        "A library management system for books, students, issue records and return management.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;

  const indexOfFirstProject =
    indexOfLastProject - projectsPerPage;

  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(
    projects.length / projectsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >

      {/* ================= HERO ================= */}

      <section
        style={{
          background:
            "linear-gradient(135deg, #0F172A, #172554, #1E3A8A)",
          padding: "75px 20px",
          color: "white",
        }}
      >
        <div className="container text-center">

          <span
            style={{
              display: "inline-block",
              background: "rgba(6,182,212,0.15)",
              color: "#67E8F9",
              padding: "8px 18px",
              borderRadius: "30px",
              fontWeight: "700",
              marginBottom: "18px",
            }}
          >
            MHCODER PROJECTS
          </span>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 60px)",
              fontWeight: "800",
              marginBottom: "15px",
            }}
          >
            Practical{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #60A5FA, #22D3EE, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h1>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#CBD5E1",
              fontSize: "17px",
              lineHeight: "1.8",
            }}
          >
            Learn programming by building real-world projects using
            Java, Spring Boot, React JS, MySQL and REST APIs.
          </p>

        </div>
      </section>


      {/* ================= PROJECT STATS ================= */}

      <section style={{ marginTop: "-35px" }}>

        <div className="container">

          <div className="row g-3">

            {[
              ["18+", "Projects"],
              ["8+", "Technologies"],
              ["6", "Projects / Page"],
              ["100%", "Practical"],
            ].map(([number, title], index) => (

              <div
                className="col-6 col-lg-3"
                key={index}
              >

                <div
                  style={{
                    background: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "16px",
                    padding: "22px 10px",
                    textAlign: "center",
                    boxShadow:
                      "0 8px 25px rgba(15,23,42,0.08)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >

                  <h3
                    style={{
                      color: "#2563EB",
                      fontWeight: "800",
                    }}
                  >
                    {number}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#64748B",
                      fontSize: "14px",
                    }}
                  >
                    {title}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        className="py-5"
        id="project-card"
      >

        <div className="container">

          <div className="text-center mb-5">

            <span
              style={{
                color: "#2563EB",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              PROJECT COLLECTION
            </span>

            <h2
              style={{
                color: "#0F172A",
                fontWeight: "800",
                marginTop: "8px",
              }}
            >
              All Project Summaries
            </h2>

            <p
              style={{
                color: "#64748B",
              }}
            >
              Choose a project and start learning through practical
              development.
            </p>

          </div>


          {/* PROJECT CARDS */}

          <div className="row g-4">

            {currentProjects.map((project) => (

              <div
                key={project.id}
                className="col-md-6 col-lg-4"
              >

                <div
                  style={{
                    background: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "18px",
                    overflow: "hidden",
                    height: "100%",
                    boxShadow:
                      "0 8px 30px rgba(15,23,42,0.07)",
                  }}
                >

                  {/* IMAGE */}

                  <div
                    style={{
                      position: "relative",
                    }}
                  >

                    <img
                      src={project.projectImg}
                      alt={project.projectName}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#2563EB",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "700",
                      }}
                    >
                      {project.category}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div
                    style={{
                      padding: "22px",
                    }}
                  >

                    <h4
                      style={{
                        color: "#0F172A",
                        fontWeight: "800",
                        fontSize: "20px",
                        lineHeight: "1.4",
                      }}
                    >
                      {project.projectName}
                    </h4>

                    <p
                      style={{
                        color: "#64748B",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        minHeight: "72px",
                      }}
                    >
                      {project.projectDiscription}
                    </p>


                    {/* TECHNOLOGIES */}

                    <div
                      style={{
                        background: "#F8FAFC",
                        borderRadius: "8px",
                        padding: "9px 10px",
                        marginBottom: "18px",
                        color: "#475569",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {project.technologies}
                    </div>


                    {/* BUTTON */}

                    <a
                      href="#"
                      className="btn w-100"
                      style={{
                        background:
                          "linear-gradient(90deg, #2563EB, #06B6D4)",
                        color: "white",
                        borderRadius: "9px",
                        padding: "10px",
                        fontWeight: "700",
                      }}
                    >
                      Learn More →
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* ================= PAGINATION ================= */}

          <div className="d-flex justify-content-center align-items-center gap-2 mt-5">

            <button
              className="btn"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              style={{
                background:
                  currentPage === 1
                    ? "#E2E8F0"
                    : "#2563EB",
                color:
                  currentPage === 1
                    ? "#94A3B8"
                    : "white",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "700",
              }}
            >
              ← Previous
            </button>


            {/* PAGE NUMBERS */}

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                className="btn"
                onClick={() => {
                  setCurrentPage(page);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                style={{
                  background:
                    currentPage === page
                      ? "#06B6D4"
                      : "white",
                  color:
                    currentPage === page
                      ? "#0F172A"
                      : "#2563EB",
                  border:
                    "1px solid #DBEAFE",
                  borderRadius: "8px",
                  minWidth: "40px",
                  fontWeight: "700",
                }}
              >
                {page}
              </button>

            ))}


            <button
              className="btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{
                background:
                  currentPage === totalPages
                    ? "#E2E8F0"
                    : "#2563EB",
                color:
                  currentPage === totalPages
                    ? "#94A3B8"
                    : "white",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "700",
              }}
            >
              Next →
            </button>

          </div>


          <div
            className="text-center mt-3"
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Page {currentPage} of {totalPages}
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #0F172A, #172554, #312E81)",
        }}
      >

        <div className="container text-center">

          <h2
            style={{
              color: "white",
              fontWeight: "800",
            }}
          >
            Don't Just Learn — Build Projects
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              maxWidth: "650px",
              margin: "15px auto 25px",
              lineHeight: "1.7",
            }}
          >
            Practice what you learn by building real-world projects
            and improve your development skills.
          </p>

          <a
            href="/tutorials"
            className="btn"
            style={{
              background: "#06B6D4",
              color: "#0F172A",
              padding: "12px 28px",
              borderRadius: "9px",
              fontWeight: "800",
            }}
          >
            Start Learning →
          </a>

        </div>

      </section>

    </div>
  );
}