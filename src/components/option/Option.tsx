import "./Option.css";

import { option, selectedOption } from "../../assets";

interface OptionProps {
  id: string; // id is now a required string
  text: string;
  selected?: boolean;
  onSelectAction: (id: string) => void; // Ensure the action uses string
}

function Option({ id, text, selected = false, onSelectAction }: OptionProps) {
  return (
    <div
      className={`option_wrap ${selected ? "option_wrap_selected" : ""}`}
      onClick={() => {
        onSelectAction(id);
      }}
    >
      <img
        src={selected ? selectedOption : option}
        alt={`option-select-${id}`}
        className="option_svg"
      />
      <div className={"option_text"}>{text}</div>
    </div>
  );
}

export default Option;
