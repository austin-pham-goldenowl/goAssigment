import React from "react";
import Divider from "@material-ui/core/Divider";
import _Button from "../common/_Button";
import _TextInput from "../common/_TextInput";
import CartItemComp from "./CartItemComp";
// import { Box } from "@material-ui/core";

const CartListComp = () => {
  const list = [
    "Monster Hunter: World",
    "Resident Evil 5",
    "Resident Evil 6",
    "Street Fighter II",
    "Resident Evil 7: biohazard",
    "Resident Evil 2",
    "Monster Hunter Freedom 3",
    "Monster Hunter Generations"
  ];
  return (
    <div style={{ marginRight: 5, marginTop: 5 }}>
      <center>
        {list.map(item => (
          <div>
            <CartItemComp text={item} />
            <Divider />
          </div>
        ))}
      </center>
      <br />
      <Divider />
      <br />
      <_TextInput
        label="Total"
        value={0}
        style={{ float: "right", width: 150 }}
      />
      <_Button fullWidth variant="contained" color="primary">
        Check Out
      </_Button>
    </div>
  );
};

export default CartListComp;
