import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
            {toolbar?.devicesArray.map((item, index) => (
               <div
                  className="device"
                  onClick={() => onScreenSelect(item.uid)}
                  key={item.uid}>
                  <h3 className="device__heading">{newlineText(item.text)}</h3>
               </div>
            ))}
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
