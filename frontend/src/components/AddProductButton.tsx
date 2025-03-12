import { Button } from "@mui/material";
import React, { useState } from "react";
import ProductFormDialog from "./ProductFormDialog";
import { NewProduct } from "../hooks/useProducts";

interface AddProductProps {
  addProduct: (product: NewProduct) => void;
}

const AddProductButton: React.FC<AddProductProps> = ({ addProduct }) => {
  const [openDialog, setOpenDialog] = useState(false);
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

  const handleAvailableChange = (e: any) => {
    const { checked } = e.target;
    setNewProduct({ ...newProduct, available: checked });
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "10px" }}
        onClick={() => setOpenDialog(true)}
      >
        + Add New Product
      </Button>
      <ProductFormDialog
        open={openDialog}
        newProduct={newProduct}
        handleClose={() => setOpenDialog(false)}
        handleInputChange={handleInputChange}
        handleAddProduct={handleAddProduct}
        handleAvailableChange={handleAvailableChange}
      />
    </>
  );
};

export default AddProductButton;
