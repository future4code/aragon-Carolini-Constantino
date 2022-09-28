import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  border: 0;
  height: 90vh;
  background-color: #dacab2;
}`
// h1, h2, h3, h4, p{
//   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
// } 
// @media screen and (min-device-width: 320px) and (max-device-width: 480px){
//     body{
//     display: flexbox;
//     margin: 0;
//     border: none;
//     width: 50vw;
//     height: 100vh;
//     }
//   }
// `
function App() {
  return (
    <div className="App">
    <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
