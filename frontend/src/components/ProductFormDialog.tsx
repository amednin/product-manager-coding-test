import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControlLabel,
  Switch,
} from "@mui/material";

interface ProductFormDialogProps {
  open: boolean;
  newProduct: { name: string; available: boolean };
  handleClose: () => void;
  handleInputChange: (e: any) => void;
  handleAvailableChange: (e: any) => void;
  handleAddProduct: () => void;
}

const ProductFormDialog: React.FC<ProductFormDialogProps> = ({
  open,
  newProduct,
  handleClose,
  handleInputChange,
  handleAddProduct,
  handleAvailableChange,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Add New Product Form"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Box mb={4}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box mb={4}>
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Available"
              labelPlacement="start"
              checked={newProduct.available}
              onChange={handleAvailableChange}
            />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            handleAddProduct();
            handleClose();
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductFormDialog;
