interface LabelProps {
  text: string;
  className?: string;
  htmlFor: string;
}

export function Label({ text, htmlFor, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}
    >
      {text}
    </label>
  );
}
