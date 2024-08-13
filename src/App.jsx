import { useState } from "react";
import Accordian from "./components/accordian";
import data from "./components/accordian/data";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMulti = [...multiple];
    const findIndexOfCurrentId = cpyMulti.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cpyMulti.push(getCurrentId);
    else cpyMulti.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMulti);
  }
  console.log(selected, multiple);

  return (
    <>
      <Accordian
        data={data}
        handleSingleSelection={handleSingleSelection}
        selected={selected}
        enableMultiSelection={enableMultiSelection}
        setEnableMultiSelection={setEnableMultiSelection}
        handleMultiSelection={handleMultiSelection}
        multiple={multiple}
        setMultiple={setMultiple}
        setSelected={setSelected}
      />
    </>
  );
}

export default App;
