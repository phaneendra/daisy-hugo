/** @jsx jsx */
import { jsx, NavLink as ThemeUiNavLink } from "theme-ui";

const NavLink = React.forwardRef((props, ref) => {
  return (
    <ThemeUiNavLink
      href={props.href}
      onClick={props.onClick}
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        mr: 3,
        px: 4,
        py: 2,
        "&:hover, &:focus": {
          bg: "backgroundHover",
        },
        ...props.sx,
      }}
    >
      {props.children}
    </ThemeUiNavLink>
  );
});

export default NavLink;
