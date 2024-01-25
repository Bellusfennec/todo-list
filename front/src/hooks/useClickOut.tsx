/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { getRandomNumberId } from "../utils/randomId";

interface useClickOutProps {
  onClickOut: (arg?: any) => void;
  isOpen: boolean;
  name?: string;
}

const useClickOut = (props: useClickOutProps) => {
  const { onClickOut, isOpen, name } = props;
  const id = useMemo(() => getRandomNumberId(), []);
  const noClose = name ? name : `no-close-${id}`;

  const handlerClickOutSide = (event: any) => {
    const { target } = event;
    if (target?.closest(`.${noClose}`) === null) onClickOut?.();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handlerClickOutSide);
      return () => document.removeEventListener("click", handlerClickOutSide);
    }
  }, [isOpen]);

  return { noClose };
};

export default useClickOut;
