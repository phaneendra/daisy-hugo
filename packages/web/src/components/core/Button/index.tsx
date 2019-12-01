import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button, { ButtonProps } from "@material-ui/core/Button";

// core components
import buttonStyle from "@components/core/Button/style";
import { color } from "@components/types";

type RegularButtonProps = Omit<ButtonProps, "color" | "size">;
type Props = {
  size?: "sm" | "lg";
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  children: React.ReactNode;
  className?: string;
};

const useStyles = makeStyles(buttonStyle);

const RegularButton = React.forwardRef<
  HTMLButtonElement,
  RegularButtonProps & Props & color
>((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = useStyles({}); // use style hook

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size!]]: size,
    [classes[color!]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className!]: className
  });
  return (
    <Button {...rest} ref={ref} classes={{ root: btnClasses }}>
      {children}
    </Button>
  );
});

export default RegularButton;
