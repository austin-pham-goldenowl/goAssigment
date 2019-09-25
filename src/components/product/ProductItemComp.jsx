import React from "react";
//MUI
// import AppBar from "@material-ui/core/AppBar";
import _Button from "../common/_Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import _Card from "../common/_Card";
import _CardActions from "../common/_CardActions";
import _CardContent from "../common/_CardContent";
import _CardMedia from "../common/_CardMedia";
// import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import _Typography from "../common/_Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  //   cardGrid: {
  //     paddingTop: theme.spacing(8),
  //     paddingBottom: theme.spacing(8)
  //   },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

const ProductItemComp = ({title, image}) => {
  const classes = useStyles();

  return (
    <div>
      <_Card className={classes.card}>
        <_CardMedia
          className={classes.cardMedia}
          image={image}
          title="Image title"
        />
        <_CardContent className={classes.cardContent}>
          <_Typography gutterBottom variant="h5" component="h2">
            Game no.{title}
          </_Typography>
          <_Typography >
            This is a media card. You can use this section to describe the
            content.
          </_Typography>
        </_CardContent>
        <_CardActions>
          <_Button size="small" color="primary">
            Add to Cart
          </_Button>
        </_CardActions>
      </_Card>
    </div>
  );
};

export default ProductItemComp;
