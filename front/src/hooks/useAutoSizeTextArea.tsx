import { useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
const useAutoSizeTextArea = (textareaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textareaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textareaRef.style.height = "0px";
      const scrollHeight = textareaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textareaRef.style.height = scrollHeight + "px";
    }
  }, [textareaRef, value]);
};

export default useAutoSizeTextArea;
