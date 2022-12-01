import React, { useEffect, useState } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { submit } from "../services/API";
import { useNavigate } from "react-router-dom";
import { update } from "../services/API";
import { preview } from "../services/API";


function EditScreen({newData}) {
  const [loading, setLoading] = React.useState(true);
  const [dataId, setDataId] = useState("");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      sports: "",
      gender: "",
      date_of_birth: "",
      description: "",
      location: "",
      team: "",
    },

    onSubmit: async (values) => {
      let requestBody = {
        name: values.name,
        sports: [values.sports],
        gender: values.gender,
        date_of_birth: values.date_of_birth,
        description: values.description,
        location: values.location,
        team: values.team,
      };

      const response = await update(requestBody,newData.message._id);

      setLoading(false);
      if (response.status === 200) {
        navigate("/preview");
      }
    },
  });
  const onClickBack = () => {
    navigate("/preview");
  };
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div className="Container">
          <div className="subContainer">
            <div className="headingContainer"> Edit Basic Info</div>
            <div className="infoContainer">
              <div className="infoName">Name</div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "31vw" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Box>
            </div>

            <div className="infoContainer">
              <div className="infoName">Sport</div>
              <Box sx={{ minWidth: "58%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Sport</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="sports"
                    name="sports"
                    label="sports"
                    onChange={formik.handleChange}
                    value={formik.values.sports}
                  >
                    <MenuItem value={"Golf"}>Golf</MenuItem>
                    <MenuItem value={"Tennis"}>Tennis</MenuItem>
                    <MenuItem value={"Cricket"}>Cricket</MenuItem>
                    <MenuItem value={"Basketball"}>BasketBall</MenuItem>
                    <MenuItem value={"Baseball"}>Baseball</MenuItem>
                    <MenuItem value={"Cycling"}>Cycling</MenuItem>
                    <MenuItem value={"NetBall"}>NetBall</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="infoContainer">
              <div className="infoName">Gender</div>
              <Box sx={{ minWidth: "58%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="gender"
                    name="gender"
                    label="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  >
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Others"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="infoContainer">
              <div className="infoName">Date</div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "31vw" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="date_of_birth"
                  variant="outlined"
                  type="date"
                  name="date_of_birth"
                  onChange={formik.handleChange}
                  value={formik.values.date_of_birth}
                />
              </Box>
            </div>
            <div className="buttonContainer">
              <Stack spacing={2} direction="row"></Stack>
            </div>
          </div>
        </div>
        <div className="Container">
          <div className="subContainer">
            <div className="headingContainer"> Edit About</div>
            <div className="infoContainer">
              <div className="infoName">Description</div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "31vw" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="description"
                  name="description"
                  label="Description"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </Box>
            </div>
            <div className="infoContainer">
              <div className="infoName">Location</div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "31vw" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="location"
                  name="location"
                  label="Location"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                />
              </Box>
            </div>
            <div className="infoContainer">
              <div className="infoName">Team</div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "31vw" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="team"
                  name="team"
                  label="Team"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.team}
                />
              </Box>
            </div>

            <div className="buttonContainer">
              <Stack spacing={2} direction="row">
                <Button
                  onClick={() => onClickBack()}
                  sx={{ width: "14rem", marginLeft: "40px" }}
                  size="large"
                  variant="contained"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  sx={{ width: "14rem", marginLeft: "40px" }}
                  size="large"
                  variant="contained"
                >
                  Submit
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditScreen;
