/** @jsx jsx */
import { jsx, Image } from "theme-ui";

// import LogoImage from "@assets/images/logo.png";

const Logo = ({ size = 12, ...props }) => {
  return (
    <Image
      {...props}
      src={require("@assets/images/logo.svg")}
      alt="Phaneendra's avatar"
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        mr: 3,
        ...props.sx
      }}
    />
  );
};

export default Logo;
