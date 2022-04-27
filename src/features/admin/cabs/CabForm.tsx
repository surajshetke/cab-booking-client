import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Avatar, Box, Button, MenuItem } from "@mui/material";
import UploadIcon from "@mui/icons-material/UploadFile";
import IconButton from "@mui/material/IconButton";
import CabService from "../../../services/CabService";
import { CabContext } from ".";
import CabModel from "../../../shared/models/CabModel";

interface ICabFormProps {
  operation: string;
  handleClose: () => void;
  loadCabs: () => void;
}

const CabForm: React.FunctionComponent<ICabFormProps> = ({
  operation,
  loadCabs,
  handleClose,
}) => {
  const initalCab = React.useContext<CabModel>(CabContext);

  const [previewImage, setPreviewImage] = React.useState("");
  const [state, setState] = React.useState<CabModel>({
    type: "",
    seats: 0,
    rate: 0,
    avatar: "",
    ac: 0,
    status: 1,
    rtoNumber: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {setPreviewImage(reader.result as string); },false);

    if (file) {
      reader.readAsDataURL(file);
      setState({ ...state, avatar: file });
    }
  };

  const handleSubmit = () => {
    const fd = new FormData();
    const { ac, avatar, rate, seats, status, type, rtoNumber } = state;

    if (operation == "edit") {
      for (const k of Object.keys(state)) {
        if (state[k] != initalCab[k]) {
          fd.append(k, state[k]);
        }
      }
    } else {
      fd.append("type", type || "");
      fd.append("ac", ac?.toString() || "");
      fd.append("avatar", avatar || "");
      fd.append("rate", rate?.toString() || "");
      fd.append("status", status?.toString() || "");
      fd.append("seats", seats?.toString() || "");
      fd.append("rtoNumber", rtoNumber?.toString() || "");
      console.log("FormData: ", fd);
    }

    if (operation == "edit") {
      CabService.updateCab(state?._id, fd)
        .then((response) => {
          alert("cab updated");
          loadCabs();
          handleClose();
        })
        .catch((err) => {
          console.log("Cab error: ", err);
        });
    } else {
      CabService.createCab(fd)
        .then((response) => {
          alert("cab created");
          loadCabs();
          handleClose();
        })
        .catch((err) => {
          console.log("Cab error: ", err);
        });
    }
  };

  React.useEffect(() => {
    setState({ ...initalCab });

    setPreviewImage(`http://localhost:7777/${initalCab.avatar}`);
  }, [initalCab]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="type">Type</InputLabel>
          <Select
            labelId="type"
            value={state?.type}
            label="Type"
            name="type"
            onChange={handleChange}
          >
            <MenuItem value="autorickshaw">Auto Rickshaw</MenuItem>
            <MenuItem value="hatchback">Hatchback</MenuItem>
            <MenuItem value="sedan">Sedan</MenuItem>
            <MenuItem value="suv">SUV</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Seats"
          type="number"
          name="seats"
          onChange={handleChange}
          value={state?.seats}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="RTO No."
          name="rtoNumber"
          onChange={handleChange}
          value={state?.rtoNumber}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Rate per KM"
          type="number"
          name="rate"
          onChange={handleChange}
          value={state?.rate}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="ac">AC</InputLabel>
          <Select
            labelId="ac"
            value={state?.ac}
            label="AC"
            name="ac"
            onChange={handleChange}
          >
            <MenuItem value={0}>AC</MenuItem>
            <MenuItem value={1}>Non AC</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} container alignItems="center">
        <Box
          sx={{
            border: "1px solid #333",
            maxWidth: 200,
            minWidth: 200,
            height: 180,
            padding: 1,
            margin: 2,
          }}
        >
          <Avatar
            variant="square"
            alt="Remy Sharp"
            src={previewImage || "/assets/images/slider/4.webp"}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box>
          <TextField
            type="file"
            id="file"
            sx={{ display: "none" }}
            onChange={handleFileUpload}
          />

          <label htmlFor="file">
            <UploadIcon />
          </label>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            fullWidth
            labelId="status"
            value={state?.status}
            label="Status"
            name="status"
            onChange={handleChange}
          >
            <MenuItem value={1}>Available</MenuItem>
            <MenuItem value={0}>Not available </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSubmit}>
          {operation == "edit" ? "Update" : "Create"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CabForm;