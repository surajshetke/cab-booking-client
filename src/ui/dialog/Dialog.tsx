import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import MuiDialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface DialogProps {
  open: boolean;
  onClose: (value: string) => void;
  body: React.FunctionComponent;
  title: string;
}

const Dialog = ({ open, onClose, body: Body, title }: DialogProps) => {
  return (
    <MuiDialog onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Body />
      </DialogContent>
    </MuiDialog>
  );
};

export default Dialog;