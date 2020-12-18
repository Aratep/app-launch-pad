import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//COMPONENTS
import TextArea from "components/text-area/TextArea.component";
//ACTIONS
import { updateSelectedScreen } from "redux/toolbar/toolbra.actions";
//UTILITIES
import { isObjectEmpty } from "utilities/helperFunctions";

const TextTools = (props) => {
   const { toolbar, updateSelectedScreen } = props;
   const { selectedScreen } = toolbar;

   const onChange = (e) => {
      const { value } = e?.target;
      const uid = selectedScreen?.uid;
      const image = selectedScreen?.image;

      updateSelectedScreen(uid, value, image);
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
   updateSelectedScreen: (uid, text, image) =>
      dispatch(updateSelectedScreen(uid, text, image)),
});

export default connect(structuredSelector, mapDispatchToProps)(TextTools);
