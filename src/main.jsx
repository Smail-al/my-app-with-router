import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Article from "./pages/Article";

// page components

import Home from "./pages/Home";
import About from "./pages/About";



const getWeatherOfTheDay = () =>{
  return "sunny"
};




const getSomeData = (id) => {
  const allData = {
    1: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
    2: {
      title: "Schnapsum",
      content: "Lorem Elsass ipsum Salut bisamme",
    },
    3: {
      title: "Cupcake Ipsum",
      content: "Tiramisu pastry wafer brownie soufflé",
    },
  };

  return allData[id];
};



// router creation

const router = createBrowserRouter([
    {
      element: <App />,
      loader: () => {
        const weather = "sunny";

        return weather;
      },
      id: "app",
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
        path: "/articles/:id",
        element: <Article/>,
        loader: ({ params }) => {
          return getSomeData(params.id);
        },
        },
      ],
    },
  ]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);