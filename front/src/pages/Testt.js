import React from "react";
import ReactDOM from "react-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Testt() {
  return (
    <TransformWrapper
      defaultScale={1}
      defaultPositionX={200}
      defaultPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
        <React.Fragment>
          <button
            className="px-2 py-1 border border-black bg-white text-yellow-400"
            onClick={zoomIn}
          >
            +
          </button>

          <button onClick={zoomIn}>+</button>
          <button onClick={zoomOut}>-</button>
          <button onClick={resetTransform}>x</button>

          <TransformComponent>bbbaabb</TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<testt />, rootElement);

export default Testt;
