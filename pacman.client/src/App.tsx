import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from "./components/Root";
import HomePage from "./pages/Home";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route index element={<HomePage/>}/>
        </Route>
    )
);

function App(){
    return (
        <RouterProvider router={appRouter} />
    )
}
export default App;