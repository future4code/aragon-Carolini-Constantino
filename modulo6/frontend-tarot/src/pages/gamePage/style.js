import styled from "styled-components";


export const StyleGamePage = styled.div`
text-align: center;
width: 90%;

button {
  width: 10%;
  padding: 0.6em 1.7em;
  border: none;
  outline: none;
  color: #EEDD82;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
margin-left: 6rem;
  margin-top: 3%;
}

button:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

button:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}

.ContainerModal {
  position: absolute;
  width: 100%;
height: 100vh;
position: fixed;
background-color: rgba( 0, 0, 0,.5);
z-index: 2000;
top: 0px;
display: flex;
justify-content: center; //horizontal
align-items: center; // vertical

}
`;

export const CentralContainer = styled.div`
display: flex;
width: 90vw;
flex-wrap: wrap;
gap: 20px;
margin-left: 6.5%;
margin-top: 3%;
`

export const Modal = styled.div`
  position: absolute;
  width: 60%;
  height: 73%;
  margin-top: 5%;
  background-color: #d0addb;
padding: 2%;
  color: #042f66;
  border: 10px solid #7c6a86;
  box-shadow: 0 0 0 10px #adb3db;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

.littleFild{
  display: flex;
  img{
    margin-right: 3%;
    margin-bottom: 3%;
    border: white solid 8px;
    border-radius: 8%;
  }
}  

.close{
  position: absolute;
 padding: 0;
 padding-left: 0;
 width: 15px;
 right: 0px;
 top: -6%;
 right: -10px;

}
`