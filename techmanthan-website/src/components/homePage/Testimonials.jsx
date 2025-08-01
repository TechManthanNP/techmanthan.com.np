import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial({ quote, author, role, highlight, image }) {

  return (
    <div className="testimonial">
      <div className="image-placeholder">
        <img src={image} alt={author} />
      </div>
      <div className="testimonial-content">
        <FaQuoteLeft className="quote-icon" />
        <p className="quote">{quote}</p>
        <div className="testimonial-footer">
          <div className="footer-content">
            <p className="author ">{author}</p>
            <p className="meta ">
              {role} | <span className="highlight">{highlight}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
