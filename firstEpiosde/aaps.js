parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1"),
    React.createElement("h2", {}, "This is h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1"),
    React.createElement("h2", {}, "This is h2"),
  ]),
]);
reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parentDiv);
