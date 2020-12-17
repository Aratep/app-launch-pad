import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//COMPONENTS
import TextArea from "components/text-area/TextArea.component";
//ACTIONS
import { setToolbarParam } from "redux/toolbar/toolbra.actions";

const TextTools = (props) => {
   const { setToolbarParam, toolbar } = props;
   const { selectedScreen } = toolbar;

   const onChange = (e) => {
      const { name, value } = e?.target;
      setToolbarParam(name, value);
   };

   return (
      <div className="text-tool">
         <TextArea
            onChange={onChange}
            name="text"
            value={selectedScreen?.text}
            rows={4}
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
});

export default connect(structuredSelector, mapDispatchToProps)(TextTools);
