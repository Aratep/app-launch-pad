import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ScreenshotBuilderPage = React.lazy(() =>
   import("../screenshot-builder/ScreenshotBuilder.page")
);

const AppRoutes = () => {
   const componentsArray = [
      {
         component: ScreenshotBuilderPage,
         path: "/screenshot-builder",
      },
   ];

   return (
      <div className="app-routes">
         <Suspense
            fallback={
               <div className="loader-wrapper">
                  <Spinner animation="border" />
               </div>
            }>
            <Switch>
               {componentsArray.map((component) => {
                  return (
                     <Route
                        exact
                        path={component.path}
                        component={component.component}
                        key={component.path}
                     />
                  );
               })}
               <Redirect to="/screenshot-builder" />
            </Switch>
         </Suspense>
      </div>
   );
};

export default AppRoutes;
