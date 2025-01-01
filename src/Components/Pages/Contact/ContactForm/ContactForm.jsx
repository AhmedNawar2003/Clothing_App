import { useState } from "react";
import "./ContactForm.css";
import "../ContactResponsive.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Perform further actions like sending the data to a server
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <>
      <section className="form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="name">Name</label>
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email address</label>
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      placeholder="Message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>
                  <button type="submit" className="btn submit w-25">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
