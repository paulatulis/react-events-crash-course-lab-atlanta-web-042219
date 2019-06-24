import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let xCoord = event.clientX
    let yCoord = event.clientY
    drawChromeBoiAtCoords(xCoord, yCoord)
  }

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   handleKeyDown = (event)=>{
     if (event.key === 'a'){
      resize('+')
    }
     else if (event.key === 's'){
       resize('-')
     }
   }

   handleClick = () => {
     toggleCycling()
   }
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

  render() {
    return (
      <canvas
        onClick={this.handleClick}
        onKeyPress={this.handleKeyDown}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
