import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotationPage";
import ServePage from "./pages/ServicePage";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          index: true
        },
        {
          path: '/services',
          element: <ServePage />
        },
        {
          path: '/quote',
          element: <QuotePage />
        },
      ]
    }
  ]
);

export default router;