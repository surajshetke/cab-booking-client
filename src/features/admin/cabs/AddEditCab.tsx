import * as React from "react";
import Dialog from "../../../ui/dialog/Dialog";
import CabForm from "./CabForm";

interface IAddEditCabProps {
  open: boolean;
  onClose: () => void;
  loadCabs: () => void;
  operation: string;
}

const AddEditCab: React.FunctionComponent<IAddEditCabProps> = ({
  open,
  onClose,
  operation,
  loadCabs,
}) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        title={`${operation == "edit" ? "Edit" : "Add"} Cab`}
        body={() => (
          <CabForm
            operation={operation}
            handleClose={onClose}
            loadCabs={loadCabs}
          />
        )}
      />
    </>
  );
};

export default AddEditCab;
