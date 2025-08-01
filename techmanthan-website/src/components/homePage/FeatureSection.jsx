"use client";
import SectionHeading from "./SectionHeader";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
    const features = [
        {
            title: "Tailored Intelligence",
            description:
                "Solutions designed around specific workflows, domain context, and organizational objectives. Never one-size fits-all",
            image: "/images/intelligence-card.jpg"
        },
        {
            title: "Domain Alignment",
            description:
                "Expertise across industries including finance, healthcare, logistics, and education ensures relevance and precision.",
            image: "/images/alignment.jpg"
        },
        {
            title: "Secure & Scalable",
            description:
                "Built with enterprise-grade security, compliance readiness, and scalable architectures for sustainable growth.",
            image: "/images/secure.jpg"
        },
        {
            title: "Agile Execution",
            description:
                "From strategic design to full deployment, solutions are developed and implemented with long-term impact in mind.",
            image: "/images/end-to-end-execution.webp"
        },
    ];

    return (
        <section className="features">
            <SectionHeading
                title="Built Around Your"
                highlight="Needs"
                subtitle="AI solutions engineered to align with business goals, adapt to evolving challenges, and scale seamlessly. Every product and service is crafted to deliver tangible results."
            />

            <div className="features-grid">
                {features.map((f, i) => (
                    <FeatureCard
                        key={i}
                        title={f.title}
                        description={f.description}
                        delay={i * 0.2}
                        image={f.image}
                    />
                ))}
            </div>
        </section>
    );
}
