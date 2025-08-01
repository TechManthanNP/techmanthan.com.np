export default function SectionHeading({ title, highlight, subtitle }) {
    return (
      <div className="section-heading">
        <h2>
          {title} <span>{highlight}</span>
        </h2>
        <p>{subtitle}</p>
      </div>
    );
  }