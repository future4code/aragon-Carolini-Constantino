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
};

h5{
  background-color: #2D0C5E;
  border-radius: 50%;
  width: 3%;
  padding: 1.5%;
  margin: solid pink 2px;
  border: white solid 2px;
};

@media (max-width: 800px) {
  height: 65rem;
 
  img{
    width: 60%;
    height: 40%;
   margin-left: 3%;
    top: 8%;
  }

  .textMovie{
    padding-top: 100%;
    margin-left: 5%;
    margin-right: 29px;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
};

h5{
  background-color: #2D0C5E;
  border-radius: 50%;
  width: 5.5%;
  padding: 1.5%;
  margin: solid pink 2px;
  border: white solid 2px;
}
}
`

export const LowerFild = styled.div`
    padding-top: 5rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    
span {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

@media (max-width: 800px) {
  padding-top: 0;
  margin-left: 1rem;
  width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

img{
    width: 8rem;
    height: 13rem;
}
`

export const Trailer = styled.div`
display: block;
text-align: center;

h2{
  color: black;
}

iframe{
    width: 60vw;
    height: 70vh;
}

@media (max-width: 800px) {

  
  iframe{
    width: 18rem;
    height: 10rem;
  }
}

`

