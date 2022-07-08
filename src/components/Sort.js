import { Box } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./filtermobile.css";
import close from "../images/close-black.png";

const Sort = ({ showSort, setShowSort }) => {
  if (showSort) {
    return (
      <Box className="p-3 sort-mobile">
        <Box>
          <Box style={{ position: "absolute", right: "20px" }}>
            <button
              onClick={() => setShowSort(false)}
              style={{ background: "none", border: "none", width: "30px" }}
            >
              <img src={close} alt="" />
            </button>
          </Box>

          <FormControl sx={{marginTop: '3rem'}}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Bestsellers"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="lower"
                control={<Radio />}
                label="Bestselling"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Lower price first"
                sx={{ fontFamily: "Poppins" }}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Higher price first"
              />
            </RadioGroup>
            <Box style={{ position: "fixed", left: '1rem', bottom: "1rem", right: '1rem' }}>
              <button
                style={{ width: "100%", padding: '.8rem 0' }}
                type="submit"
                className="btn btn-dark"

              >
                Confirm
              </button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    );
  }
};

export default Sort;
