import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const a = {
  color: "red"
};
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" style={a} contentEditable={false} draggable="true">
      Javascript Attributes & Styling
    </h1>
    <ul contentEditable={false} draggable="true">
      <li>Nikki</li>
      <li>Daddy</li>
      <li>Navya</li>
    </ul>
    <div>
      <img className="random-img" src={img}></img>
      <img
        className="kimage"
        src="https://imgs.search.brave.com/0m3fFJXYBzxEOOhFT5PvuOIe20juZEIzQ6-ZmEBLLB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bTkubmV3cy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNy9Q/cm9qZWN0LUsuanBn"
        alt="pk"
      />
      <img
        className="kimage"
        src="https://imgs.search.brave.com/0m3fFJXYBzxEOOhFT5PvuOIe20juZEIzQ6-ZmEBLLB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bTkubmV3cy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNy9Q/cm9qZWN0LUsuanBn"
        alt="pk"
      />
      <img
        className="kimage"
        src="https://imgs.search.brave.com/0m3fFJXYBzxEOOhFT5PvuOIe20juZEIzQ6-ZmEBLLB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bTkubmV3cy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNy9Q/cm9qZWN0LUsuanBn"
        alt="pk"
      />
    </div>
    <img
      className="kimage"
      src="https://imgs.search.brave.com/0m3fFJXYBzxEOOhFT5PvuOIe20juZEIzQ6-ZmEBLLB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bTkubmV3cy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNy9Q/cm9qZWN0LUsuanBn"
      alt="pk"
    />
  </div>,
  document.getElementById("root")
);
