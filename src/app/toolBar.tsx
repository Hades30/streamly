import { AppBar, Toolbar, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Streamly</Typography>

        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          sx={{ ml: 4, width: 300 }}
          popupIcon={<SearchIcon />}
          options={[{ title: "dsa" }].map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
