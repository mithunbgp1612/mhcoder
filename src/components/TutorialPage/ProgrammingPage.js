import React from "react";

export default function ProgrammingPage() {
  const topics = [
    {
      title: "Core Java",
      icon: "☕",
      color: "#2563eb",
      description:
        "Learn Java from basic to advanced concepts with simple explanations and practical examples.",
      topics: [
        "Variables & Data Types",
        "OOP Concepts",
        "Collections",
        "Exception Handling",
        "Multithreading",
        "Java 8+",
      ],
    },
    {
      title: "JDBC",
      icon: "🔗",
      color: "#7c3aed",
      description:
        "Learn how Java applications connect with databases and perform CRUD operations.",
      topics: [
        "JDBC Basics",
        "Connection",
        "PreparedStatement",
        "CRUD Operations",
        "ResultSet",
        "Database Connectivity",
      ],
    },
    {
      title: "Servlet",
      icon: "🌐",
      color: "#0891b2",
      description:
        "Understand Java Servlet and learn how backend web applications work.",
      topics: [
        "Servlet Basics",
        "Request & Response",
        "GET & POST",
        "Session",
        "Cookies",
        "Servlet CRUD",
      ],
    },
    {
      title: "Spring Boot",
      icon: "🍃",
      color: "#16a34a",
      description:
        "Build modern backend applications, REST APIs and microservices using Spring Boot.",
      topics: [
        "Spring Boot Basics",
        "REST API",
        "Spring Data JPA",
        "Hibernate",
        "Validation",
        "Microservices",
      ],
    },
    {
      title: "MySQL",
      icon: "🗄️",
      color: "#0284c7",
      description:
        "Learn SQL and database concepts required for backend and full-stack development.",
      topics: [
        "SQL Basics",
        "CREATE & INSERT",
        "SELECT Queries",
        "Joins",
        "Subqueries",
        "CRUD Operations",
      ],
    },
    {
      title: "React JS",
      icon: "⚛️",
      color: "#06b6d4",
      description:
        "Create modern and responsive frontend applications using React JS.",
      topics: [
        "React Basics",
        "Components",
        "Props & State",
        "Hooks",
        "React Router",
        "API Integration",
      ],
    },
    {
      title: "HTML & CSS",
      icon: "🎨",
      color: "#ea580c",
      description:
        "Learn how to create beautiful website structures and responsive designs.",
      topics: [
        "HTML Basics",
        "Forms",
        "CSS Basics",
        "Flexbox",
        "Grid",
        "Responsive Design",
      ],
    },
    {
      title: "Bootstrap",
      icon: "🅱️",
      color: "#6d28d9",
      description:
        "Build responsive websites quickly using Bootstrap components and utilities.",
      topics: [
        "Grid System",
        "Cards",
        "Navbar",
        "Forms",
        "Buttons",
        "Responsive Design",
      ],
    },
  ];

  const roadmap = [
    {
      number: "01",
      title: "Programming Basics",
      text: "Start with variables, conditions, loops, functions and basic programming logic.",
    },
    {
      number: "02",
      title: "Core Java",
      text: "Learn OOP, Collections, Exception Handling, Multithreading and Java 8+.",
    },
    {
      number: "03",
      title: "Database",
      text: "Learn SQL, MySQL, joins, relationships and database operations.",
    },
    {
      number: "04",
      title: "Backend",
      text: "Learn Spring Boot, REST API, JPA, Hibernate and microservices.",
    },
    {
      number: "05",
      title: "Frontend",
      text: "Learn HTML, CSS, Bootstrap and React JS for frontend development.",
    },
    {
      number: "06",
      title: "Projects",
      text: "Build real-world projects and improve your development skills.",
    },
  ];

  return (
    <div
      style={{
        background: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #172554 50%, #1e3a8a 100%)",
          padding: "80px 0",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(6,182,212,0.15)",
                  color: "#67e8f9",
                  padding: "9px 18px",
                  borderRadius: "30px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                💻 PROGRAMMING LEARNING HUB
              </span>

              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  lineHeight: "1.2",
                }}
              >
                Learn Programming
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #22d3ee, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Build Your IT Career
                </span>
              </h1>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  maxWidth: "700px",
                  marginTop: "20px",
                }}
              >
                Learn Java, Spring Boot, MySQL, React and Full Stack
                Development with simple explanations, practical examples,
                projects and interview preparation.
              </p>

              <div className="mt-4">
                <a
                  href="#programming-topics"
                  className="btn btn-lg me-2"
                  style={{
                    background: "#06b6d4",
                    color: "#0f172a",
                    fontWeight: "700",
                    border: "none",
                    borderRadius: "9px",
                  }}
                >
                  Explore Topics →
                </a>

                <a
                  href="#roadmap"
                  className="btn btn-outline-light btn-lg"
                  style={{
                    borderRadius: "9px",
                  }}
                >
                  View Roadmap
                </a>
              </div>
            </div>

            <div className="col-lg-4 text-center mt-5 mt-lg-0">
              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "25px",
                  padding: "35px 20px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "75px",
                    marginBottom: "15px",
                  }}
                >
                  👨‍💻
                </div>

                <h3 className="fw-bold">
                  Learn. Code. Build.
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    marginBottom: 0,
                  }}
                >
                  Practical programming education with MHCoder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section
        style={{
          background: "#ffffff",
          padding: "35px 0",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-3 mb-md-0">
              <h2
                className="fw-bold mb-1"
                style={{ color: "#2563eb" }}
              >
                8+
              </h2>
              <span className="text-muted">
                Technologies
              </span>
            </div>

            <div className="col-6 col-md-3 mb-3 mb-md-0">
              <h2
                className="fw-bold mb-1"
                style={{ color: "#06b6d4" }}
              >
                50+
              </h2>
              <span className="text-muted">
                Tutorials
              </span>
            </div>

            <div className="col-6 col-md-3">
              <h2
                className="fw-bold mb-1"
                style={{ color: "#7c3aed" }}
              >
                20+
              </h2>
              <span className="text-muted">
                Projects
              </span>
            </div>

            <div className="col-6 col-md-3">
              <h2
                className="fw-bold mb-1"
                style={{ color: "#16a34a" }}
              >
                100+
              </h2>
              <span className="text-muted">
                Interview Questions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOPICS ================= */}
      <section
        id="programming-topics"
        className="py-5"
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#2563eb",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              PROGRAMMING TOPICS
            </span>

            <h2 className="fw-bold mt-2">
              Choose What You Want to Learn
            </h2>

            <p className="text-muted">
              Start from basics and gradually move towards advanced
              development.
            </p>
          </div>

          <div className="row">
            {topics.map((topic, index) => (
              <div
                className="col-lg-3 col-md-6 mb-4"
                key={index}
              >
                <div
                  className="h-100"
                  style={{
                    background: "#ffffff",
                    borderRadius: "18px",
                    padding: "25px",
                    border: "1px solid #e2e8f0",
                    boxShadow:
                      "0 7px 25px rgba(15,23,42,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "15px",
                      background: `${topic.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                      marginBottom: "18px",
                    }}
                  >
                    {topic.icon}
                  </div>

                  <h4
                    className="fw-bold"
                    style={{ color: "#0f172a" }}
                  >
                    {topic.title}
                  </h4>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                  >
                    {topic.description}
                  </p>

                  <hr />

                  <h6 className="fw-bold mb-3">
                    Topics
                  </h6>

                  {topic.topics.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      style={{
                        color: "#475569",
                        fontSize: "13px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          color: topic.color,
                          fontWeight: "bold",
                          marginRight: "7px",
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}

                  <button
                    className="btn w-100 mt-3"
                    style={{
                      color: topic.color,
                      border: `1px solid ${topic.color}`,
                      borderRadius: "8px",
                      fontWeight: "600",
                    }}
                  >
                    Start Learning →
                  </button>
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
            "linear-gradient(180deg, #eff6ff, #f8fafc)",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#7c3aed",
                fontWeight: "700",
              }}
            >
              LEARNING PATH
            </span>

            <h2 className="fw-bold mt-2">
              Java Full Stack Roadmap
            </h2>

            <p className="text-muted">
              Follow a simple step-by-step path to become a developer.
            </p>
          </div>

          <div className="row">
            {roadmap.map((item, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
              >
                <div
                  className="h-100"
                  style={{
                    background: "#ffffff",
                    borderRadius: "18px",
                    padding: "25px",
                    border: "1px solid #e2e8f0",
                    boxShadow:
                      "0 7px 25px rgba(15,23,42,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background:
                        "linear-gradient(135deg, #2563eb, #06b6d4)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "800",
                      marginBottom: "18px",
                    }}
                  >
                    {item.number}
                  </div>

                  <h5 className="fw-bold">
                    {item.title}
                  </h5>

                  <p
                    className="text-muted mb-0"
                    style={{ lineHeight: "1.7" }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRACTICAL LEARNING ================= */}
      <section className="py-5">
        <div className="container">
          <div
            className="text-center"
            style={{
              background:
                "linear-gradient(135deg, #0f172a, #172554)",
              borderRadius: "25px",
              padding: "55px 25px",
              color: "#ffffff",
            }}
          >
            <div style={{ fontSize: "50px" }}>
              💻
            </div>

            <h2 className="fw-bold mt-3">
              Don't Just Learn — Build Projects
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                maxWidth: "650px",
                margin: "15px auto",
                lineHeight: "1.8",
              }}
            >
              Programming becomes easier when you practice.
              Build real-world projects and apply what you learn
              in tutorials.
            </p>

            <button
              className="btn btn-lg mt-3"
              style={{
                background: "#06b6d4",
                color: "#0f172a",
                fontWeight: "700",
                borderRadius: "9px",
              }}
            >
              Explore Projects →
            </button>
          </div>
        </div>
      </section>

      {/* ================= INTERVIEW ================= */}
      <section
        className="py-5"
        style={{
          background: "#ffffff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span
                style={{
                  color: "#dc2626",
                  fontWeight: "700",
                }}
              >
                🎯 INTERVIEW PREPARATION
              </span>

              <h2
                className="fw-bold mt-2"
                style={{
                  fontSize: "38px",
                  color: "#0f172a",
                }}
              >
                Learn Programming for Your Career
              </h2>

              <p
                className="text-muted"
                style={{
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                Prepare for Java Developer and Full Stack Developer
                interviews with commonly asked technical questions,
                project explanations and practical coding concepts.
              </p>

              <div className="row mt-4">
                <div className="col-sm-6 mb-3">
                  <div className="fw-bold">
                    ✓ Core Java
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="fw-bold">
                    ✓ Spring Boot
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="fw-bold">
                    ✓ Hibernate & JPA
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="fw-bold">
                    ✓ SQL & MySQL
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="fw-bold">
                    ✓ REST API
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="fw-bold">
                    ✓ Project Explanation
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #eff6ff, #ecfeff)",
                  borderRadius: "20px",
                  padding: "35px",
                  border: "1px solid #dbeafe",
                }}
              >
                <div
                  style={{
                    fontSize: "55px",
                    marginBottom: "15px",
                  }}
                >
                  🚀
                </div>

                <h4 className="fw-bold">
                  Become Job Ready
                </h4>

                <p
                  className="text-muted"
                  style={{ lineHeight: "1.7" }}
                >
                  Learn the right skills, practice with projects
                  and prepare yourself for technical interviews.
                </p>

                <button
                  className="btn"
                  style={{
                    background: "#2563eb",
                    color: "#ffffff",
                    borderRadius: "8px",
                    fontWeight: "600",
                  }}
                >
                  Start Preparation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="py-5 text-center"
        style={{
          background:
            "linear-gradient(135deg, #2563eb, #06b6d4)",
          color: "#ffffff",
        }}
      >
        <div className="container">
          <h2 className="fw-bold">
            Start Learning Programming Today 🚀
          </h2>

          <p
            style={{
              color: "#e0f2fe",
              fontSize: "17px",
              marginTop: "12px",
            }}
          >
            Learn concepts. Write code. Build projects. Grow your career.
          </p>

          <a
            href="#programming-topics"
            className="btn btn-light btn-lg mt-3"
            style={{
              color: "#2563eb",
              fontWeight: "700",
              borderRadius: "9px",
            }}
          >
            Explore Programming Topics
          </a>
        </div>
      </section>
    </div>
  );
}