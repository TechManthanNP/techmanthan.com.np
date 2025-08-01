import Testimonial from "./Testimonials";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Sushil Dyopala",
      role: "Founder & CEO",
      highlight: "techmanthan",
    },
  ];

  return (
    <section className="testimonials">
      {testimonials.map((t, i) => (
        <Testimonial
          key={i}
          quote={t.quote}
          author={t.author}
          role={t.role}
          highlight={t.highlight}
        />
      ))}
    </section>
  );
}
