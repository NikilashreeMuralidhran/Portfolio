import { motion } from 'framer-motion';

const AboutHeader = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[40vh] mt-32">
            {/* Horizontal blurred background glow */}
            <motion.div
                initial={{ opacity: 0, y: 100, scaleY: 0.9 }}
                whileInView={{ opacity: 0.3, y: 0, scaleY: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute w-full h-[300px] bg-pink-400 blur-[120px] opacity-30 top-[-150px] left-0 z-0"
            />

            {/* Section heading (moved slightly up) */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-bold text-white text-center relative z-10 -mt-50"
            >
                About Me
            </motion.h2>

            {/* Underline */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                className="h-1 bg-pink-500 rounded-full mt-4 relative z-10"
            />
        </div>
    );
};

export default AboutHeader;
