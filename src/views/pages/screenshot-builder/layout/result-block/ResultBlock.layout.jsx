import React from "react";

const ResultBlock = () => {
   return (
      <section className="results-block">
         <div className="results-block__devices">
            {[1, 2, 3].map((item, index) => (
               <div key={index} />
            ))}
         </div>
      </section>
   );
};

export default ResultBlock;
