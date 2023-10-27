import { useState } from "react";

import { Tab, Box, TextField } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { StyledContainer, StyledForm, StyledFormSection } from "./form.styles";

export const RegisterForm = () => {
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <StyledContainer>
            <Box sx={{ borderBottom: 1 }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Register" value="1" />
                <Tab label="Login"    value="2" />
            </TabList>
            </Box>
            <TabPanel value="1">
            <StyledForm>
                <StyledFormSection>
                <TextField
                    label="outlined"
                    variant="outlined"
                    color="info"
                    sx={{ width: "100%" }}
                />
                </StyledFormSection>
            </StyledForm>
            </TabPanel>
            <TabPanel value="2">
            <StyledForm>
                <StyledFormSection>
                <TextField
                    label="outlined"
                    variant="outlined"
                    color="info"
                    sx={{ width: "100%" }}
                />
                </StyledFormSection>
            </StyledForm>
            </TabPanel>
        </StyledContainer>
      </TabContext>
    </>
  );
};
