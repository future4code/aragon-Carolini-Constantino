import styled from "styled-components"
 
export const Body = styled.div`
display: flex;
justify-content: center;
column-gap: 5px;
border: 3px solid black;
background-color: purple;
padding: 2%;
color: white;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 30px;
`
export const Input = styled.div`
background-color: aquamarine;
`


export const List = styled.div`
background-color: black;

`

export const PlaylistCard = styled.p`
font-size: 20px;
font-family: cursive;
border: 3px solid ;
margin: 5px;
width: 95,5%;
padding: 20px;
display: flex;
background-color: pink;
justify-content: space-between;
&:houver {
    cursor: pointer;
    background-color: lightblue;
}

`
export const Title = styled.p`
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 40px;
display: flex;
justify-content: center;
`