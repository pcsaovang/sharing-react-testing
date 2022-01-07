import classNames from "classnames";
import React from "react";

type MessageType = "success" | "warning" | "error";

type Props = {
  content: string;
  type?: MessageType;
};

const iconMap: Record<MessageType, React.ReactElement> = {
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  ),
};

function Message({ content, type = "success" }: Props): React.ReactElement {
  const containerClass = classNames(
    "flex",
    "items-center",
    "w-full",
    "px-2",
    "py-2",
    "rounded",
    {
      "text-green-700": type === "success",
      "bg-green-100": type === "success",
    },
    {
      "text-yellow-700": type === "warning",
      "bg-yellow-100": type === "warning",
    },
    {
      "text-red-700": type === "error",
      "bg-red-100": type === "error",
    }
  );

  return (
    <div className="flex justify-center mt-2">
      <div className={containerClass}>
        {iconMap[type]}
        <p className="ml-2 text-medium">{content}</p>
      </div>
    </div>
  );
}

export default Message;
