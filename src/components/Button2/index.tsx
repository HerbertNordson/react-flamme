import { IButton } from "../../utils/interfaces";

export const Button2 = ({
  type = "button",
  label,
  onclick,
  classes,
}: IButton) => {
  return (
    <button
      className={`rounded-lg px-2.5 py-3 w-36 mb-40 text-sm bg-brownbutton text-white font-semibold ${classes}`}
      onClick={onclick}
      type={type}
    >
      {label}
    </button>
  );
};
