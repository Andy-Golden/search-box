import "./styles.css";

type PropsSearchBox = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

function SearchBox({ visible, setVisible }: PropsSearchBox) {
  const handleClick = (visible: boolean) => {
    setVisible(visible);
  };

  return (
    <div className={`searchbox ${visible ? "searchbox--show" : ""}`}>
      <input className="searchbox__input" type="text" />
      <button
        className="searchbox__button"
        type="button"
        onClick={() => handleClick(!visible)}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBox;
