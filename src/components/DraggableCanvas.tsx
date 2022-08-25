import React from 'react';
import styled from "styled-components";
import Draggable from "react-draggable"

const DraggableCanvas = () => {
    return (
        <Block>
            <Draggable bounds="parent">
                <DraggableElement>
                    "Drag Me"
                </DraggableElement>
            </Draggable>
            <Draggable bounds="parent">
                <DraggableElement>
                    "Drag Me"
                </DraggableElement>
            </Draggable>
            <Draggable bounds="parent">
                <DraggableElement>
                    "Drag Me"
                </DraggableElement>
            </Draggable>
            <Draggable bounds="parent">
                <DraggableElement>
                    "Drag Me"
                </DraggableElement>
            </Draggable>
            <Draggable bounds="parent">
                <DraggableElement>
                    "Drag Me"
                </DraggableElement>
            </Draggable>
            <Draggable bounds="parent">
                <DraggableElement>
                    "Drag Me"
                </DraggableElement>
            </Draggable>
            <Draggable onStart={() => console.log('asd')} bounds="parent">
                <DraggableElement>
                    "Drag Me"
                </DraggableElement>
            </Draggable>
        </Block>
    );
};

export default DraggableCanvas;


const Block = styled('div')`
  width: 100%;
  height: 500px;
  margin: 100px;
  position: relative;
  background-color: beige;
`

const DraggableElement = styled('div')`
  display: inline-block;
`