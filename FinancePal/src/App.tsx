import { FButton } from "./components/FButton/FButton"
import "./App.css" //Temporário 
import tokens from "./tokens.json"

function App() {

  return (
    <>
      <FButton bgColor={tokens.primary} textColor={tokens.secondary}>
        Send
      </FButton>
    </>
  )
}

export default App
