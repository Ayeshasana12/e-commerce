import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Product1 from "../../assets/img-1.jpeg";
import Product2 from "../../assets/img-2.jpeg";
import Product3 from "../../assets/img-3.jpeg";
import "./AllProduct.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const dummyProducts = [
  {
    id: 1,
    img: Product1,
    name: "Product 1",
    Price: "10",
  },
  {
    id: 2,
    img: Product2,
    name: "Product 2",
    Price: "12",
  },
  {
    id: 3,
    img: Product3,
    name: "Product 3",
    Price: "15",
  },
];

function AllProduct() {
  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  const cartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);

    if (!isExist) {
      setCartList((prev) => [...prev, product]);
    } else {
      setOpenAlert(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() =>{
  
    if(cartList.length>0){
      let strCartList = JSON.stringify(cartList)
      localStorage.setItem("cartList", strCartList);
    }
  }, [cartList]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={6000}
        onClos
        e={handleClose}
      >
        <SnackbarContent
          style={{
            backgroundColor: "#bb2124",
          }}
          message={
            <Box>
              <span id="client-snackbar">Product Already Add in Cart List</span>
              <CloseIcon className="ms-5" onClick={handleClose} />
            </Box>
          }
        />
      </Snackbar>
      <Box
        sx={{ display: "flex", gap: "50px", cursor: "pointer" }}
        className="container mt-5"
      >
        {dummyProducts?.map((Product, index) => {
          return (
            <Card
              key={index}
              sx={{ padding: "20px", width: "250px", marginRight: "55px" }}
            >
              <Box>
                <Box className="text-center">
                  <img
                    className="product-img bg-danger"
                    width={100}
                    src={Product.img}
                    alt={Product.name}
                  />
                </Box>
                <Typography className="mt-4" variant="h6">
                  {Product.name}
                </Typography>
                <Divider
                  className="mt-2"
                  sx={{ borderColor: "#333" }}
                  variant="fullWidth"
                />
                <Box className="d-flex justify-content-between mt-2">
                  <ShareIcon />
                  <FavoriteIcon />
                  <AddShoppingCartIcon
                    onClick={() => {
                      cartHandler(Product);
                    }}
                  />
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
 


export default AllProduct;
