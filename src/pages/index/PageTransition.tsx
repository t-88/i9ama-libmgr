import { AnimatePresence, motion } from "framer-motion";


export default function PageTransition({ children, cond, className }: { children: any, cond: boolean, className?: string }) {
    className = className ?? "";
    return <AnimatePresence mode="wait">
        {!cond &&

            <motion.div className={className}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
            >
                {children}

            </motion.div>

        }

    </AnimatePresence>
}