import React from "react";
import "./Contact.css";
import { 
  FaUser, 
  FaEnvelope, 
  FaRegCommentDots, 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp,
  FaPhoneAlt // ✅ Phone icon import kiya
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        {/* Left Side */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="input-group">
              <span><FaUser /></span>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-group">
              <span><FaEnvelope /></span>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="input-group textarea">
              <span><FaRegCommentDots /></span>
              <textarea placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="contact-info">
          <h2>Reach Us</h2>
          <p>We’d love to hear from you! ❤️</p>

          <p>📍 Nutan Vasahat,
          Ambad Road Old jalna
          Maharashtra, India</p>
          <p>📧 MSFort@.com</p>

          {/* ✅ Green phone icon with number */}
{/* ✅ Green phone icon with number */}
<p className="phone">
  <FaPhoneAlt className="phone-icon" />
  <span>+91 8149829233</span>
</p>




          <div className="social-links">
            <a href="#"><FaFacebook /> Facebook</a>
            <a href="#"><FaInstagram /> Instagram</a>
            <a 
              href="https://wa.me/8149829233" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          {/* Thank You Message */}
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
