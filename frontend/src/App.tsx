import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
import ListProductsPage from "./ListProductsPage";
import AddProductButton from "./components/AddProductButton";
import useProducts from "./hooks/useProducts";

const App: React.FC = () => {
  const { products, filters, setFilters, deleteProduct, addProduct } =
    useProducts({
      sortBy: "",
      search: "",
    });

  return (
    <Router>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="h2" gutterBottom>
            Products
          </Typography>
          <Box>
            <AddProductButton addProduct={addProduct} />
          </Box>
        </Box>
        <Routes>
          <Route
            path="/"
            element={
              <ListProductsPage
                products={products}
                filters={filters}
                setFilters={setFilters}
                deleteProduct={deleteProduct}
              />
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

