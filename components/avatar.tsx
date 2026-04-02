"use client";

import MotionTransition from "./transition-component";
import BaseImage from "./base-image";

const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <BaseImage 
                src="/avatar-1.png" 
                width={350} 
                height={350} 
                className="w-full h-full avatar-image" 
                alt="Avatar" 
            />
        </MotionTransition>
    );
}

export default Avatar;
