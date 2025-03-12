import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Product } from "./ProductTable";
import useProducts, { Filters } from "../hooks/useProducts";

interface DeleteDialogProps {
  open: boolean;
  product: Product | null;
  handleOK?: () => void;
  handleClose: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = (
  props: DeleteDialogProps,
) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete Product"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete <b>{props.product?.name}</b>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={props.handleOK} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
