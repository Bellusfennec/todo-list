import React from "react";

interface ILabelProps {
  children?: React.ReactNode;
}

const Label = (props: ILabelProps) => {
  const { children } = props;
  return <p className="font-medium text-[14px] text-gray-600">{children}</p>;
};

export default Label;
