import { AnimatePresence, motion } from "framer-motion";


export default function PageTransition({ children, cond, className, onClick }: { children: any, cond: boolean, className?: string, onClick?: any  }) {
    className = className ?? "";
    onClick = onClick  ?? function() {};
    return <AnimatePresence mode="wait" >
        {!cond &&

            <motion.div className={className}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={onClick}
            >
                {children}

            </motion.div>

        }

    </AnimatePresence>
}