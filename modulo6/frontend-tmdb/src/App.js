import { createGlobalStyle } from "styled-components";

import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f6f7;
}

h1, h2, h3, h4, p{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
} 

@media screen and (min-device-width: 320px) and (max-device-width: 480px){
    body{
    display: flexbox;
    margin: 0;
    border: none;
    width: 100%;
    height: 100%;
    }
  }
`
function App() {
  return (
    <div className="App">
     <Router/>
     </div>
  );
}

export default App;
