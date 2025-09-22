// "use client";
// import { useRef, useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import "../../styles/components/aboutPage/_LifeAtTM.scss";

// const LifeAtTM = () => {
//     const images = [
//         "images/life1.jpeg",
//         "images/life3.jpg",
//         "images/life2.jpeg",
//         "images/life5.jpg",
//         "images/life4.jpg",
//     ];

//     const trackRef = useRef(null);
//     const [trackWidth, setTrackWidth] = useState(0);
//     const controls = useAnimation();

//     useEffect(() => {
//         if (trackRef.current) {
//             // Get the width of the first set of images
//             const firstSetWidth = trackRef.current.scrollWidth / 2;
//             setTrackWidth(firstSetWidth);
//         }
//     }, []);

//     useEffect(() => {
//         if (trackWidth > 0) {
//             const loop = async () => {
//                 while (true) {
//                     await controls.start({
//                         x: -trackWidth,
//                         transition: { duration: 30, ease: "linear" }
//                     });
//                     controls.set({ x: 0 });
//                 }
//             };
//             loop();
//         }
//     }, [trackWidth, controls]);

//     return (
//         <section className="lifeTM-section">
//             <div className="lifeTM-heading">
//                 <h2>
//                     <span className="life">#Life</span>
//                     <span className="atT">at tech</span>
//                     manthan
//                 </h2>
//                 <p>
//                     We are a small but driven team where ideas flow freely, challenges are shared, and every voice matters. Whether it's shaping the next breakthrough or sharing tea on the terrace, our work culture is rooted in respect, curiosity, and real connection.
//                 </p>
//             </div>

//             <div className="gallery">
//                 <motion.div
//                     className="gallery-track"
//                     ref={trackRef}
//                     animate={controls}
//                 >
//                     {[...images, ...images].map((src, idx) => (
//                         <img key={idx} src={src} alt={`life-${idx}`} />
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default LifeAtTM;

"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "../../styles/components/aboutPage/_LifeAtTM.scss";

const LifeAtTM = () => {
    const images = [
        "images/life1.jpeg",
        "images/life3.jpg",
        "images/life2.jpeg",
        "images/life5.jpg",
        "images/life4.jpg",
    ];

    const trackRef = useRef(null);
    const [trackWidth, setTrackWidth] = useState(0);
    const controls = useAnimation();

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Measure the width of one image set
    useEffect(() => {
        if (trackRef.current) {
            const firstSetWidth = trackRef.current.scrollWidth / 2;
            setTrackWidth(firstSetWidth);
        }
    }, []);

    // Start infinite marquee
    useEffect(() => {
        if (trackWidth > 0) {
            controls.start({
                x: -trackWidth,
                transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }
            });
        }
    }, [trackWidth, controls]);

    return (
        <section className="lifeTM-section">
            <div className="lifeTM-heading">
                <motion.h2
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className="life">#Life</span>
                    <span className="atT">at tech</span>
                    manthan
                </motion.h2>

                <motion.p
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    We are a small but driven team where ideas flow freely, challenges are shared, and every voice matters. Whether it's shaping the next breakthrough or sharing tea on the terrace, our work culture is rooted in respect, curiosity, and real connection.
                </motion.p>
            </div>

            <div className="gallery">
                <motion.div
                    className="gallery-track"
                    ref={trackRef}
                    animate={controls}
                >
                    {[...images, ...images].map((src, idx) => (
                        <motion.img
                            key={idx}
                            src={src}
                            alt={`life-${idx}`}
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LifeAtTM;
