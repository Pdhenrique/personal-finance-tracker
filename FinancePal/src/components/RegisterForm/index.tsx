import { useState } from "react"

import { Tab, Box } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"

import "./styles.css"

export const RegisterForm = () => {
  const [value, setValue] = useState("1")

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <TabContext value={value}>
        <div id="formContainer">
          <Box sx={{ width: "fit-content", marginLeft: "35px" }}>
            <TabList sx={{ boxShadow: "-10 0 5 black" }} onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{ backgroundColor: "#e6e6e69c", borderTopLeftRadius: 5 }} label="Register" value="1" />
              <Tab sx={{ backgroundColor: "#e6e6e69c ", borderTopRightRadius: 5 }} label="Login" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <form id="register-form" className="user-form">
              <div className="form-section">
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="form-section">
                <input type="text" placeholder="Nome" />
              </div>
              <div className="form-section">
                <input type="password" placeholder="Senha" />
              </div>
              <div className="form-section">
                <input type="password" placeholder="Repita a senha" />
              </div>
              <div className="form-section">
                <button type="submit">Button</button>
                <p>forgot your password?</p>
              </div>
            </form>
          </TabPanel>
          <TabPanel value="2">
            <form id="login-form" className="user-form">
              <div className="form-section">
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="form-section">
                <input type="password" placeholder="Repita a senha" />
              </div>
              <div className="form-section">
                <button type="submit">Button</button>
                <p>forgot your password?</p>
              </div>
            </form>

          </TabPanel>
        </div>
      </TabContext>
    </>
  )
}

