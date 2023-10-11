import { useState } from "react";
import SearchBox from "./components";
import "./styles.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="container">
      <SearchBox visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
