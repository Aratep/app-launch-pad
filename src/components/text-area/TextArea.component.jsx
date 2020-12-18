import React from "react";
import classNames from "classnames";

const TextArea = (props) => {
   const { textAreaClassName, resizeNone, domProps } = props;

   const textAreaClasses = classNames({
      "resize-none": resizeNone,
      [textAreaClassName]: textAreaClassName !== undefined,
   });

   return (
      <div className="custom-text-area">
         <textarea className={textAreaClasses} {...domProps} />
      </div>
   );
};

export default TextArea;
