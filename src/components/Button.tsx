import classNames from "classnames";
import Spinner from "./Spinner";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  loading?: boolean;
};

function Button({ children, loading, ...props }: Props): React.ReactElement {
  const buttonClass = classNames(
    "w-full",
    "inline-flex",
    "items-center",
    "justify-center",
    "px-4",
    "py-2",
    "bg-red-600",
    "border",
    "border-transparent",
    "rounded-md",
    "font-semibold",
    "capitalize",
    "text-white",
    "hover:bg-red-700",
    "active:bg-red-700",
    "focus:outline-none",
    "focus:border-red-700",
    "focus:ring",
    "focus:ring-red-200",
    "disabled:opacity-25",
    // "transition"
  );
  return (
    <button {...props} className={buttonClass}>
      {loading && <Spinner />}
      {children}
    </button>
  );
}

export default Button;
