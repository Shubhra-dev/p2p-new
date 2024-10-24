import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./ui/Home/Home";
import Investment from "./pages/investment/Investment";
import InvestmentIslamic from "./pages/investment-islamic/InvestmentIslamic";
import InvestmentAssure from "./pages/investment-assure/InvestmentAssure";
import InvestmentPlus from "./pages/investment-plus/InvestmentPlus";
import InvestmentReferral from "./pages/investment-referral/InvestmentReferral";
import GetFundConventional from "./pages/getfund-conventional/GetFundConventional";
import GetfFundCollateral from "./pages/getfund-collateral/GetfFundCollateral";
import GetFundIslamic from "./pages/getfund-islamic/GetFundIslamic";
import GetFundReferral from "./pages/getfund-referral/GetFundReferral";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/investment",
        element: <Investment />,
      },
      {
        path: "/investment/islamic",
        element: <InvestmentIslamic />,
      },
      {
        path: "/investment/assure",
        element: <InvestmentAssure />,
      },
      {
        path: "/investment/plus",
        element: <InvestmentPlus />,
      },
      {
        path: "/investment/referral",
        element: <InvestmentReferral />,
      },
      {
        path: "/get-fund/conventional",
        element: <GetFundConventional />,
      },
      {
        path: "/get-fund/collateral",
        element: <GetfFundCollateral />,
      },
      {
        path: "/get-fund/islamic",
        element: <GetFundIslamic />,
      },
      {
        path: "/get-fund/referral",
        element: <GetFundReferral />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
