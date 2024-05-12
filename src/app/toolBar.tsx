import { AppBar, Toolbar, Typography, TextField } from "@mui/material";
import Image from "next/image";

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
        <Typography variant="h6">
          <a href="/streamly">
            <Image src="/streamly/stream.png" width={44} height={40} alt="" />
          </a>
        </Typography>

        <Autocomplete
          freeSolo
          id="movie"
          disableClearable
          filterOptions={(x) => x}
          getOptionLabel={(option: any) => ""}
          renderOption={(a: any, b: any) =>
            b.title ? (
              <div {...a} style={{ display: "flex" }} key={b.id}>
                {
                  <Image
                    src={
                      b.backdrop_path
                        ? `${TMDB_CONFIG.images.secure_base_url}/w45${b.backdrop_path}`
                        : "/streamly/default.png"
                    }
                    alt=""
                    width={32}
                    height={28}
                    placeholder="empty"
                  />
                }
                <div style={{ paddingLeft: "20px" }} className="font-medium">
                  {" "}
                  {b.title}&nbsp;
                  {b.release_date && (
                    <span
                      className="color-[#a1a1aa] text-sm"
                      style={{ color: "#a1a1aa" }}
                    >
                      {b.release_date.split("-")[0]}
                    </span>
                  )}
                </div>
              </div>
            ) : null
          }
          sx={{ ml: 4, width: 300 }}
          popupIcon={<SearchIcon />}
          onInputChange={search}
          onChange={(_res: any, value: any) => {
            console.log(value);
            router.push(`/item?media=${value.media_type}&id=${value.id}`);
          }}
          noOptionsText="No Content found"
          options={options}
          renderInput={(params: any) => (
            <TextField
              {...params}
              placeholder="Search a flix"
              hiddenLabel
              size="small"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              sx={{
                fieldset: { borderColor: "white" },
              }}
            />
          )}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
