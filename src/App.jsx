import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Waitlist from "./pages/Waitlist";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <Fragment>
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
      </Fragment>
    );
  };

  const BasicDash = () => {
    return (
      <Fragment>
        <Navbar />
        <Outlet />
        <Footer />
      </Fragment>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: <BasicDash />,
      children: [
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/wait",
          element: <Waitlist />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
