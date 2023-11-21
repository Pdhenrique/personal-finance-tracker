import { MouseEvent, useState } from "react"

import { Tab, Box } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"

import "./styles.css"

export const RegisterForm = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")

  const handleRegister = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username, password, email, repassword
        }) 
      })
      if(password === repassword){
        if (response.ok) {
          console.log("Usuário registrado com sucesso!")
          console.log(email, username)
        } else {
          console.error("Erro ao registrar usuário.")
        }
      }else{
        window.alert("As senhas devem ser iguais, tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao registrar usuário.", error)
    }
  }

  const [page, setPage] = useState("1")

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue)
  }

  return (
    <>
      <TabContext value={page}>
        <div id="formContainer">
          <Box sx={{ width: "fit-content", marginLeft: "35px" }}>
            <TabList sx={{ boxShadow: "-10 0 5 black" }} onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{ backgroundColor: "#e6e6e69c", borderTopLeftRadius: 5 }} label="login" value="1" />
              <Tab sx={{ backgroundColor: "#e6e6e69c ", borderTopRightRadius: 5 }} label="register" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <form id="login-form" className="user-form">
              <div className="form-section">
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="form-section">
                <input type="password" placeholder="senha" />
              </div>
              <div className="form-section">
                <button type="submit">Button</button>
                <p>forgot your password?</p>
              </div>
            </form>
          </TabPanel>
          <TabPanel value="2">
            <form id="register-form" className="user-form">
              <div className="form-section">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-section">
                <input
                  type="text"
                  placeholder="Nome"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-section">
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value) }
                />
              </div>
              <div className="form-section">
                <input
                  type="password"
                  placeholder="Repita a senha"
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)}
                />
              </div>
              <div className="form-section">
                <button onClick={(event) => handleRegister(event)} type="submit">Button</button>
                <p>forgot your password?</p>
              </div>
            </form>
          </TabPanel>
        </div>
      </TabContext>
    </>
  )
}

