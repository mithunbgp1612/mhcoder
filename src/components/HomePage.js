import React from "react";
import MyImg from "./Image/mithun.png";

import FlipkartImg from "./Image/companiesLogo/Flipkart-Logo.png";
import AmazonImg from "./Image/companiesLogo/Amazon logo.png";
import GoogleImg from "./Image/companiesLogo/google.png";
import MyntraImg from "./Image/companiesLogo/myntra.png";
import TcsImg from "./Image/companiesLogo/tcs.png";
import WiproImg from "./Image/companiesLogo/wipro.png";

import projectHospitalImg from "./Image/projectImg/hospital.png";
import projectCalcImg from "./Image/projectImg/calculator.png";
import projectBookImg from "./Image/projectImg/book.png";
import projectTicketImg from "./Image/projectImg/online-ticket.jpg";

import JavaImg from "./Image/TechImg/core-java.png";
import JdbcImg from "./Image/TechImg/servlet.png";
import MyqslImg from "./Image/TechImg/mysql.png";
import SpringImg from "./Image/TechImg/spring-boot.png";
import ReactImg from "./Image/TechImg/react.png";
import HtmlImg from "./Image/TechImg/Html.png";
import ServletImg from "./Image/TechImg/servlet.png";
import BootstrapImg from "./Image/TechImg/bootstrap-logo.jpg";

