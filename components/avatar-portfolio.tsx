"use client";
import MotionTransition from "./transition-component";
import BaseImage from "./base-image";

const AvatarPortfolio = () => {
    return ( 
        <MotionTransition position="bottom" className="fixed bottom-0 left-0 z-30">
            <BaseImage 
                src="/avatar-works.png" 
                width={120} 
                height={100} 
                className="w-full h-full" 
                alt="Avatar portfolio" 
            />
        </MotionTransition>
    );
}

export default AvatarPortfolio;
