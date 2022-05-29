import styledComponents from "styled-components";

export const CardDetails = styledComponents.div`
    margin: 0;
    padding-lefht: 20%;
    padding-right: 20%;
    text-align: center;
    backgroud-color: #A020F0
    p, h1, h2, h3{
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color: white
    }button{
      background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
      border: 0;
      border-radius: 8px;
      box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
      box-sizing: border-box;
      color: #FFFFFF;
      display: flex;
      font-family: Phantomsans, sans-serif;
      font-size: 15px;
      justify-content: center;
      line-height: 1em;
    width: 15%;
      padding: 10px 10px;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      cursor: pointer;
    }

`