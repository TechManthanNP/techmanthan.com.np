// "use client";
// import "../../styles/components/aboutPage/_Mission.scss"

// const Mission = () => {
//     return (

//         <section className="mission-section">
//             <div className="mission-image">
//                 <img src="/images/mission.jpeg" alt="Mission Image" />
//             </div>
//             <div className="mission-content">
//                 <h2>OUR <span>MISSION</span></h2>
//                 <p>Create AI-powered solutions that are powerful yet accessible, enabling organizations of all sizes to adapt, grow, and lead in an intelligent future.</p>
//             </div>
//         </section>
//     )
// }

// export default Mission;
"use client";

import "../../styles/components/aboutPage/_Mission.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Mission = () => {
    const [typeKey, setTypeKey] = useState(0);

    return (
        <motion.section
            className="mission-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
            }}
            viewport={{
                once: false,
                amount: 0.3
            }}
            onViewportEnter={() => setTypeKey((prev) => prev + 1)} // restart typing
        >
            <motion.div className="mission-image"
                initial={{ y:20, opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src="/images/mission.jpeg"
                    alt="Mission Image"
                />
            </motion.div>

            <div className="mission-content">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    OUR <span>MISSION</span>
                </motion.h2>

                <motion.div
                    className="mission-text-wrapper"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.3 }}
                >
                    <TypeAnimation
                        key={typeKey} // reset typing every time we scroll into view
                        sequence={[
                            "Create AI-powered solutions that are powerful yet accessible, enabling organizations of all sizes to adapt, grow, and lead in an intelligent future.",
                            1000,
                        ]}
                        speed={80}
                        wrapper="p"
                        cursor={false}
                        repeat={0}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Mission;

