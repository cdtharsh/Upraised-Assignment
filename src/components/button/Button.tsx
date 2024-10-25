import React from "react";
import "./button.css";

interface ButtonInterface {
  text: string;
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: string;
  disabled?: boolean;
}

function Button({
  text,
  action,
  className = "",
  icon,
  disabled = false,
}: ButtonInterface) {
  return (
    <button
      className={`button_primary ${className}`}
      onClick={action}
      disabled={disabled}
    >
      {text}
      {icon && (
        <span>
          <img src={icon} alt="button-icon" className="button_icon" />
        </span>
      )}
    </button>
  );
}

export default Button;
