/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui";
import Header from "@components/page_sections/Header";
import Footer from "@components/page_sections/Footer";

const SideNavLayout = (props) => {
  return (
    <Box
      sx={{
        minHeight: "screenHeight",
        variant: "layout.root"
      }}
    >
      <Box
        id="top"
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          height: 16,
          pl: "env(safe-area-inset-left)",
          pr: "env(safe-area-inset-right)",
          boxShadow: "lg",
          variant: "layout.header"
        }}
      >
        <Header />
      </Box>

      <Box
        id="main"
        sx={{
          pl: "env(safe-area-inset-left)",
          pr: "env(safe-area-inset-right)",
          pt: 16,
          pb: 0
        }}
      >
        <Box
          id="sidenav"
          sx={{
            height: "calc(100vh - 4rem)", // how to include theme variables hear
            position: "fixed",
            top: 16,
            bottom: 0,
            pointerEvents: "auto",
            width: 64,
            maxWidth: "none",
            variant: "layout.sidenav"
          }}
        >
          Side Navigation
        </Box>

        <Box
          id="content"
          sx={{
            pl: 72,
            variant: "layout.main"
          }}
        >
          <Container>{props.children}</Container>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default SideNavLayout;
