import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";

const CartList = (props) => {
  const { open, toggleDrawer } = props;

  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const cartItemsArr = localStorage.getItem("cartList");
    const parseCartItemsArr = JSON.parse(cartItemsArr);

    console.log(parseCartItemsArr, "parseItems", cartItemsArr);
  
    setCartItems(cartItemsArr);

  }, []);

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          {/* {cartItems?.map(() => {
            return (
              
              <Box>
                <span>{item}</span>
              </Box>
          
            );
          })} */}
        </Box>
      </Drawer>
    </div>
  );
};

export default CartList;
