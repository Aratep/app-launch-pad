import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//UTILITIES
import { newlineText } from "utilities/helperFunctions";

const ResultBlock = (props) => {
   const { toolbar } = props;

   const devicesArray = [
      { id: 1, text: "", image: "" },
      { id: 2, text: "", image: "" },
      { id: 3, text: "", image: "" },
   ];

   return (
      <section className="results-block">
         <div className="results-block__devices">
            {devicesArray.map((item, index) => (
               <div className="device" key={item.id}>
                  <h3 className="device__heading">
                     {newlineText(toolbar?.text)}
                  </h3>
               </div>
            ))}
         </div>
      </section>
   );
};

const structuredSelector = createStructuredSelector({
   toolbar: (state) => state.toolbar,
});

export default connect(structuredSelector)(ResultBlock);
