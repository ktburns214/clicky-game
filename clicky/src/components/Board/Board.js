import React from "react";

function Board(props) {
  return (
    <div id="board">
      {props.images.map(image => (
        <div
          style={{
            backgroundImage: "url(" + image.url + ")",
            backgroundSize: "cover"
          }}
          className="image"
          id={"image-" + image}
          key={image.index}
          onClick={() => {
            props.clickHandler(image.index);
          }}
        />
      ))}
    </div>
  );
}

export default Board;
