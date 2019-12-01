import React from "react";

// @material-ui/core components
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid, { GridProps } from "@material-ui/core/Grid";

const styles = createStyles({
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
});

const useStyles = makeStyles(styles);

const GridItem: React.FC<GridProps> = (props) => {
  const classes = useStyles({}); // use style hook
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className} />
  );
}

GridItem.defaultProps = {
  className: ""
};

export default GridItem;