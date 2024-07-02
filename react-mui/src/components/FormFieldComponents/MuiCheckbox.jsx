import {
  Box,
  Checkbox,
  FormControlLabel,
  FormLabel,
  FormGroup,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import BookMarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const MuiCheckbox = () => {
  const [acceptTnc, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);
  const handleChange = (event) => {
    setAcceptTnC(event.target.checked);
  };
  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value);
    console.log(index);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept term and condition"
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookMarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  color="secondary"
                  size="small"
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
