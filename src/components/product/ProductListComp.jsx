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
import ProductDetailsComp from "./ProductDetailsComp";

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

const ProductListComp = ({ isLoginSuccess, category }) => {
  const list = [...new Array(85).keys()];
  const ITEM_PER_PAGE = 6;
  const MAX_PAGE_SHOWN = 8;
  const classes = useStyles();
  const [pagination, setPagination] = React.useState({
    pageNum: 0,
    start: list.length - 1,
    end:
      category === -1
        ? list.length - 1 - ITEM_PER_PAGE
        : list.length - 1 - 9 * ITEM_PER_PAGE
  });

  const handleClick = pageNum => {
    setPagination({
      pageNum,
      start:
        category === -1
          ? list.length - 1 - pageNum * ITEM_PER_PAGE
          : list.length - 1 - pageNum * 9 * ITEM_PER_PAGE,
      end:
        category === -1
          ? list.length - 1 - pageNum * ITEM_PER_PAGE - ITEM_PER_PAGE
          : list.length - 1 - (pageNum + 1) * 9 * ITEM_PER_PAGE
    });
  };

  console.log("category", category);
  const filteredList =
    category === -1
      ? list.reverse()
      : list.filter(item => item % 9 === category).reverse();

  console.log("filtered", filteredList);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {category === -1
              ? filteredList.map(item => {
                  let randomPrice = (Math.random() * 200).toFixed(2);
                  let itemImage =
                    item % 5 === 0
                      ? "https://i.redd.it/ijf7zto8tll01.jpg"
                      : item % 3 === 0
                      ? "https://pbs.twimg.com/media/DcshPU3VwAAxkh8.jpg"
                      : item % 2 === 0
                      ? "https://i.pinimg.com/originals/4c/f7/d4/4cf7d436c53382fcc9050817d418673a.png"
                      : "https://i.pinimg.com/originals/a5/40/6b/a5406bf9caa49cc8e17d58100015d2d2.jpg";
                  // let itemCategory = item % 9;

                  return (
                    item <= pagination.start &&
                    item > pagination.end && (
                      <Grid item key={item} xs={12} sm={6} md={4}>
                        <ProductItemComp
                          isLoginSuccess={isLoginSuccess}
                          title={item}
                          image={itemImage}
                          price={randomPrice}
                          detailsButton={
                            <ProductDetailsComp
                              isLoginSuccess={isLoginSuccess}
                              title={item}
                              image={itemImage}
                              price={randomPrice}
                            />
                          }
                        />
                      </Grid>
                    )
                  );
                })
              : filteredList.map(item => {
                  let randomPrice = (Math.random() * 200).toFixed(2);
                  let itemImage =
                    item % 5 === 0
                      ? "https://i.redd.it/ijf7zto8tll01.jpg"
                      : item % 3 === 0
                      ? "https://pbs.twimg.com/media/DcshPU3VwAAxkh8.jpg"
                      : item % 2 === 0
                      ? "https://i.pinimg.com/originals/4c/f7/d4/4cf7d436c53382fcc9050817d418673a.png"
                      : "https://i.pinimg.com/originals/a5/40/6b/a5406bf9caa49cc8e17d58100015d2d2.jpg";
                  // let itemCategory = item % 9;
                  console.log(pagination.start, pagination.end);

                  return (
                    item <= pagination.start &&
                    item > pagination.end && (
                      <Grid item key={item} xs={12} sm={6} md={4}>
                        <ProductItemComp
                          isLoginSuccess={isLoginSuccess}
                          title={item}
                          image={itemImage}
                          price={randomPrice}
                          detailsButton={
                            <ProductDetailsComp
                              isLoginSuccess={isLoginSuccess}
                              title={item}
                              image={itemImage}
                              price={randomPrice}
                            />
                          }
                        />
                      </Grid>
                    )
                  );
                })}
          </Grid>
          <br />
          <_Pagination
            list={filteredList}
            itemPerPage={ITEM_PER_PAGE}
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
