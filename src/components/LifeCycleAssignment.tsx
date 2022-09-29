import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MaleIcon from "../assets/male.png";
import FemaleIcon from "../assets/female.png";
import boy from "../assets/boy.jpeg";
import man from "../assets/man.jpeg";
import oldman from "../assets/oldman.jpeg";
import { TextField } from "@mui/material";

function LifeCycleAssignment() {
  const [error, setError] = useState(false);
  const[errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const onNameChange = (event: { target: { value: any } }) => {
    setName(event.target.value);
  };
  const [age, setAge] = useState(0);
  const onAgeChange = (event: { target: { value: any } }) => {
    const reg = /^[0-9\b]+$/;
    if (reg.test(event.target.value)) {
      setAge(event.target.value);
      setError(false);
      setErrorMessage("");
    } else {
      setError(true);
      setErrorMessage("Please enter age in numbers");
      setAge(0);
    }
  };
  const [gender, setGender] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  const getImageByAge = () => {
    if (age > 0 && age < 18) return <img src={boy} alt="boy" />;

    if (age >= 18 && age <= 45) return <img src={man} alt="man" />;

    if (age > 45) return <img src={oldman} alt="oldman" />;
  };

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection="column"
        width={"100%"}
        alignItems="center"
        height={"100%"}
        justifyContent="space-around"
        marginTop={"5%"}
      >
        <TextField
          placeholder="enter your name"
          onChange={onNameChange}
          style={{ padding: "10px", margin: "10px" }}
        ></TextField>
        {name ? (
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <TextField
              placeholder="enter your age"
              error={error}
              helperText={errorMessage}
              onChange={onAgeChange}
              style={{ padding: "10px", margin: "10px" }}
            ></TextField>
            {getImageByAge()}
            <Box width={"100%"}>
              <FormControl fullWidth sx={{ margin: "10px" }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                >
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                </Select>
              </FormControl>
              {gender === "Male" ? (
                <img src={MaleIcon} alt="Male icon"></img>
              ) : gender === "Female" ? (
                <img src={FemaleIcon} alt="Female icon"></img>
              ) : (
                <></>
              )}
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
}

export default LifeCycleAssignment;
