import styled from "styled-components";

export const Main = styled.div`
margin: 0%;
padding: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #E5E5E5;


`
export const UpperFild = styled.div`
    background-color: #2D0C5E;
    height: 35rem;

    img{
    position: absolute;
width: 383px;
height: 574px;
left: 4rem;
top: 5rem;
};

.textMovie{
    padding-top: 1%;
    margin-left: 30rem;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

export const LowerFild = styled.div`
    padding-top: 5rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
    

span {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

@media (max-width: 800px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }

img{
    width: 5rem;
    height: 8rem;
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

