import React from "react";

export function newlineText(text) {
   return text.split("\n").map((str, i) => (
      <p style={{ margin: "0" }} key={i}>
         {str}
      </p>
   ));
}
