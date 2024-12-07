import { AnimatePresence, motion } from "framer-motion";


export default function PageTransition({ children, cond }: { children: any , cond: boolean  }) {
    return <AnimatePresence mode="wait">
            {!cond &&
            
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {children}

        </motion.div>

            }

    </AnimatePresence>
}