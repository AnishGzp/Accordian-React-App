import "./styles.css";

export default function Accordian(props) {
  const {
    data,
    handleSingleSelection,
    selected,
    enableMultiSelection,
    setEnableMultiSelection,
    handleMultiSelection,
    multiple,
    setMultiple,
    setSelected,
  } = props;
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          setMultiple([]);
          setSelected(null);
        }}
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
