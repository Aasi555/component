/*import "./styles.css";

function App() {
  return (
    <div id="root" className="App">
      <p>
        <h1>I am learning React. My life is getting better. </h1>
      </p>
    </div>
  );
}

export default App;*/
require("./styles.css");

function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "root",
    className: "App"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("h1", null, "I am learning React. My life is getting better. ")));
}

var _default = App;
exports.default = _default;