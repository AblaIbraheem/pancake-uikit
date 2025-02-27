import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        d=""
        fill={textColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d=""
        fill="#633001"
      />
      <path
        d=""
        fill="#FEDC90"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d=""
        fill="#D1884F"
      />
      <path
        d=""
        fill="#633001"
      />
      <path
        d=""
        fill="#633001"
      />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
