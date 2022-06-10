import styled from "styled-components";

export const StyleFeed = styled.div`
background-color: #f5f6f7;
padding: 0.5%;
border-bottom: #ededeb solid 1px;
display: flex;
justify-content: center;
display: grid;
grid-template-columns: 1fr 1fr 1fr;

.createPost{
    width: 20rem;
    margin: auto;
    padding: 10px;
    background-color: white;
    width:35vw;
    border-style: solid;
    border-color: #ededeb;
    border-radius: 10px;
    font-size: x-small;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    @media screen and (min-device-width: 320px) and (max-device-width: 480px){
 width: 100%;
}
}

button {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 8px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 0.8rem;
  line-height: 29px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  padding: 0.5%;
  height: 5vh;
}

button:hover {
  background-color: #f7fafa;
}

button:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  outline: 0;
}

h2{
  font-size: large
}

nav{
.imgButtons{
  width: 3%;
}}

`;