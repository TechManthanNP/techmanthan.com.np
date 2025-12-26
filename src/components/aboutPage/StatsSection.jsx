"use client";
import CountUp from "react-countup";
import { FaCalendarAlt, FaCheckCircle, FaSmile, FaUsers } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "../../styles/components/aboutPage/_StatsSection.scss";

const stats = [
  {
    icon: <FaCalendarAlt />,
    value: 14,
    suffix: "+",
    label: "Years of operation",
  },
  {
    icon: <FaUsers />,
    value: 450,
    suffix: "+",
    label: "Skilled professionals",
  },
  {
    icon: <FaCheckCircle />,
    value: 72,
    suffix: "",
    label: "Net promoter score",
  },
  { icon: <FaSmile />, value: 200, suffix: "+", label: "Happy clients" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="statsSection" ref={ref}>
      {stats.map((stat, index) => (
        <div className="statBox" key={index}>
          <div className="icon">{stat.icon}</div>
          <div className="number">
            {inView && (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                suffix={stat.suffix}
              />
            )}
          </div>
          <div className="label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
