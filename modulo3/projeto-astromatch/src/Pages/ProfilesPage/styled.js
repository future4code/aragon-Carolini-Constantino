import styled from "styled-components";

export const CardProfile = styled.div`
 background-color: white;
 margin-left: 30%;
 margin-right: 30%;
 border-radius: 10%;
 box-shadow: 0 0 2em gray;
padding: 1%;
button{
  min-width: 30%;
  min-height: 30%;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  color:white;
  background: white;
background: white;
  border: none;
  border-radius: 50%;
  box-shadow: 2px 2px 4px gray;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
}

button::before {
content: '';
  border-radius: 50%;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid gray;
  box-shadow: 0 0 60px red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: white;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30%; 
  height: 30%;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }


}
h4, p{
    color: black;
}
img{
    border-radius:10%;
    ;
}
`
/*margin-top: 3%;
margin: 2%;
border:white;
border-radius: 50%;
box-shadow: 0 0 2em gray;
height:90px;
width: 90px;
z-index: -1;*/

