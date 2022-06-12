import styled from "styled-components";

export const StyleDetails = styled.div`

nav{
    padding: 5px;
img{
            width: 3%;
        }
}
main{
display: flex;
justify-content: space-around;
font-size: small;
}

form{
    display: flex;
    gap: 2px;
    font-family: Arial, Helvetica, sans-serif;

    button{
        border-radius: 50%;
    }
}
@media screen and (min-device-width: 320px) and (max-device-width: 480px){
display: inline;
width: 100%;
margin: 0%;
background-color: aliceblue;
main{
    display: block;
    margin: 0%;
    padding: 0
 }

 h2{
    font-size: small;
    padding-left: 5px;
    margin: 1%;
 }
 form{
input{
    width: 55%;
}
label{
    font-size: x-small;
    padding-left: 3px;
}
button{
    padding: 0;
    border-radius: 50px;
    background-color: white;
}
 }
 nav{
    display: flex;
    justify-content: center;
    padding: 3px;
    img{
    width: 20px;
 }}
}
`;