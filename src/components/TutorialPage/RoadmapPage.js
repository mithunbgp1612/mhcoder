import React from "react";

export default function RoadmapPage() {
  const roadmap = [
    {
      step: "01",
      title: "Programming Basics",
      duration: "2–3 Weeks",
      icon: "💻",
      color: "#2563EB",
      description:
        "Start with programming fundamentals and develop logical thinking.",
      topics: [
        "Programming Fundamentals",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Methods / Functions",
        "Arrays",
        "Basic Problem Solving",
      ],
    },

    {
      step: "02",
      title: "Core Java",
      duration: "4–6 Weeks",
      icon: "☕",
      color: "#DC2626",
      description:
        "Build strong Java fundamentals and object-oriented programming skills.",
      topics: [
        "OOP Concepts",
        "Class & Object",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Encapsulation",
        "String",
        "Collections",
        "Exception Handling",
        "Multithreading",
        "Java 8",
        "Stream API",
      ],
    },

    {
      step: "03",
      title: "Database & SQL",
      duration: "2–3 Weeks",
      icon: "🗄️",
      color: "#0891B2",
      description:
        "Learn how applications store, retrieve and manage data.",
      topics: [
        "SQL Basics",
        "DDL & DML",
        "Primary Key",
        "Foreign Key",
        "Constraints",
        "Joins",
        "Subqueries",
        "Group By",
        "Indexes",
        "MySQL",
        "SQL Queries",
      ],
    },

    {
      step: "04",
      title: "JDBC",
      duration: "1–2 Weeks",
      icon: "🔗",
      color: "#7C3AED",
      description:
        "Understand how Java applications communicate with databases.",
      topics: [
        "JDBC Architecture",
        "Driver",
        "Connection",
        "Statement",
        "PreparedStatement",
        "ResultSet",
        "CRUD Operations",
        "Database Connectivity",
      ],
    },

    {
      step: "05",
      title: "Servlet & JSP",
      duration: "2–3 Weeks",
      icon: "🌐",
      color: "#EA580C",
      description:
        "Understand traditional Java web development concepts.",
      topics: [
        "Servlet",
        "Servlet Lifecycle",
        "Request & Response",
        "HttpServlet",
        "Session Management",
        "Cookies",
        "JSP",
        "MVC Pattern",
      ],
    },

    {
      step: "06",
      title: "Spring Framework",
      duration: "2–3 Weeks",
      icon: "🌱",
      color: "#16A34A",
      description:
        "Learn the core concepts required for professional Spring development.",
      topics: [
        "Spring Core",
        "IoC",
        "Dependency Injection",
        "Bean",
        "ApplicationContext",
        "Annotations",
        "Spring Configuration",
      ],
    },

    {
      step: "07",
      title: "Spring Boot",
      duration: "4–6 Weeks",
      icon: "🚀",
      color: "#15803D",
      description:
        "Build production-ready backend applications using Spring Boot.",
      topics: [
        "Spring Boot Basics",
        "REST API",
        "Controller",
        "Service",
        "Repository",
        "Spring Data JPA",
        "Validation",
        "Exception Handling",
        "CRUD API",
        "Pagination",
        "API Testing",
      ],
    },

    {
      step: "08",
      title: "Hibernate & JPA",
      duration: "2–3 Weeks",
      icon: "⚙️",
      color: "#CA8A04",
      description:
        "Learn ORM and database integration using Hibernate and JPA.",
      topics: [
        "ORM",
        "Entity",
        "JPA",
        "Hibernate",
        "One-to-One",
        "One-to-Many",
        "Many-to-One",
        "Many-to-Many",
        "Lazy & Eager Loading",
        "Transactions",
      ],
    },

    {
      step: "09",
      title: "Frontend Development",
      duration: "4–5 Weeks",
      icon: "⚛️",
      color: "#0284C7",
      description:
        "Learn frontend technologies required to build modern web applications.",
      topics: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React JS",
        "Components",
        "Props",
        "State",
        "Hooks",
        "React Router",
        "Axios",
      ],
    },

    {
      step: "10",
      title: "Microservices",
      duration: "3–4 Weeks",
      icon: "🔧",
      color: "#4F46E5",
      description:
        "Understand how large applications are designed using microservices.",
      topics: [
        "Microservices Architecture",
        "Eureka Server",
        "API Gateway",
        "Service Discovery",
        "Load Balancing",
        "Inter-Service Communication",
        "RestTemplate",
        "WebClient",
        "Configuration",
      ],
    },

    {
      step: "11",
      title: "Git & GitHub",
      duration: "1 Week",
      icon: "🐙",
      color: "#334155",
      description:
        "Learn version control and maintain your projects professionally.",
      topics: [
        "Git Basics",
        "Repository",
        "Commit",
        "Push",
        "Pull",
        "Branch",
        "Merge",
        "GitHub",
        "README",
      ],
    },

    {
      step: "12",
      title: "Real World Projects",
      duration: "4–8 Weeks",
      icon: "🏗️",
      color: "#9333EA",
      description:
        "Apply everything you learned by building practical projects.",
      topics: [
        "Hospital Management",
        "Hotel Management",
        "Online Ticket Booking",
        "E-Commerce",
        "Book Management",
        "Employee Management",
        "REST API Projects",
        "Full Stack Projects",
      ],
    },

    {
      step: "13",
      title: "Interview Preparation",
      duration: "2–4 Weeks",
      icon: "💼",
      color: "#0F766E",
      description:
        "Prepare yourself for Java Developer and Full Stack interviews.",
      topics: [
        "Core Java Questions",
        "Spring Boot Questions",
        "Hibernate Questions",
        "SQL Questions",
        "REST API Questions",
        "Coding Questions",
        "Project Explanation",
        "HR Questions",
        "Mock Interviews",
      ],
    },
  ];

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
            "linear-gradient(135deg, #0F172A 0%, #172554 55%, #1E3A8A 100%)",
          padding: "80px 20px",
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
            MHCODER LEARNING ROADMAP
          </span>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 62px)",
              fontWeight: "800",
              lineHeight: "1.15",
            }}
          >
            Java Full Stack{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #60A5FA, #22D3EE, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Roadmap
            </span>
          </h1>

          <p
            style={{
              maxWidth: "780px",
              margin: "20px auto 0",
              color: "#CBD5E1",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Follow a step-by-step learning path from programming basics to
            Java, Spring Boot, React, Microservices, real-world projects and
            interview preparation.
          </p>

          <a
            href="#roadmap"
            className="btn mt-4"
            style={{
              background: "#06B6D4",
              color: "#0F172A",
              padding: "12px 28px",
              borderRadius: "10px",
              fontWeight: "800",
            }}
          >
            Start Roadmap →
          </a>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section style={{ marginTop: "-35px" }}>
        <div className="container">

          <div className="row g-3">

            {[
              ["13", "Learning Steps"],
              ["20+", "Technologies"],
              ["100+", "Topics"],
              ["20+", "Projects"],
            ].map(([number, title], index) => (

              <div className="col-6 col-lg-3" key={index}>

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

      {/* ================= ROADMAP ================= */}

      <section
        className="py-5"
        id="roadmap"
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
              STEP BY STEP LEARNING
            </span>

            <h2
              style={{
                color: "#0F172A",
                fontWeight: "800",
                fontSize: "38px",
                marginTop: "8px",
              }}
            >
              Complete Java Full Stack Roadmap
            </h2>

            <p
              style={{
                color: "#64748B",
                maxWidth: "720px",
                margin: "auto",
              }}
            >
              Don't try to learn everything at once. Follow the roadmap
              step-by-step and build your skills gradually.
            </p>

          </div>

          {/* ROADMAP ITEMS */}

          <div
            style={{
              position: "relative",
              maxWidth: "1000px",
              margin: "auto",
            }}
          >

            {/* Vertical Line */}

            <div
              className="d-none d-md-block"
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                bottom: "0",
                width: "3px",
                background:
                  "linear-gradient(#2563EB, #06B6D4, #7C3AED)",
                transform: "translateX(-50%)",
              }}
            />

            {roadmap.map((item, index) => {

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="row mb-5 align-items-center"
                >

                  {/* LEFT */}

                  <div
                    className={`col-md-5 ${
                      isLeft ? "" : "order-md-3"
                    }`}
                  >

                    <div
                      style={{
                        background: "white",
                        border: "1px solid #E2E8F0",
                        borderRadius: "18px",
                        padding: "25px",
                        boxShadow:
                          "0 8px 30px rgba(15,23,42,0.07)",
                      }}
                    >

                      <div className="d-flex justify-content-between align-items-start gap-2">

                        <div>

                          <span
                            style={{
                              color: item.color,
                              fontSize: "12px",
                              fontWeight: "800",
                            }}
                          >
                            STEP {item.step}
                          </span>

                          <h4
                            style={{
                              color: "#0F172A",
                              fontWeight: "800",
                              marginTop: "6px",
                            }}
                          >
                            {item.icon} {item.title}
                          </h4>

                        </div>

                        <span
                          style={{
                            background: "#EFF6FF",
                            color: "#2563EB",
                            padding: "5px 9px",
                            borderRadius: "20px",
                            fontSize: "11px",
                            fontWeight: "700",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.duration}
                        </span>

                      </div>

                      <p
                        style={{
                          color: "#64748B",
                          fontSize: "14px",
                          lineHeight: "1.7",
                        }}
                      >
                        {item.description}
                      </p>

                      <div className="mt-3">

                        {item.topics.map((topic, i) => (

                          <div
                            key={i}
                            style={{
                              color: "#475569",
                              fontSize: "13px",
                              marginBottom: "7px",
                            }}
                          >

                            <span
                              style={{
                                color: item.color,
                                fontWeight: "900",
                                marginRight: "7px",
                              }}
                            >
                              ✓
                            </span>

                            {topic}

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                  {/* CENTER */}

                  <div
                    className={`col-md-2 d-none d-md-flex justify-content-center ${
                      isLeft ? "" : "order-md-2"
                    }`}
                  >

                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "50%",
                        background: item.color,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "800",
                        fontSize: "14px",
                        border: "5px solid #F8FAFC",
                        boxShadow:
                          "0 5px 20px rgba(15,23,42,0.15)",
                        zIndex: 2,
                      }}
                    >
                      {item.step}
                    </div>

                  </div>

                  {/* EMPTY SIDE */}

                  <div
                    className="col-md-5 d-none d-md-block"
                  />

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= IMPORTANT SKILLS ================= */}

      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #EFF6FF, #ECFEFF)",
        }}
      >

        <div className="container">

          <div className="text-center mb-5">

            <span
              style={{
                color: "#2563EB",
                fontWeight: "700",
              }}
            >
              CAREER SKILLS
            </span>

            <h2
              style={{
                color: "#0F172A",
                fontWeight: "800",
                marginTop: "8px",
              }}
            >
              What You Should Be Able to Do
            </h2>

          </div>

          <div className="row g-4">

            {[
              [
                "Backend Development",
                "Build REST APIs using Java, Spring Boot, JPA and MySQL.",
              ],
              [
                "Frontend Development",
                "Create responsive web applications using React JS.",
              ],
              [
                "Database Management",
                "Write SQL queries and design relational databases.",
              ],
              [
                "API Integration",
                "Connect frontend applications with backend REST APIs.",
              ],
              [
                "Microservices",
                "Understand service discovery, API Gateway and communication.",
              ],
              [
                "Project Development",
                "Build complete real-world projects from scratch.",
              ],
            ].map(([title, description], index) => (

              <div
                className="col-md-6 col-lg-4"
                key={index}
              >

                <div
                  style={{
                    background: "white",
                    border: "1px solid #DBEAFE",
                    borderRadius: "16px",
                    padding: "24px",
                    height: "100%",
                  }}
                >

                  <h5
                    style={{
                      color: "#0F172A",
                      fontWeight: "800",
                    }}
                  >
                    {title}
                  </h5>

                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {description}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

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
              fontSize: "38px",
            }}
          >
            Start Your Developer Journey 🚀
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              maxWidth: "650px",
              margin: "15px auto 25px",
              lineHeight: "1.7",
            }}
          >
            Follow the roadmap, learn one technology at a time, build
            practical projects and prepare yourself for your dream IT job.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">

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
              Start Tutorials →
            </a>

            <a
              href="/projects"
              className="btn"
              style={{
                border: "1px solid #475569",
                color: "white",
                padding: "12px 28px",
                borderRadius: "9px",
                fontWeight: "700",
              }}
            >
              Explore Projects
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}