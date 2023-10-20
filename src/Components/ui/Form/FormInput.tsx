"use client";

interface IInput {
  name: string;
  type?: string;
  size?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  color?: string;
}
import { useFormContext, Controller } from "react-hook-form";
const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  color,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  //   //show the error message
  //   const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <label className="label">
            <span className="label-text">{label && label}</span>
          </label>
          <input
            type={type}
            placeholder={placeholder}
            className={`${size} p-2 mb-4 border ${color} ${size}  rounded `}
            {...field}
            value={value ? value : field.value}
          />
        </>
      )}
    />
  );
};

export default FormInput;
