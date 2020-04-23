/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import Link from "next/link";

import Logo from "@components/elements/Logo";
import NavLink from "@components/navigation/NavLink";
import ColorToggle from "@components/elements/ColorToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      sx={{
        width: "full",
        maxWidth: "screenxl",
        height: 16,
        mx: "auto",
        flexWrap: "wrap",
        alignItems: "stretch",
        justifyContent: "space-between",
      }}
    >
      <Flex
        id="brand"
        sx={{
          pl: 4,
          alignItems: "center",
        }}
      >
        <Logo size={12} />
        <span>@phaneendra/notebook</span>
      </Flex>

      <Flex
        as="nav"
        id="primary-navigation"
        sx={{
          width: ["full", "full", "auto", "auto"],
          flexGrow: 1,
          alignItems: "stretch",
          justifyContent: "flex-end",
          pl: 4,
          mt: 0,
          bg: "transparent",
        }}
      >
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/docs" passHref>
          <NavLink>Documentation</NavLink>
        </Link>
        <Link href="/blog" passHref>
          <NavLink>Blogs</NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
        <Link href="/contact" passHref>
          <NavLink>Reach Me</NavLink>
        </Link>
      </Flex>
      <Flex
        id="Toggle"
        sx={{
          pl: 4,
          alignItems: "center",
        }}
      >
        <ColorToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
