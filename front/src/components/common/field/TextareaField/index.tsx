/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import useAutoSizeTextArea from "../../../../hooks/useAutoSizeTextArea";
import { HandlerChange, SizeComponent } from "../../../../types";
import Label from "../../text/Label";

export interface ITextareaFieldProps {
  placeholder?: string;
  label?: string;
  error?: string;
  autoComplete?: string;
  value: string;
  name: string;
  onChange: ({ name, value }: HandlerChange) => void;
  inputClass?: string;
  rows?: number;
  after?: React.ReactNode;
  size?: SizeComponent;
}

const TextareaField = (props: ITextareaFieldProps) => {
  const { placeholder, label, value, name, onChange, autoComplete, rows = 1 } = props;
  const { inputClass, after, error = false, size = "medium" } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textValue, settTextValue] = useState("");
  useAutoSizeTextArea(textareaRef.current, textValue);

  useLayoutEffect(() => {
    if (value) settTextValue(value);
  }, []);

  const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    onChange?.({ name, value });
    settTextValue(value);
  };

  const sizeClass = (s: SizeComponent) => {
    if (s === "big") return " py-[12px] px-[24px] font-semibold";
    if (s === "medium") return " py-[9px] px-[18px] font-semibold";
    if (s === "small") return " py-[8px] px-[16px] font-medium text-[14px]";
  };

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && <Label>{label}</Label>}
      <div className="rounded-[8px] transition duration-200 hover:shadow-field-outer w-full shadow-sm ">
        <label
          className={
            "w-full relative flex items-center gap-[8px] border px-5 py-2 rounded-[8px] bg-white overflow-hidden transition duration-200 border-grey-#4 focus-within:shadow-field-inset" +
            sizeClass(size) +
            (inputClass ? " " + inputClass : "")
          }
        >
          <textarea
            ref={textareaRef}
            rows={rows}
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={handlerChange}
            className="placeholder:text-grey-#3 outline-none w-full resize-none"
          />
          {!!after && after}
        </label>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default React.memo(TextareaField);
