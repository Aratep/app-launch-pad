import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//COMPONENTS
import TextArea from "components/text-area/TextArea.component";
//ACTIONS
import {
   setToolbarParam,
   updateSelectedScreen,
} from "redux/toolbar/toolbra.actions";
//UTILITIES
import { isObjectEmpty } from "utilities/helperFunctions";

const TextTools = (props) => {
   const { setToolbarParam, toolbar, updateSelectedScreen } = props;
   const { selectedScreen } = toolbar;

   const onChange = (e) => {
      const { name, value } = e?.target;
      setToolbarParam(name, value);
      const uid = toolbar?.selectedScreen?.uid;

      updateSelectedScreen(uid, value);
   };

   return (
      <div className="text-tool">
         <TextArea
            domProps={{
               onChange: onChange,
               name: "text",
               value: selectedScreen?.text,
               rows: 4,
               disabled: isObjectEmpty(selectedScreen),
            }}
            resizeNone={true}
         />
      </div>
   );
};

const structuredSelector = createStructuredSelector({
   toolbar: (state) => state.toolbar,
});

const mapDispatchToProps = (dispatch) => ({
   setToolbarParam: (property, value) =>
      dispatch(setToolbarParam(property, value)),
   updateSelectedScreen: (uid, text) =>
      dispatch(updateSelectedScreen(uid, text)),
});

export default connect(structuredSelector, mapDispatchToProps)(TextTools);
