import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const SideFilter: React.FC = () => {
  const [category, setCategory] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const [stockAlert, setStockAlert] = React.useState("");

  return (
    <Box width="200px">
      <Typography variant="h6" marginBottom="8px">
        Product Status
      </Typography>
      <Box marginBottom="16px" sx={{ display: "flex" }}>
        <Box>
          <Button variant="outlined" fullWidth>
            All
          </Button>
          <Button sx={{ marginTop: "5px" }} variant="outlined" fullWidth>
            Active
          </Button>
        </Box>
        <Box sx={{ marginLeft: "5px" }}>
          <Button variant="outlined" fullWidth>
            Inactive
          </Button>
          <Button sx={{ marginTop: "5px" }} variant="outlined" fullWidth>
            Draft
          </Button>
        </Box>
      </Box>

      <Typography variant="h6" marginBottom="8px">
        Product Type
      </Typography>
      <Box sx={{ display: "flex" }} marginBottom="16px">
        <Button variant="outlined" fullWidth>
          Retail
        </Button>
        <Button sx={{ marginLeft: "5px" }} variant="outlined" fullWidth>
          Wholesale
        </Button>
      </Box>

      <Typography variant="h6" marginBottom="8px">
        Sort By
      </Typography>
      <Box marginBottom="16px">
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as string)}
            label="Sort By"
          >
            <MenuItem value="Alphabetical: A-Z">Alphabetical: A-Z</MenuItem>
            <MenuItem value="Alphabetical: Z-A">Alphabetical: Z-A</MenuItem>
            <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
            <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="h6" marginBottom="8px">
        Stock Alert
      </Typography>
      <Box marginBottom="16px">
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Stock Alert</InputLabel>
          <Select
            value={stockAlert}
            onChange={(event) => setStockAlert(event.target.value as string)}
            label="Stock Alert"
          >
            <MenuItem value="All stock">All stock</MenuItem>
            <MenuItem value="Low stock">Low stock</MenuItem>
            <MenuItem value="Out of stock">Out of stock</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="h6" marginBottom="8px">
        Category
      </Typography>
      <Box marginBottom="16px">
        <FormControl variant="outlined" fullWidth>
          <InputLabel>All product</InputLabel>
          <Select
            value={category}
            onChange={(event) => setCategory(event.target.value as string)}
            label="All product"
          >
            <MenuItem value="">
              <em>All product</em>
            </MenuItem>
            <MenuItem value="Category1">Category 1</MenuItem>
            <MenuItem value="Category2">Category 2</MenuItem>
            <MenuItem value="Category3">Category 3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="h6" marginBottom="8px">
        Price
      </Typography>
      <Box marginBottom="16px">
        <TextField
          label="Minimum price"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
        />
        <TextField
          label="Maximum price"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
        />
      </Box>

      <Button variant="outlined" fullWidth>
        Reset Filters
      </Button>
    </Box>
  );
};

export default SideFilter;
