import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Tooltip,
} from "@mui/material";
import DeleteDialog from "./DeleteDialog";

export interface Product {
  id: number;
  name: string;
  available: boolean;
}

interface ProductTableProps {
  products: Product[];
  handleDeleteProduct: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  handleDeleteProduct,
}) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Available</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.available ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {product.available && (
                    <Tooltip
                      title="This product is available and cannot be deleted"
                      arrow
                    >
                      <Button
                        variant="contained"
                        color="error"
                        style={{ backgroundColor: "gray" }}
                      >
                        Delete
                      </Button>
                    </Tooltip>
                  )}
                  {!product.available && (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        setOpenDeleteDialog(true);
                        setSelectedProduct(product);
                      }}
                    >
                      Delete
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedProduct && (
        <DeleteDialog
          open={openDeleteDialog}
          product={selectedProduct}
          handleClose={() => setOpenDeleteDialog(false)}
          handleOK={() => {
            handleDeleteProduct(selectedProduct.id);
            setOpenDeleteDialog(false);
          }}
        />
      )}
    </>
  );
};

export default ProductTable;
