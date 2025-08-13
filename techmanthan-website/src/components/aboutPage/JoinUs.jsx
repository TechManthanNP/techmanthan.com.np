"use client";

import React from "react";
import { motion } from "framer-motion";
import "../../styles/components/aboutPage/_JoinUs.scss";
import { FaPaperPlane } from "react-icons/fa";

const JoinUs = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="build-with-us">
            <motion.h2
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                Build With Us
            </motion.h2>

            <motion.p
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                We're always looking for{" "}
                <span className="highlight">curious minds</span> and{" "}
                <span className="highlight">passionate builders</span> to shape the
                future with us.
            </motion.p>
            <a href="/">

                <motion.button
                    className="join-btn"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <span className="btn-text">Join Us</span>
                    <FaPaperPlane className="plane" />
                </motion.button>
            </a>
        </section>
    );
};

export default JoinUs;
