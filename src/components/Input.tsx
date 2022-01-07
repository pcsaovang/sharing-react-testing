import classnames from "classnames";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {};

function Input(props: Props): React.ReactElement {
  const buttonClass = classnames(
    "py-2 px-3",
    "border",
    "border-gray-300",
    "focus:border-red-300",
    "focus:outline-none",
    "focus:ring",
    "focus:ring-red-200",
    "focus:ring-opacity-50",
    "rounded-md",
    "shadow-sm",
    "disabled:bg-gray-100",
    "mt-1",
    "block w-full"
  );

  return <input className={buttonClass} {...props} />;
}

export default Input;
