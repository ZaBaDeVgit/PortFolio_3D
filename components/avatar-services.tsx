import MotionTransition from "./transition-component";
import BaseImage from "./base-image";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 hidden md:inline-block md:absolute"
    >
      <BaseImage
        src="/services.png"
        width={400}
        height={300}
        className="w-[180px] h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default AvatarServices;
