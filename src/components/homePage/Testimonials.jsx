import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8, x: -40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const quoteVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const footerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
};

export default function Testimonial({
  quote,
  author,
  role,
  highlight,
  image,
  className = "",
}) {
  return (
    <motion.div
      className={`testimonial ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      <motion.div className="image-placeholder" variants={imageVariant}>
        <img src={image} alt={author} />
      </motion.div>

      <div className="testimonial-content">
        <FaQuoteLeft className="quote-icon" />

        <motion.p className="quote" variants={quoteVariant}>
          {quote}
        </motion.p>

        <motion.div className="testimonial-footer" variants={footerVariant}>
          <div className="footer-content">
            <p className="author">{author}</p>
            <p className="meta">
              {role} | <span className="highlight">{highlight}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
