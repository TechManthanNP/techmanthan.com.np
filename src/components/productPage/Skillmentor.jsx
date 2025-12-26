
"use client";
import { FaGear } from "react-icons/fa6";import "../../styles/components/productPage/_skillMentor.scss";
import { FaBrain, FaChartBar, FaPaperPlane } from "react-icons/fa";
// import { PiCloudQuestion } from "react-icons/pi";
import { TbBubbleFilled } from "react-icons/tb";
import { LuSprout } from "react-icons/lu";


import { motion } from "framer-motion";

const SkillMentor = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="skillMentor-wrapper">
            {/* Top Section */}
            <div className="top-section-wrapper">
                <div className="top-contents">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        SkillMentor AI
                    </motion.h1>

                    <motion.div
                        className="tags"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h3>
                            Multi-Modal
                        </h3>
                        <h3>
                            AI Coach
                        </h3>
                    </motion.div>


                    <ul>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Your intelligent partner in professional development, delivering tailored soft skill coaching that adapts to individual learning styles, roles, and goals.                        </motion.li>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Designed to elevate team performance, boost confidence, and build future-ready talent.
                        </motion.li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom-section-wrapper">
                <div className="contents">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Key Features
                    </motion.h2>
                    <ul>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <FaBrain className="icon brain" size={20} /> Adaptive Learning Paths
                        </motion.li>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <TbBubbleFilled className="icon cloud" size={20} /> AI-Powered Simulations
                        </motion.li>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <LuSprout className="icon leaf" size={20} /> Continuous Growth Engine
                        </motion.li>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <FaChartBar className="icon bar" size={20} /> Team-Wide Insights
                        </motion.li>
                    </ul>
                    <motion.a
                        href="/products"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.button
                            className="demo-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={fadeUp}
                        >
                            <span className="btn-text">Book a Demo</span>
                            <FaPaperPlane className="plane" />
                        </motion.button>
                    </motion.a>
                                </div>
                </div>

            {/* Images */}
            <div className="image-wrapper">

                <motion.div
                    className="image2"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img src="/images/products/skillMentor.png" alt="" />
                </motion.div>
            </div>
        </section>
    );
};

export default SkillMentor;
