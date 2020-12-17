import React from "react";

const TextArea = (props) => {
   return (
      <div className="custom-text-area">
         <textarea {...props} />
      </div>
   );
};

export default TextArea;
