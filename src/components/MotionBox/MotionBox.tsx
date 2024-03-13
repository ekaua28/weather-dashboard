import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

export interface MotionBoxProps {
    children?: ReactNode;
}

export interface MotionBoxComponentProps extends MotionBoxProps {
    [key: string]: any;
}

export const MotionBox = ({ children, ...rest }: MotionBoxComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.8,
                ease: 'easeInOut',
            }}
            {...rest}
        >
            {children}
        </motion.div>
    );
};