import * as React from "react";
import MUIDatatable from "mui-datatables";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEditCab from "./AddEditCab";

import Swal from "sweetalert2"

import CabService from "../../../services/CabService";
import CabModel from "../../../shared/models/CabModel";

export const CabContext = React.createContext<CabModel | any>({});

interface ICabsProps {}

const Cabs: React.FunctionComponent<ICabsProps> = (props) => {
  const [cabList, setCabList] = React.useState<CabModel[]>([]);
  const [operation, setOperation] = React.useState("add");
  const [openDialog, setOpenDialog] = React.useState(false);
  const [initialCab, setInitialCab] = React.useState({});

  const handleClose = () => {
    setOpenDialog(false);
  };
  
  const handleAddCab = () => {
    setOperation("add");
    setOpenDialog(true);
  };

  const loadCabs = () => {
    CabService.getAllCab()
      .then((response) => {
        setCabList(response.data.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const handleCabEdit = (cab: CabModel) => {
    setInitialCab(cab);
    setOperation("edit");
    setOpenDialog(true);
  };

  const handleCabDelete = (id: string | undefined) => {
    // CabService.deleteUser()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        if(id) CabService.deleteCab(id).then((response) => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          loadCabs()
        }).catch((error) => {
          Swal.fire(
            'Could Not Deleted!',
            'Your Data has not been deleted.',
            'error'
          )
        })
      }
    })
  };

  React.useEffect(() => {
    loadCabs();
  }, []);

  const columns = [
    {
      label: "ID",
      name: "cabId",
    },
    {
      label: "Image",
      name: "avatar",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (index: number) => {
          const { avatar } = cabList[index];
          return (
            <img
              src={`http://localhost:7777/${avatar}`}
              style={{ width: '50px',height:'50px',objectFit:'cover' }}
            />
          );
        },
      },
    },
    {
      label: "Type",
      name: "type",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: "RTO No.",
      name: "rtoNumber",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Seats",
      name: "seats",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: "Rate",
      name: "rate",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (data: any) => {
          console.log("Data-- ", data);

          return data == 1 ? "Active" : "Inactive";
        },
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (index: number) => {
          const cab = cabList[index];
          return (
            <>
              <IconButton color="primary" onClick={() => handleCabEdit(cab)}>
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleCabDelete(cab?._id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <CabContext.Provider value={initialCab}>
        <AddEditCab
          open={openDialog}
          operation={operation}
          onClose={handleClose}
          loadCabs={loadCabs}
        />
      </CabContext.Provider>

      <Button onClick={handleAddCab} variant="contained">
        New +
      </Button>
      <MUIDatatable title="Cabs" columns={columns} data={cabList} />
    </>
  );
};

export default Cabs;