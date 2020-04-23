/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

const ColorToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const cycleMode = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <button
      {...props}
      onClick={cycleMode}
      title="Cycle Color Mode"
      sx={{
        display: "inline-block",
        appearance: "none",
        bg: "transparent",
        color: "inherit",
        p: 1,
        m: 0,
        border: 0,
        borderRadius: 9999,
        transition: "box-shadow .125s ease-in-out",
        ":hover,:focus": {
          color: "primary",
          boxShadow: "0 0 0 3px",
          outline: "none",
        },
      }}
    >
      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="currentcolor"
        sx={{
          display: "block",
        }}
      >
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentcolor"
          strokeWidth="4"
        />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
      </svg>
    </button>
  );
};

export default ColorToggle;
