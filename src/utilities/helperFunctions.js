import React from "react";

export function newlineText(text) {
   return text.split("\n").map((str, i) => (
      <p style={{ margin: "0" }} key={i}>
         {str}
      </p>
   ));
}

export function generateUID() {
   return Math.floor(100000 + Math.random() * 900000);
}

export function isObjectEmpty(obj) {
   const keys = Object.keys(obj);
   return !(keys.length > 0);
}
