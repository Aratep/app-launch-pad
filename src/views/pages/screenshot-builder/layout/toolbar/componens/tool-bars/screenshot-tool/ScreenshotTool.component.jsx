import React from "react";
import { connect } from "react-redux";

//ACTIONS
import { updateSelectedScreen } from "redux/toolbar/toolbra.actions";
//UTILITIES
import { isObjectEmpty } from "utilities/helperFunctions";

const ScreenshotTool = (props) => {
   const { selectedScreen, updateSelectedScreen } = props;
   const handleImageUpload = (event) => {
      const uid = selectedScreen?.uid;
      const text = selectedScreen?.text;
      const image = URL.createObjectURL(event.target.files[0]);

      updateSelectedScreen(uid, text, image);
   };
   return (
      <div className="screenshot-tool">
         <input
            type="file"
            onChange={handleImageUpload}
            disabled={isObjectEmpty(selectedScreen)}
         />
      </div>
   );
};

const mapStateToProps = (state) => {
   const { toolbar } = state;
   return {
      selectedScreen: toolbar.selectedScreen,
   };
};

const mapDispatchToProps = (dispatch) => ({
   updateSelectedScreen: (uid, text, image) =>
      dispatch(updateSelectedScreen(uid, text, image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenshotTool);
