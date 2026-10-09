import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "19352a62-7cbd-4462-adde-5ee23c94f087"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }
      );

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully! 🎉");
        event.target.reset();
      } else {
        toast.error("Message send nahi ho paya. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        background:
          "linear-gradient(135deg, #eff6ff 0%, #ecfeff 50%, #f8fafc 100%)",
        padding: "70px 15px",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="pe-lg-5">

              <span
                style={{
                  display: "inline-block",
                  background: "#dbeafe",
                  color: "#2563eb",
                  padding: "8px 16px",
                  borderRadius: "30px",
                  fontWeight: "700",
                  fontSize: "14px",
                  marginBottom: "18px",
                }}
              >
                💬 GET IN TOUCH
              </span>

              <h1
                style={{
                  fontWeight: "800",
                  fontSize: "45px",
                  lineHeight: "1.2",
                  color: "#0f172a",
                }}
              >
                Contact{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #2563eb, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MHCoder
                </span>
              </h1>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  marginTop: "20px",
                }}
              >
                Have a question about Java, Spring Boot, React,
                MySQL or any programming topic? Feel free to
                contact us. We would love to hear from you!
              </p>

              {/* Contact Information */}
              <div className="mt-4">

                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "12px",
                      background: "#dbeafe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginRight: "15px",
                    }}
                  >
                    📧
                  </div>

                  <div>
                    <small className="text-muted">
                      Email
                    </small>
                    <div
                      style={{
                        fontWeight: "600",
                        color: "#0f172a",
                      }}
                    >
                      contact@mhcoder.com
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "12px",
                      background: "#cffafe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginRight: "15px",
                    }}
                  >
                    📞
                  </div>

                  <div>
                    <small className="text-muted">
                      Phone
                    </small>

                    <div
                      style={{
                        fontWeight: "600",
                        color: "#0f172a",
                      }}
                    >
                      +91 7903047131
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "12px",
                      background: "#ede9fe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginRight: "15px",
                    }}
                  >
                    📍
                  </div>

                  <div>
                    <small className="text-muted">
                      Location
                    </small>

                    <div
                      style={{
                        fontWeight: "600",
                        color: "#0f172a",
                      }}
                    >
                      Tilka Manjhi, Bhagalpur
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="col-lg-6 offset-lg-1">
            <div
              style={{
                background: "#ffffff",
                borderRadius: "22px",
                padding: "35px",
                boxShadow:
                  "0 15px 45px rgba(15, 23, 42, 0.12)",
                border: "1px solid #e2e8f0",
              }}
            >

              <div className="mb-4">
                <h3
                  style={{
                    color: "#0f172a",
                    fontWeight: "800",
                  }}
                >
                  Send Us a Message
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "0",
                  }}
                >
                  Fill out the form and we will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                {/* NAME */}
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label fw-semibold"
                    style={{ color: "#334155" }}
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    style={{
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                    }}
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label fw-semibold"
                    style={{ color: "#334155" }}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    style={{
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                    }}
                  />
                </div>

                {/* PHONE */}
                <div className="mb-3">
                  <label
                    htmlFor="mobile"
                    className="form-label fw-semibold"
                    style={{ color: "#334155" }}
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your phone number"
                    required
                    style={{
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                    }}
                  />
                </div>

                {/* MESSAGE */}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="form-label fw-semibold"
                    style={{ color: "#334155" }}
                  >
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    style={{
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                      resize: "none",
                    }}
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    background:
                      "linear-gradient(90deg, #2563eb, #06b6d4)",
                    color: "#ffffff",
                    fontWeight: "700",
                    padding: "13px",
                    borderRadius: "10px",
                    border: "none",
                    boxShadow:
                      "0 8px 20px rgba(37, 99, 235, 0.25)",
                  }}
                >
                  Send Message 🚀
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    </div>
  );
}