// import SectionHeading from "./SectionHeading";
import SectionHeading from "./SectionHeader";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
    const features = [
        {
            title: "Tailored Intelligence",
            description:
                "Solutions designed around specific workflows, domain context, and organizational objectives — never one-size-fits-all.",
        },
        {
            title: "Deep Domain Alignment",
            description:
                "Expertise across industries including finance, healthcare, logistics, and education ensures relevance and precision.",
        },
        {
            title: "Secure and Scalable",
            description:
                "Built with enterprise-grade security, compliance readiness, and scalable architectures for sustainable growth.",
        },
        {
            title: "End-to-End Execution",
            description:
                "From strategic design to full deployment, solutions are developed and implemented with long-term impact in mind.",
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
                    <FeatureCard key={i} title={f.title} description={f.description} />
                ))}
            </div>
        </section>
    );
}
