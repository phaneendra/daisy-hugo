import React from "react";

// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

const styles = createStyles({
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
});

const useStyles = makeStyles(styles);

const GridContainer: React.FC = (props: GridProps) => {
  const classes = useStyles({});
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className} />
  );
}

GridContainer.defaultProps = {
  className: ""
};

export default GridContainer;