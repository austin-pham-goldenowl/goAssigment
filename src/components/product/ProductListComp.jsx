import React from "react";
//MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ProductItemComp from "../../containers/ProductItemCont";
// import _Button from "../common/_Button";
// import _Typography from "../common/_Typography";
import _Pagination from "../common/_Pagination";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const ProductListComp = () => {
  const ITEM_PER_PAGE = 6;
  const MAX_PAGE_SHOWN = 10;
  const classes = useStyles();
  const [pagination, setPagination] = React.useState({
    pageNum: 0,
    start: 0,
    end: ITEM_PER_PAGE
  });

  const handleClick = pageNum => {
    setPagination({
      pageNum,
      start: pageNum * ITEM_PER_PAGE,
      end: (pageNum + 1) * ITEM_PER_PAGE
    });
  };

  const list = [...new Array(90).keys()];
  const pages = [...new Array(Math.ceil(list.length / ITEM_PER_PAGE)).keys()];
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {list.map(
              item =>
                item >= pagination.start &&
                item < pagination.end && (
                  <Grid item key={item} xs={12} sm={6} md={4}>
                    <ProductItemComp
                      title={item}
                      image={
                        item % 5 === 0
                          ? "https://i.pinimg.com/originals/92/4b/01/924b013fba163d3fa9a666627dbc44b7.png"
                          : item % 3 === 0
                          ? "https://vignette.wikia.nocookie.net/monsterhunter/images/0/01/MHGen-Silverwind_Nargacuga_Render_001.png/revision/latest?cb=20160710150954"
                          : item % 2 === 0
                          ? "https://vignette.wikia.nocookie.net/monsterhunter/images/4/4f/MHWI-Barioth_Render_001.png/revision/latest/scale-to-width-down/2000?cb=20190821003727"
                          : "https://vignette.wikia.nocookie.net/monsterhunter/images/f/f4/MHWI-Zinogre_Render_001.png/revision/latest/scale-to-width-down/2000?cb=20190829150309"
                      }
                      price={(Math.random()*200).toFixed(2)}
                    />
                  </Grid>
                )
            )}
          </Grid>
          <br />
          <_Pagination
            pages={pages}
            pageNum={pagination.pageNum}
            maxPage={MAX_PAGE_SHOWN}
            handleClick={handleClick}
          />
        </Container>
      </main>
    </React.Fragment>
  );
};

export default ProductListComp;
