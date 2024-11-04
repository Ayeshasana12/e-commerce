import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Snackbar,
  SnackbarContent,
  TextField,
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
    name: "Lay's Chips",
    Price: "10",
  },
  {
    id: 2,
    img: Product2,
    name: "Potato Chips",
    Price: "12",
  },
  {
    id: 3,
    img: Product3,
    name: "Ruffles Chips",
    Price: "15",
  },
];

function AllProduct() {
  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [products, setProducts] = useState(dummyProducts); // Remove extra array layer here

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

  const searchHandler = (event) => {
    if(event.target.value === ""){
      setProducts(dummyProducts);
    } else {
        const filteredArr = dummyProducts?.filter((product) =>
           product?.name.toLowerCase().includes(event?.target?.value.toLowerCase()));
           
        setProducts(filteredArr);
        console.log(filteredArr); // This will log the filtered results
    }
};

  // const searchHandler = (event) => {
  //   const searchTerm = event.target.value.toLowerCase();
  //   const filteredArr = dummyProducts.filter((product) =>
  //     product.name.toLowerCase().includes(searchTerm)
  //   );
  //   setProducts(filteredArr); // Update products state with search results
  // };

  useEffect(() => {
    if (cartList.length > 0) {
      localStorage.setItem("cartList", JSON.stringify(cartList));
    }
  }, [cartList]);

  return (
    <>
      <Box className="container mt-3">
        <TextField onChange={searchHandler} size="small" placeholder="Search Items..." />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContent
          style={{
            backgroundColor: "#bb2124",
          }}
          message={
            <Box>
              <span id="client-snackbar">Product Already Added to Cart List</span>
              <CloseIcon className="ms-5" onClick={handleClose} />
            </Box>
          }
        />
      </Snackbar>
      <Box sx={{ display: "flex", gap: "50px", cursor: "pointer" }} className="container mt-5">
        {products.map((product) => (
          <Card key={product.id} sx={{ padding: "20px", width: "250px", marginRight: "55px" }}>
            <Box>
              <Box className="text-center">
                <img className="product-img bg-danger" width={100} src={product.img} alt={product.name} />
              </Box>
              <Typography className="mt-4" variant="h6">
                {product.name}
              </Typography>
              <Divider className="mt-2" sx={{ borderColor: "#333" }} variant="fullWidth" />
              <Box className="d-flex justify-content-between mt-2">
                <ShareIcon />
                <FavoriteIcon />
                <AddShoppingCartIcon onClick={() => cartHandler(product)} />
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default AllProduct;





















// import {
//   Box,
//   Button,
//   Card,
//   Divider,
//   IconButton,
//   Snackbar,
//   SnackbarContent,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Product1 from "../../assets/img-1.jpeg";
// import Product2 from "../../assets/img-2.jpeg";
// import Product3 from "../../assets/img-3.jpeg";
// import "./AllProduct.css";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import CloseIcon from "@mui/icons-material/Close";

// const dummyProducts = [
//   {
//     id: 1,
//     img: Product1,
//     name: "Product 1",
//     Price: "10",
//   },
//   {
//     id: 2,
//     img: Product2,
//     name: "Product 2",
//     Price: "12",
//   },
//   {
//     id: 3,
//     img: Product3,
//     name: "Product 3",
//     Price: "15",
//   },
// ];

// function AllProduct() {
//   const [cartList, setCartList] = useState([]);
//   const [openAlert, setOpenAlert] = useState(false);
//   const [products, setProducts] = useState([dummyProducts])

//   console.log(products, 'products');
  

//   const cartHandler = (product) => {
//     const isExist = cartList.find((cart) => cart.id === product.id);

//     if (!isExist) {
//       setCartList((prev) => [...prev, product]);
//     } else {
//       setOpenAlert(true);
//     }
//   };

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpenAlert(false);
//   };

//   const searchHandler = (event) => {
//     const filteredArr = products?.filter((product)=> product?.name === event?.target?.value)
//     console.log(filteredArr);
    
//   };
//   // 

//   useEffect(() => {
//     let localItems = localStorage.getItem("cartList");

//     if (cartList?.length > 0) {
//       let strCartList = JSON.stringify(cartList)
//       localStorage.setItem("cartList", strCartList);
//     }

//   }, [cartList]);

//   return (
//     <>
//       <Box  className="container mt-3" >
//         <TextField onChange={searchHandler} size="small" placeholder="Search Items..." />
//       </Box>
//       <Snackbar
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         open={openAlert}
//         autoHideDuration={6000}
//         onClos
//         e={handleClose}
//       >
//         <SnackbarContent
//           style={{
//             backgroundColor: "#bb2124",
//           }}
//           message={
//             <Box>
//               <span id="client-snackbar">Product Already Add in Cart List</span>
//               <CloseIcon className="ms-5" onClick={handleClose} />
//             </Box>
//           }
//         />
//       </Snackbar>
//       <Box
//         sx={{ display: "flex", gap: "50px", cursor: "pointer" }}
//         className="container mt-5"
//       >
//         {products?.map((Product, index) => {
//           return (
//             <Card
//               key={index}
//               sx={{ padding: "20px", width: "250px", marginRight: "55px" }}
//             >
//               <Box>
//                 <Box className="text-center">
//                   <img
//                     className="product-img bg-danger"
//                     width={100}
//                     src={Product.img}
//                     alt={Product.name}
//                   />
//                 </Box>
//                 <Typography className="mt-4" variant="h6">
//                   {Product.name}
//                 </Typography>
//                 <Divider
//                   className="mt-2"
//                   sx={{ borderColor: "#333" }}
//                   variant="fullWidth"
//                 />
//                 <Box className="d-flex justify-content-between mt-2">
//                   <ShareIcon />
//                   <FavoriteIcon />
//                   <AddShoppingCartIcon
//                     onClick={() => {
//                       cartHandler(Product);
//                     }}
//                   />
//                 </Box>
//               </Box>
//             </Card>
//           );
//         })}
//       </Box>
//     </>
//   );
// }



// export default AllProduct;
