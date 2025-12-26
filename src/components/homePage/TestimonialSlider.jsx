import Testimonial from "./Testimonials";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "TechManthan has transformed the way we approach digital innovation. Their expertise in AI and strategic thinking has been instrumental in our success. Highly recommended for any organization looking to leverage cutting-edge technology solutions.",
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
