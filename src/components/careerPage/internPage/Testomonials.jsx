"use client";

import Image from "next/image";
import "../../../styles/components/careerPage/internPage/_testimonial.scss";

const testimonials = [
  {
    name: "Bibidha Kharel",
    role: "AI/ML Intern",
    text: "Being a UI/UX intern in the ARC 2025 program at Techmanthan was an incredible learning experience. I worked on real projects, received valuable mentorship, and honed my skills in creating user-centered designs. The collaborative and supportive environment truly helped me accelerate, refine, and create .",
    image: "/images/testimonial1.jpg",
    batch: "ARC-2025",
  },
  {
    name: "Bibidha Kharel",
    role: "Frontend Intern",
    text: "Being a UI/UX intern in the ARC 2025 program at Techmanthan was an incredible learning experience. I worked on real projects, received valuable mentorship, and honed my skills in creating user-centered designs. The collaborative and supportive environment truly helped me accelerate, refine, and create .",
    image: "/images/testimonial1.jpg",
    batch: "ARC-2025",
  },
  {
    name: "Bibidha Kharel",
    role: "AI/ML Intern",
    text: "Being a UI/UX intern in the ARC 2025 program at Techmanthan was an incredible learning experience. I worked on real projects, received valuable mentorship, and honed my skills in creating user-centered designs. The collaborative and supportive environment truly helped me accelerate, refine, and create .",
    image: "/images/testimonial1.jpg",
    batch: "ARC-2025",
  },
  {
    name: "Bibidha Kharel",
    role: "UI/UX Designer",
    text: "Being a UI/UX intern in the ARC 2025 program at Techmanthan was an incredible learning experience. I worked on real projects, received valuable mentorship, and honed my skills in creating user-centered designs. The collaborative and supportive environment truly helped me accelerate, refine, and create .",
    image: "/images/testimonial1.jpg",
    batch: "ARC-2025",
  },
];

export default function Testimonials() {
  const truncateText = (text, maxLength = 200) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <section className="testimonials">
      <h2 className="title">Testimonials</h2>
      <div className="cards">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="image">
              <Image
                src={item.image}
                alt={item.name}
                width={90}
                height={90}
                className="profile-img"
              />
            </div>
            <h3>{item.name}</h3>
            <p className="role">{item.role}</p>
            <p className="batch">{item.batch}</p>
            <p className="desc">"{truncateText(item.text)}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
