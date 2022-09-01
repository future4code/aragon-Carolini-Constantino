import styled from "styled-components";

export const Main = styled.main`
margin: 0%;
padding: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

img{
    position: absolute;
width: 383px;
height: 574px;
left: 4rem;
top: 5rem;
};

`
export const UpperFild = styled.div`
    background-color: #2D0C5E;
    height: 35rem;

.textMovie{
    padding-top: 1%;
    margin-left: 30rem;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

export const LowerFild = styled.div`
padding: 4rem;
display: flex;
h2, h3{
    color: black;
}
p{
    color: gray;
}

`

export const Trailer = styled.div`
display: block;
padding-left: 4rem;

h2{color: black;}
iframe{
    width: 60vw;
    height: 70vh;
}
`

export const Actor = styled.div`
height:  90%;
width: 150px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

img {
    align-items: center;
    align-content:center;
    text-align: center;
    width: 90%;
}
h3{
    margin: 0%;
}
p{
    margin: 0%;
    margin-bottom: 5%;
    color: gray;
}
`