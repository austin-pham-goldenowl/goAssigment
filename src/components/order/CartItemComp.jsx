import React from "react";
import _Typography from "../common/_Typography";
import _Button from "../common/_Button";
// import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import { flexbox } from "@material-ui/system";
import Box from "@material-ui/core/Box";

const CartItemComp = ({ title, onRemoveClick }) => {
  return (
    <Paper>
      <Box display="flex">
        <Box flexGrow={1}>
          <_Typography
            variant="overline"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 200,
              display: "inline-block",
              whiteSpace: "nowrap"
            }}
          >
            {title}
          </_Typography>
        </Box>
        <Box>
          <_Button color="secondary" onClick={onRemoveClick}>
            Remove
          </_Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CartItemComp;