export default function HomePage() {
  const courses = [
    {
      title: "Core Java",
      image: JavaImg,
      description:
        "Learn Java from basics to advanced concepts with practical examples.",
      level: "Beginner to Advanced",
    },
    {
      title: "JDBC",
      image: JdbcImg,
      description:
        "Learn database connectivity and perform CRUD operations using Java.",
      level: "Beginner",
    },
    {
      title: "Servlet",
      image: ServletImg,
      description:
        "Understand Java Servlet and backend web application development.",
      level: "Intermediate",
    },
    {
      title: "Spring Boot",
      image: SpringImg,
      description:
        "Build REST APIs, backend applications and microservices using Spring Boot.",
      level: "Intermediate",
    },
    {
      title: "MySQL",
      image: MyqslImg,
      description:
        "Learn SQL, database design, queries, joins and CRUD operations.",
      level: "Beginner to Advanced",
    },
    {
      title: "React JS",
      image: ReactImg,
      description:
        "Create modern and responsive frontend applications using React JS.",
      level: "Beginner to Advanced",
    },
    {
      title: "HTML & CSS",
      image: HtmlImg,
      description:
        "Learn website structure, styling and responsive web design.",
      level: "Beginner",
    },
    {
      title: "Bootstrap",
      image: BootstrapImg,
      description:
        "Build responsive websites quickly using Bootstrap components.",
      level: "Beginner",
    },
  ];

  const roadmap = [
    {
      number: "01",
      title: "Learn Programming Basics",
      text: "Start with programming fundamentals, variables, loops, conditions and functions.",
    },
    {
      number: "02",
      title: "Master Core Java",
      text: "Learn OOP, Collections, Exception Handling, Multithreading and Java 8+.",
    },
    {
      number: "03",
      title: "Database & SQL",
      text: "Learn MySQL, SQL queries, joins, relationships and database design.",
    },
    {
      number: "04",
      title: "Backend Development",
      text: "Build REST APIs and enterprise applications using Spring Boot and Hibernate.",
    },
    {
      number: "05",
      title: "Frontend Development",
      text: "Learn HTML, CSS, Bootstrap and React JS to create modern user interfaces.",
    },
    {
      number: "06",
      title: "Projects & Interview",
      text: "Build real-world projects and prepare for Java developer interviews.",
    },
  ];

  const projects = [
    {
      image: projectHospitalImg,
      title: "Hospital Management System",
      text: "Practice backend development by building a complete hospital management application.",
    },
    {
      image: projectTicketImg,
      title: "Online Ticket Booking",
      text: "Learn real-world booking flow, database operations and application logic.",
    },
    {
      image: projectBookImg,
      title: "Book Management System",
      text: "Practice CRUD operations, REST APIs and database connectivity.",
    },
    {
      image: projectCalcImg,
      title: "Calculator Application",
      text: "Improve your programming fundamentals by creating a practical calculator project.",
    },
  ];

  const companies = [
    AmazonImg,
    GoogleImg,
    FlipkartImg,
    MyntraImg,
    TcsImg,
    WiproImg,
  ];

  const videos = [
    "https://www.youtube.com/embed/CeH8jlXLFtY",
    "https://www.youtube.com/embed/wRTR7cYENs4",
    "https://www.youtube.com/embed/Zn35OTHgwb4",
    "https://www.youtube.com/embed/Rek54N7-y-o",
  ];

  const cardStyle = {
    borderRadius: "18px",
    boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
    border: "1px solid #e2e8f0",
    overflow: "hidden",
  };

  return (
    <div
      style={{
        background: "#f8fafc",
        color: "#0f172a",
        overflow: "hidden",
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #eff6ff 0%, #e0f2fe 45%, #ecfeff 100%)",
          padding: "85px 0",
          position: "relative",
        }}
      >
        {/* Background circles */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "rgba(37,99,235,0.08)",
            borderRadius: "50%",
            top: "-100px",
            right: "-80px",
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  padding: "9px 18px",
                  borderRadius: "30px",
                  fontWeight: "700",
                  display: "inline-block",
                  marginBottom: "20px",
                }}
              >
                🚀 Learn • Practice • Build • Get Job Ready
              </span>

              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                  color: "#0f172a",
                }}
              >
                Learn{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #2563eb, #06b6d4, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Java & Full Stack Development
                </span>{" "}
                with MHCoder
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  color: "#475569",
                  lineHeight: "1.8",
                  maxWidth: "650px",
                }}
              >
                Learn programming in simple language with practical examples,
                real-world projects, interview questions and step-by-step
                tutorials.
              </p>

              <div className="mt-4">
                <a
                  href="#courses"
                  className="btn btn-lg me-3"
                  style={{
                    background: "#2563eb",
                    color: "white",
                    borderRadius: "10px",
                    padding: "12px 25px",
                    border: "none",
                    boxShadow: "0 8px 20px rgba(37,99,235,0.25)",
                  }}
                >
                  Start Learning 🚀
                </a>

                <a
                  href="#tutorials"
                  className="btn btn-lg"
                  style={{
                    border: "2px solid #0f172a",
                    color: "#0f172a",
                    borderRadius: "10px",
                    padding: "10px 25px",
                  }}
                >
                  Watch Tutorials ▶
                </a>
              </div>

              <div className="row mt-5">
                <div className="col-4">
                  <h3 style={{ color: "#2563eb" }} className="fw-bold">
                    50+
                  </h3>
                  <p className="text-muted">Tutorials</p>
                </div>

                <div className="col-4">
                  <h3 style={{ color: "#06b6d4" }} className="fw-bold">
                    20+
                  </h3>
                  <p className="text-muted">Projects</p>
                </div>

                <div className="col-4">
                  <h3 style={{ color: "#7c3aed" }} className="fw-bold">
                    100+
                  </h3>
                  <p className="text-muted">Interview Q&A</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <div
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderRadius: "30px",
                  padding: "25px",
                  boxShadow: "0 20px 50px rgba(15,23,42,0.15)",
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                <img
                  src={MyImg}
                  alt="MHCoder Instructor"
                  style={{
                    width: "300px",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />

                <h4 className="mt-3 mb-1 fw-bold">Harsh</h4>

                <p className="text-muted mb-0">
                  Programming & Development Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section id="courses" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#2563eb",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              OUR COURSES
            </span>

            <h2 className="fw-bold mt-2">
              Learn Skills That Help You Build Your Career
            </h2>

            <p className="text-muted">
              Choose a technology and start learning step by step.
            </p>
          </div>

          <div className="row">
            {courses.map((course, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={index}
              >
                <div className="card h-100 border-0" style={cardStyle}>
                  <div
                    style={{
                      height: "155px",
                      background:
                        "linear-gradient(135deg, #eff6ff, #ecfeff)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <span
                      className="badge mb-2"
                      style={{
                        background: "#dbeafe",
                        color: "#1d4ed8",
                      }}
                    >
                      {course.level}
                    </span>

                    <h5 className="fw-bold">{course.title}</h5>

                    <p
                      className="text-muted"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                      }}
                    >
                      {course.description}
                    </p>

                    <button
                      className="btn w-100"
                      style={{
                        color: "#2563eb",
                        border: "1px solid #2563eb",
                        borderRadius: "8px",
                      }}
                    >
                      Start Learning →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROADMAP ================= */}
      <section
        id="roadmap"
        className="py-5"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#7c3aed",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              LEARNING ROADMAP
            </span>

            <h2 className="fw-bold mt-2">
              Become a Java Full Stack Developer
            </h2>

            <p className="text-muted">
              Follow this roadmap and learn development step by step.
            </p>
          </div>

          <div className="row">
            {roadmap.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  style={{
                    height: "100%",
                    padding: "25px",
                    border: "1px solid #e2e8f0",
                    borderRadius: "18px",
                    background: "#ffffff",
                    boxShadow: "0 7px 25px rgba(15,23,42,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background:
                        "linear-gradient(135deg, #2563eb, #06b6d4)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      marginBottom: "15px",
                      boxShadow: "0 8px 18px rgba(37,99,235,0.2)",
                    }}
                  >
                    {item.number}
                  </div>

                  <h5 className="fw-bold">{item.title}</h5>

                  <p className="text-muted mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#06b6d4",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              PRACTICAL LEARNING
            </span>

            <h2 className="fw-bold mt-2">
              Build Real-World Projects
            </h2>

            <p className="text-muted">
              Don't just watch tutorials. Build projects and improve your
              skills.
            </p>
          </div>

          <div className="row">
            {projects.map((project, index) => (
              <div
                className="col-lg-3 col-md-6 mb-4"
                key={index}
              >
                <div
                  className="card border-0 h-100"
                  style={cardStyle}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "170px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <h5 className="fw-bold">{project.title}</h5>

                    <p className="text-muted">{project.text}</p>

                    <button
                      className="btn"
                      style={{
                        background: "#2563eb",
                        color: "white",
                        borderRadius: "8px",
                      }}
                    >
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERVIEW ================= */}
      <section
        id="interview"
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #172554 45%, #1e3a8a 100%)",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span
                style={{
                  background: "rgba(6,182,212,0.15)",
                  color: "#67e8f9",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  display: "inline-block",
                  fontWeight: "600",
                }}
              >
                🎯 JOB PREPARATION
              </span>

              <h2
                className="fw-bold mt-3"
                style={{ fontSize: "38px" }}
              >
                Prepare for Your Java Developer Interview
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                Learn frequently asked Java, Spring Boot, Hibernate,
                SQL, REST API and React interview questions with
                simple English answers.
              </p>

              <button
                className="btn mt-3 px-4 py-2"
                style={{
                  background: "#06b6d4",
                  color: "#0f172a",
                  fontWeight: "700",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                Start Interview Preparation →
              </button>
            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">
              <div
                className="p-4"
                style={{
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.98)",
                  color: "#0f172a",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                }}
              >
                <h5 className="fw-bold">
                  What You Will Learn
                </h5>

                <hr />

                <p>✅ Core Java Interview Questions</p>
                <p>✅ Spring Boot Questions</p>
                <p>✅ Hibernate & JPA</p>
                <p>✅ SQL & MySQL</p>
                <p>✅ REST API</p>
                <p>✅ Project Explanation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPANIES ================= */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <span
              style={{
                color: "#2563eb",
                fontWeight: "700",
              }}
            >
              CAREER PREPARATION
            </span>

            <h2 className="fw-bold mt-2">
              Prepare for Top Companies
            </h2>

            <p className="text-muted">
              Build the skills required for today's IT industry.
            </p>
          </div>

          <div className="row justify-content-center align-items-center">
            {companies.map((company, index) => (
              <div
                className="col-lg-2 col-md-3 col-4 text-center mb-4"
                key={index}
              >
                <div
                  style={{
                    background: "#ffffff",
                    padding: "15px",
                    borderRadius: "14px",
                    boxShadow: "0 5px 20px rgba(15,23,42,0.07)",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <img
                    src={company}
                    alt="Company"
                    style={{
                      width: "100%",
                      height: "55px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TUTORIALS ================= */}
      <section
        id="tutorials"
        className="py-5"
        style={{
          background:
            "linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#dc2626",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              FREE VIDEO TUTORIALS
            </span>

            <h2 className="fw-bold mt-2">
              Learn Programming Through Videos
            </h2>

            <p className="text-muted">
              Watch practical programming tutorials on our YouTube channel.
            </p>
          </div>

          <div className="row">
            {videos.map((video, index) => (
              <div
                className="col-lg-3 col-md-6 mb-4"
                key={index}
              >
                <div
                  className="card border-0"
                  style={{
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow: "0 8px 25px rgba(15,23,42,0.09)",
                  }}
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={video}
                      title={`MHCoder Tutorial ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="p-3">
                    <h6 className="fw-bold">
                      Programming Tutorial {index + 1}
                    </h6>

                    <a
                      href="https://www.youtube.com/playlist?list=PLom-d71LPgWq952Ekw-Rq_qg1h7dBz_bY"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#2563eb",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      Watch More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY MHCODER ================= */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#7c3aed",
                fontWeight: "700",
              }}
            >
              WHY MHCODER
            </span>

            <h2 className="fw-bold mt-2">
              Why Learn With MHCoder?
            </h2>
          </div>

          <div className="row">
            {[
              {
                icon: "📖",
                title: "Simple Explanation",
                text: "Difficult programming concepts explained in simple language.",
              },
              {
                icon: "💻",
                title: "Practical Coding",
                text: "Learn concepts by writing real code and building projects.",
              },
              {
                icon: "🎯",
                title: "Interview Focused",
                text: "Prepare for technical interviews with practical questions.",
              },
              {
                icon: "🚀",
                title: "Career Growth",
                text: "Develop the skills required to start your IT career.",
              },
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div
                  className="text-center p-4 h-100"
                  style={{
                    background: "#ffffff",
                    borderRadius: "18px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 5px 20px rgba(15,23,42,0.05)",
                  }}
                >
                  <div style={{ fontSize: "40px" }}>
                    {item.icon}
                  </div>

                  <h5 className="fw-bold mt-3">
                    {item.title}
                  </h5>

                  <p className="text-muted mb-0">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="py-5 text-center"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #172554 50%, #312e81 100%)",
          color: "white",
        }}
      >
        <div className="container">
          <h2 className="fw-bold">
            Ready to Start Your Programming Journey?
          </h2>

          <p
            className="mt-3"
            style={{
              color: "#cbd5e1",
              fontSize: "17px",
            }}
          >
            Learn programming, build projects and prepare yourself
            for your dream IT job.
          </p>

          <div className="mt-4">
            <a
              href="#courses"
              className="btn btn-lg me-2"
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "9px",
              }}
            >
              Start Learning
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLom-d71LPgWq952Ekw-Rq_qg1h7dBz_bY"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-lg"
              style={{
                borderRadius: "9px",
              }}
            >
              Visit YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}