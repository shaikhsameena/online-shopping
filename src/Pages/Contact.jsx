import React, { useRef, useState } from "react";
import "./Contact.css";
import {
  FaUser, FaEnvelope, FaRegCommentDots,
  FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt
} from "react-icons/fa";

const RECEIVER_EMAIL = "mjtechprofessionals@gmail.com";

const Contact = () => {
  const formRef = useRef();
  const [popup, setPopup] = useState({ show: false, msg: "" });

  // ---------- helpers ----------
  const showPopup = (msg, ms = 5000) => {
    setPopup({ show: true, msg });
    // auto hide
    setTimeout(() => setPopup({ show: false, msg: "" }), ms);
  };

  const getFormValues = () => {
    const fd = new FormData(formRef.current);
    return {
      name: (fd.get("user_name") || "").toString().trim(),
      email: (fd.get("user_email") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
    };
  };

  const buildSubject = (name, email) => `MSFORT Contact: ${name} (${email})`;
  const buildBody = (name, email, message) =>
`Name: ${name}
Email: ${email}

Message:
${message}

------------
Sent from MSFORT Contact Page`;

  // ---------- actions ----------
  // Gmail compose: popup first, then open compose after 300ms
  const openGmailCompose = (e) => {
    e.preventDefault();
    const { name, email, message } = getFormValues();

    if (!name || !email || !message) {
      showPopup("Please fill all fields before sending.");
      return;
    }

    
    showPopup("✅ Your message has been sent. Please click 'Send' in Gmail. You will receive a reply shortly.");

    
    formRef.current.reset();

   
    setTimeout(() => {
      const url =
        `https://mail.google.com/mail/?view=cm&fs=1&tf=cm` +
        `&to=${encodeURIComponent(RECEIVER_EMAIL)}` +
        `&su=${encodeURIComponent(buildSubject(name, email))}` +
        `&body=${encodeURIComponent(buildBody(name, email, message))}`;

      const win = window.open(url, "_blank", "noopener,noreferrer");

      if (!win) {
        // popup blocked
        showPopup("⚠️ Pop-up blocked. Please allow pop-ups for this site or use 'Open in Email App' below.");
      }
    }, 300);
  };

  
  const openMailto = (e) => {
    e.preventDefault();
    const { name, email, message } = getFormValues();

    if (!name || !email || !message) {
      showPopup("Please fill all fields before sending.");
      return;
    }

   
    showPopup("✅ Your message is ready. Please click 'Send' in the open window.");

    const url =
      `mailto:${encodeURIComponent(RECEIVER_EMAIL)}` +
      `?subject=${encodeURIComponent(buildSubject(name, email))}` +
      `&body=${encodeURIComponent(buildBody(name, email, message))}`;

    window.location.href = url;
    formRef.current.reset();
  };

  
  return (
    <div className="contact-container">
      <div className="contact-box">
     
        <div className="contact-form">
          <h2>Send us a Message</h2>

         
          <form ref={formRef}>
            <div className="input-group">
              <span><FaUser /></span>
              <input type="text" name="user_name" placeholder="Your Name" />
            </div>
            <div className="input-group">
              <span><FaEnvelope /></span>
              <input type="email" name="user_email" placeholder="Your Email" />
            </div>
            <div className="input-group textarea">
              <span><FaRegCommentDots /></span>
              <textarea name="message" placeholder="Write your message..."></textarea>
            </div>

            <button onClick={openGmailCompose} className="send-btn" type="button">
              Send Message 🚀
            </button>

            <button onClick={openMailto} className="send-btn outline" type="button" style={{ marginTop: 8 }}>
              Open in Email App ✉️
            </button>
          </form>

         
          {popup.show && (
            <div
              className="popup"
              role="status"
              aria-live="polite"
              style={{
                position: "fixed",
                left: "50%",
                bottom: "24px",
                transform: "translateX(-50%)",
                background: "linear-gradient(180deg,#0f5132,#0b3d26)",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: "12px",
                boxShadow: "0 10px 28px rgba(0,0,0,.25)",
                zIndex: 9999,
                maxWidth: 560,
                textAlign: "center",
                fontWeight: 500,
                letterSpacing: ".2px",
                backdropFilter: "blur(6px)"
              }}
            >
              {popup.msg}
            </div>
          )}
        </div>

    
        <div className="contact-info">
          <h2>Reach Us</h2>
          <p>We’d love to hear from you! ❤️</p>
          <p>📍 Nutan Vasahat, Ambad Road Old Jalna, Maharashtra, India</p>
          <p>📧 mjtechprofessionals@gmail.com</p>

          <p className="phone">
            <FaPhoneAlt className="phone-icon" />
            <span>+91 8149829233</span>
          </p>

          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61578060466582"><FaFacebook /> Facebook</a>
            <a href="https://www.instagram.com/msfort_official/"><FaInstagram /> Instagram</a>
            <a href="https://wa.me/918149829233" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          <div className="thankyou-box">
            <p>🙏 Thank you for visiting!</p>
            <h3>— MSFort Team</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
