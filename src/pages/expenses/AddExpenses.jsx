import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Paper,
} from "@mui/material";
import React, { useState } from "react";

const AddExpenses = () => {
  const [select, setSelect] = useState("");

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <Box>
      <Typography variant="h6" noWrap>
        Add Expenses
      </Typography>
      <Paper elevation={3} sx={{ padding: "2rem 1rem", marginTop: "1rem" }}>
        <Box component="form" className="expenses-form">
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            size="small"
            gutterBottom
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Amount"
            type="number"
            variant="outlined"
            size="small"
            gutterBottom
            fullWidth
          />
          <FormControl>
            <InputLabel id="categories">Categories</InputLabel>
            <Select
              labelId="categories"
              label="Categories"
              size="small"
              fullWidth
              value={select}
              onChange={handleSelect}
            >
              <MenuItem value="groceries">Groceries</MenuItem>
              <MenuItem value="utilities">Utilities</MenuItem>
              <MenuItem value="entertainent">Entertainment</MenuItem>
            </Select>{" "}
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Currency"
            variant="outlined"
            size="small"
            gutterBottom
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#183D3D" }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddExpenses;
