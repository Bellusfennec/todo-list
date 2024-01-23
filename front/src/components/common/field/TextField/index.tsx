"use client";
import React from "react";
import { HandlerChange, SizeComponent } from "../../../../types";
import Label from "../../text/Label";

export interface ITextFieldProps {
  placeholder?: string;
  label?: string;
  error?: string;
  autoComplete?: string;
  value: string;
  name: string;
  onChange: ({ name, value }: HandlerChange) => void;
  type?: string;
  inputClass?: string;
  after?: React.ReactNode;
  size?: SizeComponent;
}

const TextField = (props: ITextFieldProps) => {
  const { placeholder, label, value, name, onChange, type = "text", autoComplete } = props;
  const { inputClass, after, error = false, size = "medium" } = props;

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange?.({ name, value });
  };

  const sizeClass = (s: SizeComponent) => {
    if (s === "big") return " py-[12px] px-[24px] font-semibold";
    if (s === "medium") return " py-[9px] px-[18px] font-semibold";
    if (s === "small") return " py-[8px] px-[16px] font-medium text-[14px]";
  };

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && <Label>{label}</Label>}
      <div className="rounded-[8px] transition duration-200 hover:shadow-field-outer w-full">
        <label
          className={
            "w-full relative flex items-center gap-[8px] border px-5 py-2 rounded-[8px] bg-white overflow-hidden transition duration-200 border-grey-#4 focus-within:shadow-field-inset" +
            sizeClass(size) +
            (inputClass ? " " + inputClass : "")
          }
        >
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={handlerChange}
            className="placeholder:text-grey-#3 outline-none w-full"
          />
          {!!after && after}
        </label>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default React.memo(TextField);
