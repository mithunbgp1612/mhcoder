import React from "react";
import JavaCore from "../Image/javacore.png";
import SpringTut from "../Image/spring.jpg";
import RestApiTut from "../Image/RestApiTut.png";
import HibernateTut from "../Image/hibernateTut.jpg";
import ReactTut from "../Image/reactTut.jpg";
import MySqlTut from "../Image/mysqltut.jpg";

export default function TutorialPage() {
  const tutorials = [
    {
      title: "Java Full Course for Beginners",
      category: "Core Java",
      duration: "2:45:30",
      description:
        "Learn Java from basics to advanced concepts with practical examples.",
      thumbnail:
        JavaCore,
      youtube:
        "https://www.youtube.com/channel/UCaJxc1E08-F40vBoXx2f46Q",
    },
    {
      title: "Spring Boot Tutorial for Beginners",
      category: "Spring Boot",
      duration: "1:35:20",
      description:
        "Learn Spring Boot, REST API, Controller, Service and Repository step by step.",
      thumbnail:
      SpringTut,
      youtube:
        "https://www.youtube.com/channel/UCaJxc1E08-F40vBoXx2f46Q",
    },
    {
      title: "Hibernate & JPA Complete Tutorial",
      category: "Hibernate",
      duration: "1:20:15",
      description:
        "Understand Hibernate, JPA, Entity, Repository and database integration.",
      thumbnail:
      HibernateTut,
      youtube:
        "https://www.youtube.com/channel/UCaJxc1E08-F40vBoXx2f46Q",
    },
    {
      title: "MySQL Complete Tutorial",
      category: "MySQL",
      duration: "2:10:45",
      description:
        "Learn SQL and MySQL with queries, joins, constraints and real examples.",
      thumbnail:
      MySqlTut,
      youtube:
        "https://www.youtube.com/channel/UCaJxc1E08-F40vBoXx2f46Q",
    },
    {
      title: "React JS Tutorial for Beginners",
      category: "React JS",
      duration: "1:45:30",
      description:
        "Learn React components, props, state, hooks, routing and API integration.",
      thumbnail:
      ReactTut,
      youtube:
        "https://www.youtube.com/channel/UCaJxc1E08-F40vBoXx2f46Q",
    },
    {
      title: "REST API with Spring Boot",
      category: "REST API",
      duration: "1:10:25",
      description:
        "Build professional REST APIs using Spring Boot and Spring Data JPA.",
      thumbnail:
      RestApiTut,
      youtube:
        "https://www.youtube.com/channel/UCaJxc1E08-F40vBoXx2f46Q",
    },
  ];

  const categories = [
    "All Tutorials",
    "Core Java",
    "Spring Boot",
    "Hibernate",
    "MySQL",
    "React JS",
    "REST API",
  ];

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>

      {/* HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #172554 55%, #1E3A8A 100%)",
          padding: "80px 20px",
          color: "white",
        }}
      >
        <div className="container text-center">
          <div
            style={{
              display: "inline-block",
              background: "rgba(6,182,212,0.15)",
              color: "#67E8F9",
              padding: "8px 18px",
              borderRadius: "30px",
              fontWeight: "600",
              marginBottom: "18px",
            }}
          >
            YouTube Tutorials
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              fontWeight: "800",
              marginBottom: "18px",
            }}
          >
            Learn. Practice.{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #60A5FA, #22D3EE, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build.
            </span>
          </h1>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#CBD5E1",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Watch practical programming tutorials on Java, Spring Boot,
            Hibernate, MySQL, React JS and Full Stack Development.
          </p>

          <div className="mt-4">
            <a
              href="#tutorials"
              className="btn"
              style={{
                background: "#06B6D4",
                color: "#0F172A",
                fontWeight: "700",
                borderRadius: "10px",
                padding: "12px 28px",
              }}
            >
              Explore Tutorials →
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ marginTop: "-35px" }}>
        <div className="container">
          <div
            className="row g-3"
            style={{ position: "relative", zIndex: 2 }}
          >
            {[
              ["50+", "Video Tutorials"],
              ["8+", "Technologies"],
              ["20+", "Practical Projects"],
              ["100+", "Interview Questions"],
            ].map(([number, label], index) => (
              <div className="col-6 col-lg-3" key={index}>
                <div
                  style={{
                    background: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "16px",
                    padding: "22px 10px",
                    textAlign: "center",
                    boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
                  }}
                >
                  <h3
                    style={{
                      color: "#2563EB",
                      fontWeight: "800",
                      marginBottom: "5px",
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
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="py-5" id="tutorials">
        <div className="container">

          <div className="text-center mb-4">
            <span
              style={{
                color: "#2563EB",
                fontWeight: "700",
              }}
            >
              LEARNING CONTENT
            </span>

            <h2
              style={{
                fontWeight: "800",
                color: "#0F172A",
                marginTop: "8px",
              }}
            >
              Explore Our Tutorials
            </h2>

            <p style={{ color: "#64748B" }}>
              Select a technology and start learning today.
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((category, index) => (
              <button
                key={index}
                className="btn"
                style={{
                  background:
                    index === 0 ? "#2563EB" : "#EFF6FF",
                  color: index === 0 ? "white" : "#2563EB",
                  border: "1px solid #DBEAFE",
                  borderRadius: "25px",
                  padding: "9px 18px",
                  fontWeight: "600",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* TUTORIAL CARDS */}
          <div className="row g-4">
            {tutorials.map((tutorial, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  style={{
                    height: "100%",
                    background: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "18px",
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(15,23,42,0.07)",
                    transition: "0.3s",
                  }}
                >
                  {/* THUMBNAIL */}
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      style={{
                        width: "100%",
                        height: "210px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#DC2626",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      YouTube
                    </span>

                    <span
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        background: "rgba(15,23,42,0.9)",
                        color: "white",
                        padding: "5px 9px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      {tutorial.duration}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div style={{ padding: "22px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#EFF6FF",
                        color: "#2563EB",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      {tutorial.category}
                    </span>

                    <h5
                      style={{
                        color: "#0F172A",
                        fontWeight: "750",
                        lineHeight: "1.4",
                      }}
                    >
                      {tutorial.title}
                    </h5>

                    <p
                      style={{
                        color: "#64748B",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        minHeight: "68px",
                      }}
                    >
                      {tutorial.description}
                    </p>

                    <a
                      href={tutorial.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      ▶ Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WATCH */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #EFF6FF, #ECFEFF)",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <span
                style={{
                  color: "#2563EB",
                  fontWeight: "700",
                }}
              >
                WHY MHCODER?
              </span>

              <h2
                style={{
                  color: "#0F172A",
                  fontWeight: "800",
                  fontSize: "38px",
                  marginTop: "10px",
                }}
              >
                Learn Programming With Practical Examples
              </h2>

              <p
                style={{
                  color: "#64748B",
                  lineHeight: "1.8",
                }}
              >
                Our tutorials focus on practical development so that you can
                understand concepts and use them in real projects.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  ["01", "Simple Explanation"],
                  ["02", "Practical Coding"],
                  ["03", "Real Projects"],
                  ["04", "Interview Preparation"],
                ].map(([number, title], index) => (
                  <div className="col-sm-6" key={index}>
                    <div
                      style={{
                        background: "white",
                        borderRadius: "15px",
                        padding: "22px",
                        border: "1px solid #DBEAFE",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          color: "#2563EB",
                          fontSize: "13px",
                          fontWeight: "800",
                          marginBottom: "8px",
                        }}
                      >
                        {number}
                      </div>

                      <h6
                        style={{
                          color: "#0F172A",
                          fontWeight: "700",
                        }}
                      >
                        {title}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* YOUTUBE CTA */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #0F172A, #172554, #312E81)",
        }}
      >
        <div className="container text-center">
          <div style={{ fontSize: "45px", marginBottom: "10px" }}>
            ▶
          </div>

          <h2
            style={{
              color: "white",
              fontWeight: "800",
            }}
          >
            Subscribe to MHCoder on YouTube
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              maxWidth: "650px",
              margin: "10px auto 25px",
            }}
          >
            Get new Java, Spring Boot, React, MySQL and Full Stack Development
            tutorials regularly.
          </p>

          <a
            href="https://www.youtube.com/channel/UCaJxc1E08-F40vBoXx2f46Q"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: "#DC2626",
              color: "white",
              padding: "12px 28px",
              borderRadius: "9px",
              fontWeight: "700",
            }}
          >
            ▶ Visit YouTube Channel
          </a>
        </div>
      </section>

    </div>
  );
}