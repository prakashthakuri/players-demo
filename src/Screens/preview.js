import React, { useEffect, useState } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { preview } from "../services/API";

function Preview({newData}) {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const onClickDone = () => {
    navigate("/donescreen");
  };
  useEffect(() => {
    fetchPreview();
  }, []);

  const fetchPreview = async () => {
    try {
      const response = await preview(newData.message._id);
      setData(response.data.message);
    } catch (error) {
      console.log("error", error);
    }

  };

  const onClickEdit = () => {
    navigate("/editscreen");
  };
  return (
    <div className="App">
      <form>
        <div
          className="Container"
          style={{ color: "gray", bordeColor: "gray" }}
        >
          <div
            className="subContainer"
            style={{ color: "gray", bordeColor: "gray" }}
          >
            <div
              className="headingContainer"
              style={{ color: "gray", bordeColor: "gray" }}
            >
              {" "}
              Check Basic Info
            </div>
            <div className="infoContainer" style={{}}>
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
                  variant="outlined"
                  disabled
                  value={data.name}
                />
              </Box>
            </div>

            <div className="infoContainer">
              <div className="infoName">Sport</div>
              <Box sx={{ minWidth: "58%" }}>
                <FormControl fullWidth>
                  <TextField
                  id="sport"
                  variant="outlined"
                  disabled
                  value={data.sports}
                />
                </FormControl>
              </Box>
            </div>
            <div className="infoContainer">
              <div className="infoName">Gender</div>
              <Box sx={{ minWidth: "58%" }}>
                <FormControl fullWidth>
                <TextField
                  id="gender"
                  variant="outlined"
                  disabled
                  value={data.gender}
                />
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
                  disabled
                  value={data.date_of_birth}
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
            <div
              className="headingContainer"
              style={{ color: "gray", bordeColor: "gray" }}
            >
              About
            </div>
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
                  variant="outlined"
                  value={data.description}
                  disabled
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
                  variant="outlined"
                  value={data.location}
                  disabled
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
                  variant="outlined"
                  disabled
                  value={data.team}
                />
              </Box>
            </div>

            <div className="buttonContainer">
              <Stack spacing={2} direction="row">
                <Button
                  onClick={() => onClickEdit()}
                  sx={{ width: "12rem", marginLeft: "40px" }}
                  size="large"
                  variant="contained"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => onClickDone()}
                  sx={{ width: "12rem", marginLeft: "40px" }}
                  size="large"
                  variant="contained"
                >
                  Done
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Preview;
