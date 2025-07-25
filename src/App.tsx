import { RouterProvider, createHashRouter } from "react-router-dom";

import { Root, HomePage, SessionsPage, SessionPage } from "./pages";

const Router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
