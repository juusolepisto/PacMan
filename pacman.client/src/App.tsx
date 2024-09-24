import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from "./components/Root";
import HomePage from "./pages/Home/Home";
import FundsPage from "./pages/Funds/Funds";
import FundPage from "./pages/Fund/Fund";
import InvestorsPage from "./pages/Investors/Investors";
import InvestorFundsPage from "./pages/InvestorFunds/InvestorFunds";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route index element={<HomePage/>}/>
            <Route path="funds" element={<FundsPage/>}/>
            <Route path="funds/:id" element={<FundPage/>}/>
            <Route path="investors" element={<InvestorsPage/>}/>
            <Route path="investors/:id" element={<InvestorFundsPage/>}/>
        </Route>
    )
);

const App: React.FC = () => {
    return (
        <RouterProvider router={appRouter} />
    )
}
export default App;