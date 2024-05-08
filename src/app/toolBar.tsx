import { AppBar, Toolbar, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from "throttle-debounce";
import { useRouter } from "next/navigation";
import { TMDB_CONFIG } from "../lib/constant";

import makeAxiosCall from "../lib/api";
import { useState } from "react";
import { searchMovie } from "../lib/action";

const TopBar = () => {
  const router = useRouter();
  const [options, setOptions] = useState([]);

  const search = debounce(500, (e: any) =>
    searchMovie({ data: { query: e.target.value, page: 1 } }).then(
      (res: any) => {
        if (res?.results) {
          console.log(res?.results);
          setOptions(res.results);
        }
      }
    )
  );
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
          id="movie"
          disableClearable
          filterOptions={(x) => x}
          getOptionLabel={(option) => ""}
          renderOption={(a, b) =>
            b.title ? (
              <div {...a} style={{ display: "flex" }} key={b.id}>
                {
                  <img
                    src={`${TMDB_CONFIG.images.secure_base_url}/w45${b.backdrop_path}`}
                    alt=""
                    loading="lazy"
                  />
                }
                <div style={{ paddingLeft: "20px" }}> {b.title}</div>
              </div>
            ) : null
          }
          sx={{ ml: 4, width: 300 }}
          popupIcon={<SearchIcon />}
          onInputChange={search}
          onChange={(_res, value) => {
            console.log(value);
            router.push(`/item/${value.id}`);
          }}
          noOptionsText="No Content found"
          options={options}
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
