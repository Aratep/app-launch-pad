import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import classNames from "classnames";

//UTILITIES
import { newlineText } from "utilities/helperFunctions";
//ACTIONS
import { setSelectedScreen } from "redux/toolbar/toolbra.actions";

const ResultBlock = (props) => {
   const { toolbar, setSelectedScreen } = props;

   const onScreenSelect = (uid) => {
      const selectedScreen = toolbar?.devicesArray.filter(
         (item) => item.uid === uid
      );
      setSelectedScreen(selectedScreen[0]);
   };

   return (
      <section className="results-block">
         <div className="results-block__devices">
            {toolbar?.devicesArray.map((item) => {
               const deviceClasses = classNames({
                  screen: true,
                  "selected-screen": item.uid === toolbar?.selectedScreen?.uid,
               });

               return (
                  <div
                     className={deviceClasses}
                     onClick={() => onScreenSelect(item.uid)}
                     key={item.uid}>
                     <h3 className="screen__heading">
                        {newlineText(item.text)}
                     </h3>
                     {item.image !== "" && (
                        <div className="screen__image-block">
                           <img
                              src={item.image}
                              className="screen__image-block__img"
                              alt="screenshot"
                           />
                        </div>
                     )}
                  </div>
               );
            })}
         </div>
      </section>
   );
};

const structuredSelector = createStructuredSelector({
   toolbar: (state) => state.toolbar,
});

const mapDispatchToProps = (dispatch) => ({
   setSelectedScreen: (selectedScreen) =>
      dispatch(setSelectedScreen(selectedScreen)),
});

export default connect(structuredSelector, mapDispatchToProps)(ResultBlock);
