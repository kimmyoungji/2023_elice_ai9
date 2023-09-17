import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const name = "Sara";
function Welcome() {
    return <h2>Welcome, {name}!</h2>;
}

const element = <Welcome />;

ReactDOM.render(element, document.getElementById("root"));
