import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StartRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StartRating color="blue" maxRating={5} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
