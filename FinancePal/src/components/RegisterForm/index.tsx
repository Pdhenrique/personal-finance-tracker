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
            <Box sx={{width: '600', marginLeft: '35px' }}>
            <TabList  onChange={handleChange} aria-label="lab API tabs example">
                <Tab sx={{backgroundColor: "#F8F9FA", borderTopLeftRadius: 5}} label="Register" value="1" />
                <Tab sx={{backgroundColor: "#F8F9FA",  borderTopRightRadius: 5}} label="Login"    value="2" />
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
