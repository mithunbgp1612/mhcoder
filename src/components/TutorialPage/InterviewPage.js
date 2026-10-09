import React from "react";

export default function InterviewPage() {
  const interviewTopics = [
    {
      icon: "☕",
      title: "Core Java",
      questions: "50+ Questions",
      description:
        "Java basics, OOP, Collections, Exception Handling, Multithreading and Java 8.",
      topics: [
        "OOP Concepts",
        "String & StringBuffer",
        "Collections",
        "Exception Handling",
        "Java 8",
        "Multithreading",
      ],
    },
    {
      icon: "🌱",
      title: "Spring Boot",
      questions: "40+ Questions",
      description:
        "Prepare Spring Boot interview questions with simple explanations and practical examples.",
      topics: [
        "Spring Boot",
        "Dependency Injection",
        "REST API",
        "Spring Data JPA",
        "Annotations",
        "Microservices",
      ],
    },
    {
      icon: "🗄️",
      title: "Hibernate & JPA",
      questions: "30+ Questions",
      description:
        "Learn important Hibernate and JPA questions asked in Java backend interviews.",
      topics: [
        "Entity",
        "Relationships",
        "JPA",
        "Hibernate",
        "Lazy & Eager",
        "Transactions",
      ],
    },
    {
      icon: "💾",
      title: "SQL & MySQL",
      questions: "40+ Questions",
      description:
        "Practice SQL queries and database concepts commonly asked in interviews.",
      topics: [
        "Joins",
        "Subqueries",
        "Group By",
        "Indexes",
        "Constraints",
        "SQL Queries",
      ],
    },
    {
      icon: "⚛️",
      title: "React JS",
      questions: "30+ Questions",
      description:
        "Prepare frontend interview questions related to React and modern web development.",
      topics: [
        "Components",
        "Props",
        "State",
        "Hooks",
        "React Router",
        "API Integration",
      ],
    },
    {
      icon: "🔗",
      title: "REST API",
      questions: "30+ Questions",
      description:
        "Understand REST API concepts and questions asked in backend interviews.",
      topics: [
        "HTTP Methods",
        "Status Codes",
        "GET & POST",
        "PUT & PATCH",
        "Authentication",
        "Authorization",
      ],
    },
  ];

  const interviewSteps = [
    {
      number: "01",
      title: "Learn Concepts",
      description:
        "Understand the fundamentals before starting interview preparation.",
    },
    {
      number: "02",
      title: "Practice Questions",
      description:
        "Solve commonly asked technical interview questions.",
    },
    {
      number: "03",
      title: "Build Projects",
      description:
        "Build real projects to improve practical development skills.",
    },
    {
      number: "04",
      title: "Mock Interview",
      description:
        "Practice explaining your projects and answering technical questions.",
    },
  ];

  const commonQuestions = [
    "What is OOP in Java?",
    "What is the difference between HashMap and Hashtable?",
    "What is Dependency Injection?",
    "What is Spring Boot?",
    "What is REST API?",
    "What is JPA and Hibernate?",
    "What is the difference between PUT and PATCH?",
    "What is SQL JOIN?",
    "What is Exception Handling?",
    "Explain your project.",
  ];

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #172554 55%, #1E3A8A 100%)",
          padding: "80px 20px",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-7">

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
                INTERVIEW PREPARATION
              </span>

              <h1
                style={{
                  fontSize: "clamp(38px, 6vw, 62px)",
                  fontWeight: "800",
                  lineHeight: "1.15",
                }}
              >
                Crack Your{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #60A5FA, #22D3EE, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  IT Interview
                </span>
              </h1>

              <p
                style={{
                  color: "#CBD5E1",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  maxWidth: "700px",
                  marginTop: "20px",
                }}
              >
                Prepare for Java Developer, Backend Developer and Full Stack
                Developer interviews with practical questions, simple answers
                and real project-based preparation.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">

                <a
                  href="#interview-topics"
                  className="btn"
                  style={{
                    background: "#06B6D4",
                    color: "#0F172A",
                    fontWeight: "700",
                    borderRadius: "10px",
                    padding: "12px 25px",
                  }}
                >
                  Start Preparation →
                </a>

                <a
                  href="#common-questions"
                  className="btn"
                  style={{
                    border: "1px solid #475569",
                    color: "white",
                    borderRadius: "10px",
                    padding: "12px 25px",
                  }}
                >
                  Practice Questions
                </a>

              </div>
            </div>

            <div className="col-lg-5">

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "22px",
                  padding: "30px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "50px",
                    marginBottom: "15px",
                  }}
                >
                  💼
                </div>

                <h3
                  style={{
                    fontWeight: "800",
                    marginBottom: "15px",
                  }}
                >
                  Become Interview Ready
                </h3>

                <p
                  style={{
                    color: "#CBD5E1",
                    lineHeight: "1.7",
                  }}
                >
                  Technical knowledge + practical projects + interview
                  confidence = better career opportunities.
                </p>

                <div
                  style={{
                    height: "1px",
                    background: "#334155",
                    margin: "20px 0",
                  }}
                />

                <div className="row text-center">

                  <div className="col-4">
                    <h4 style={{ color: "#22D3EE", fontWeight: "800" }}>
                      200+
                    </h4>
                    <small style={{ color: "#CBD5E1" }}>
                      Questions
                    </small>
                  </div>

                  <div className="col-4">
                    <h4 style={{ color: "#60A5FA", fontWeight: "800" }}>
                      10+
                    </h4>
                    <small style={{ color: "#CBD5E1" }}>
                      Topics
                    </small>
                  </div>

                  <div className="col-4">
                    <h4 style={{ color: "#A78BFA", fontWeight: "800" }}>
                      20+
                    </h4>
                    <small style={{ color: "#CBD5E1" }}>
                      Projects
                    </small>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* INTERVIEW TOPICS */}
      <section className="py-5" id="interview-topics">

        <div className="container">

          <div className="text-center mb-5">

            <span
              style={{
                color: "#2563EB",
                fontWeight: "700",
              }}
            >
              TECHNICAL PREPARATION
            </span>

            <h2
              style={{
                color: "#0F172A",
                fontWeight: "800",
                marginTop: "8px",
              }}
            >
              Interview Topics
            </h2>

            <p style={{ color: "#64748B" }}>
              Prepare important topics asked in Java and Full Stack interviews.
            </p>

          </div>

          <div className="row g-4">

            {interviewTopics.map((topic, index) => (

              <div className="col-md-6 col-lg-4" key={index}>

                <div
                  style={{
                    background: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "18px",
                    padding: "25px",
                    height: "100%",
                    boxShadow:
                      "0 8px 30px rgba(15,23,42,0.07)",
                  }}
                >

                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "14px",
                      background: "#EFF6FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "27px",
                      marginBottom: "15px",
                    }}
                  >
                    {topic.icon}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >

                    <h4
                      style={{
                        color: "#0F172A",
                        fontWeight: "800",
                      }}
                    >
                      {topic.title}
                    </h4>

                    <span
                      style={{
                        fontSize: "11px",
                        background: "#ECFEFF",
                        color: "#0891B2",
                        padding: "5px 8px",
                        borderRadius: "20px",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {topic.questions}
                    </span>

                  </div>

                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                  >
                    {topic.description}
                  </p>

                  <div className="mt-3">

                    {topic.topics.map((item, i) => (

                      <div
                        key={i}
                        style={{
                          color: "#475569",
                          fontSize: "14px",
                          marginBottom: "8px",
                        }}
                      >
                        <span
                          style={{
                            color: "#2563EB",
                            fontWeight: "800",
                            marginRight: "7px",
                          }}
                        >
                          ✓
                        </span>

                        {item}
                      </div>

                    ))}

                  </div>

                  <button
                    className="btn w-100 mt-3"
                    style={{
                      background:
                        "linear-gradient(90deg, #2563EB, #06B6D4)",
                      color: "white",
                      borderRadius: "9px",
                      fontWeight: "700",
                    }}
                  >
                    Start Preparation →
                  </button>

                </div>

              </div>

            ))}

          </div>
        </div>

      </section>

      {/* PREPARATION ROADMAP */}
      <section
        className="py-5"
        id="roadmap"
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
              PREPARATION PLAN
            </span>

            <h2
              style={{
                color: "#0F172A",
                fontWeight: "800",
                marginTop: "8px",
              }}
            >
              Interview Preparation Roadmap
            </h2>

            <p style={{ color: "#64748B" }}>
              Follow these steps to become interview ready.
            </p>

          </div>

          <div className="row g-4">

            {interviewSteps.map((step, index) => (

              <div className="col-md-6 col-lg-3" key={index}>

                <div
                  style={{
                    background: "white",
                    borderRadius: "18px",
                    padding: "25px",
                    height: "100%",
                    border: "1px solid #DBEAFE",
                  }}
                >

                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "800",
                      color: "#2563EB",
                      marginBottom: "15px",
                    }}
                  >
                    STEP {step.number}
                  </div>

                  <h5
                    style={{
                      color: "#0F172A",
                      fontWeight: "800",
                    }}
                  >
                    {step.title}
                  </h5>

                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                  >
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </div>

      </section>

      {/* COMMON QUESTIONS */}
      <section className="py-5" id="common-questions">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <span
                style={{
                  color: "#2563EB",
                  fontWeight: "700",
                }}
              >
                PRACTICE QUESTIONS
              </span>

              <h2
                style={{
                  color: "#0F172A",
                  fontWeight: "800",
                  fontSize: "38px",
                  marginTop: "10px",
                }}
              >
                Most Asked Interview Questions
              </h2>

              <p
                style={{
                  color: "#64748B",
                  lineHeight: "1.8",
                }}
              >
                Start with these commonly asked questions and improve your
                technical interview confidence.
              </p>

              <button
                className="btn"
                style={{
                  background: "#2563EB",
                  color: "white",
                  padding: "11px 22px",
                  borderRadius: "9px",
                  fontWeight: "700",
                }}
              >
                View All Questions →
              </button>

            </div>

            <div className="col-lg-7">

              <div
                style={{
                  background: "#0F172A",
                  borderRadius: "20px",
                  padding: "25px",
                }}
              >

                {commonQuestions.map((question, index) => (

                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 5px",
                      borderBottom:
                        index !== commonQuestions.length - 1
                          ? "1px solid #334155"
                          : "none",
                    }}
                  >

                    <span
                      style={{
                        width: "30px",
                        height: "30px",
                        minWidth: "30px",
                        borderRadius: "50%",
                        background: "#1E3A8A",
                        color: "#67E8F9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "800",
                      }}
                    >
                      {index + 1}
                    </span>

                    <span
                      style={{
                        color: "#E2E8F0",
                        fontSize: "14px",
                      }}
                    >
                      {question}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INTERVIEW TIPS */}
      <section
        className="py-5"
        style={{
          background: "#F1F5F9",
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
              INTERVIEW TIPS
            </span>

            <h2
              style={{
                color: "#0F172A",
                fontWeight: "800",
                marginTop: "8px",
              }}
            >
              How to Perform Better in Interviews
            </h2>

          </div>

          <div className="row g-4">

            {[
              [
                "Understand Fundamentals",
                "Strong fundamentals are more important than memorizing answers.",
              ],
              [
                "Explain Your Project",
                "Be ready to explain your project, architecture, database and APIs.",
              ],
              [
                "Practice Coding",
                "Practice Java programs, SQL queries and problem solving regularly.",
              ],
              [
                "Improve Communication",
                "Explain your technical answers clearly and confidently.",
              ],
            ].map(([title, description], index) => (

              <div className="col-md-6 col-lg-3" key={index}>

                <div
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "24px",
                    height: "100%",
                    border: "1px solid #E2E8F0",
                  }}
                >

                  <div
                    style={{
                      color: "#2563EB",
                      fontSize: "28px",
                      fontWeight: "800",
                      marginBottom: "10px",
                    }}
                  >
                    0{index + 1}
                  </div>

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

      {/* CTA */}
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
            Ready for Your Next Interview?
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              maxWidth: "650px",
              margin: "15px auto 25px",
              lineHeight: "1.7",
            }}
          >
            Learn the concepts, practice interview questions, build projects
            and become confident for your next Java or Full Stack interview.
          </p>

          <a
            href="#interview-topics"
            className="btn"
            style={{
              background: "#06B6D4",
              color: "#0F172A",
              padding: "12px 28px",
              borderRadius: "9px",
              fontWeight: "800",
            }}
          >
            Start Interview Preparation →
          </a>

        </div>

      </section>

    </div>
  );
}