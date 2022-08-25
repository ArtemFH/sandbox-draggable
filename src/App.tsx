import React from 'react';
import styled from "styled-components";
import DraggableCanvas from "./components/DraggableCanvas";

function App() {
    return (
        <Block>
            {/*<SearchNode/>*/}
            <DraggableCanvas/>
        </Block>
    );
}

export default App;


const Block = styled('div')`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: center
`