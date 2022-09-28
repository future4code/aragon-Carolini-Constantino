import styled from "styled-components";

export const Main = styled.main`
padding: 0%;
margin: 0%;
background-color: #2d0c5e;


`

export const UpperFild = styled.div`
background-color: #2d0c5e;
margin: 0%;
padding: 0%;

h1 {
    padding-top: 1rem;
    padding-left: 1rem;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
};

div.genre {
    justify-content: center;
    align-items: center;
    margin: 2%;
    padding-bottom: 2%;
};

p {
    color: #EBEBEB;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 0;
};

button {
    height: 2.15rem;
    background-color:#EBEBEB;
    border-radius: 4px;
    padding: 6px, 16px, 6px, 16px;
    margin: 0.25%;
    left: 1470px;
    top: 162px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
};

button:hover {
  color: #fff;
  background-color: #D18000;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

`;

export const LowerFild = styled.div`
padding-top: 3%;
padding-left: 2%;
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

p{
    color: #5C16C5;
    font-size: large;
} 
@media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 30px;
}
`
export const Pagination = styled.div`
background-color: white;
display: flex;
justify-content: center;
color: #5C16C5;
font-size: large;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
