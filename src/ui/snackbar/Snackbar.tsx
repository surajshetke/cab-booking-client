import * as React from "react";
import Alert, { AlertColor } from "@mui/material/Alert";
import MUISnackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}
interface SnackbarProps {
  open: boolean;
  handleClose: any;
  message: string;
  severity: AlertColor;
}

const Snackbar = ({ open, handleClose, message, severity }: SnackbarProps) => {
  return (
    <div>
      <MUISnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        // onClose={handleClose}
        onClose={(event) => {
          handleClose();
        }}
        key={message}
        TransitionComponent={SlideTransition}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={severity}
          sx={{ fontSize: "1.2em" }}
        >
          {message}
        </Alert>
      </MUISnackbar>
    </div>
  );
};

export default Snackbar;