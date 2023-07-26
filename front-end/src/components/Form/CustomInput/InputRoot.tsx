interface InputRootProps {
  children: React.ReactNode;
}
export function InputRoot({ children }: InputRootProps) {
  return (
    <div>
      {children}
      {/* <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}
      >
        {label}
      </label>
      <div
        className={`${
          isPassword === true && 'relative flex w-full items-center justify-end'
        }`}
      >
        <input
          value={value}
          {...rest}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`bg-gray-50 border border-gray-300 
          text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
          focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500 ${className}}`}
        />
        {showPassword ? (
          <EyeSlashIcon
            className={`${
              isPassword
                ? 'h-6 w-6 absolute z-20 mr-2 cursor-pointer text-gray-100'
                : 'hidden'
            }`}
            onClick={() => setShowPassword && setShowPassword(!showPassword)}
          />
        ) : (
          <EyeIcon
            className={`${
              isPassword
                ? 'h-6 w-6 absolute z-20 mr-2 cursor-pointer text-gray-100'
                : 'hidden'
            }`}
            onClick={() => setShowPassword && setShowPassword(!showPassword)}
          />
        )}
      </div> */}
    </div>
  );
}
