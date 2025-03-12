import React, { useState } from "react";
import { Container } from "@mui/material";
import ProductFormDialog from "./components/ProductFormDialog";
import ProductTable from "./components/ProductTable";
import useProducts from "./hooks/useProducts";

const ManageProductsPage: React.FC = () => {
  const { products, addProduct, deleteProduct } = useProducts({
    sortBy: "",
    search: "",
  });
  const [newProduct, setNewProduct] = useState({ name: "", available: true });

  // TODO: Improve UX by adding a function like debounce
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ name: "", available: true });
  };

  const handleDeleteProduct = (id: number) => {
    deleteProduct(id);
  };

  return (
    <Container>
      <ProductFormDialog
        newProduct={newProduct}
        handleInputChange={handleInputChange}
        handleAddProduct={handleAddProduct}
      />
      <ProductTable
        products={products}
        handleDeleteProduct={handleDeleteProduct}
      />
    </Container>
  );
};

export default ManageProductsPage;
