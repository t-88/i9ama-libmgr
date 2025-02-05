// import { AnimatePresence, motion } from "framer-motion";


export default function PageTransition({ children, cond, className, onClick }: { children: any, cond: boolean, className?: string, onClick?: any }) {
    className = className ?? "";
    onClick = onClick ?? function () { };
 
    return !cond ?
            <div className={className}
                onClick={onClick}
            >
                {children}

            </div> : <></>


}
