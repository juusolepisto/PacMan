import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from "./components/Root";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route index element={<HomePage/>}/>
            <Route path="funds" element={<FundsPage/>}/>
            <Route path="inverstors" element={<InverstorsPage/>}/>
            <Route path="companies" element={<CompaniesPage/>}/>
        </Route>
    )
);

function App(){
    return (
        <RouterProvider router={appRouter} />
    )
}
export default App;