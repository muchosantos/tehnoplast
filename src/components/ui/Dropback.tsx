'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';


interface DropbackProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Dropback: React.FC<DropbackProps> = ({open, setOpen}) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: '20%' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                onClick={() => setOpen(!open)} 
                className="w-full h-screen bg-[#f28c26] opacity-20 z-[90] fixed top-0 left-0 overflow-hidden"
                />
            )}
        </AnimatePresence>
    )
};

export default Dropback;