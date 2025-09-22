
"use client";
import "../../styles/components/productPage/_fiscalMind.scss";
import { FaPaperPlane, FaScroll } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { GiScrollUnfurled } from "react-icons/gi";

const FiscalMind = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="fiscalMind-wrapper">
            {/* Top Section */}
            <div className="top-section-wrapper">
                <div className="top-contents">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        FiscalMind
                    </motion.h1>

                    <motion.div
                        className="tags"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Automation
                    </motion.div>

                    <ul>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            AI-powered accounting platform built to simplify financial management and uncover deeper business insights.
                        </motion.li>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            From bookkeeping to audit readiness, FiscalMind brings clarity, control, and confidence to your financial operations, helping teams move from data to decisions, faster.
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
                            <MdWork className="icon work" size={20} /> Automated Bookkeeping
                        </motion.li>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <GiScrollUnfurled className="icon scroll" size={20} /> Real-Time Auditing
                        </motion.li>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <FaChartLine className="icon chart" size={20} /> Insight-Driven Dashboards
                        </motion.li>
                        <motion.li
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <FaSearch className="icon search" size={20} /> Anomaly Detection
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
                    className="image1"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img src="/images/products/fiscalMind2.png" alt="" />
                </motion.div>

                <motion.div
                    className="image2"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img src="/images/products/fiscalMind.png" alt="" />
                </motion.div>
            </div>
        </section>
    );
};

export default FiscalMind;
