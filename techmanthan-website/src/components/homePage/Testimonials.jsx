export default function Testimonial({ quote, author, role, highlight }) {
    return (
      <div className="testimonial">
        <blockquote>{quote}</blockquote>
        <div className="testimonial-footer">
          <div>
            <p className="role">{role}</p>
            <p className="author">{author}</p>
          </div>
          <span className="highlight">{highlight}</span>
        </div>
      </div>
    );
  }
  