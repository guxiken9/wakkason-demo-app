import { FunctionComponent } from "react";

export const Label: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <label
      htmlFor="hs-feedback-post-comment-textarea-1"
      className="block mb-2 text-sm font-medium"
    >
      {text}
    </label>
  );
};
