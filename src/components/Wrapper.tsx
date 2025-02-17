import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({children, className}) => {
  return (
    <div
      className={`w-full max-w-[1480p] px-5 py-5 md:px-10 md:py-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
