import "./App.css";
import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import CoursesPage from "./pages/Courses";
// import ContactUs from "./pages/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Disclaimer from "./pages/Disclaimer";
import PaymentPolicy from "./pages/PaymentPolicy";
import ReschedulePolicy from "./pages/ReschedulePolicy";
import Blog from "./blog/Blog";
import BlogPage from "./blog/BlogPage";
import NewCoursePage from "./components/Courses/NewCoursePage";

const Layout = () => {
  return (
    <div className="bg-logoYellow">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const Layout2 = () => {
  return (
    <div className="bg-logoWhite">
      <Navbar2 />
      <Outlet />
      <Footer />
    </div>
  );
};

const Layout3 = () => {
  return (
    <div className="">
      <Navbar2 />
      <BlogPage />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/blog",
    element: <Layout2 />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/blog/:slug",
    element: <Layout3 />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/courses",
        element: <NewCoursePage />,
      },
      // {
      //   path: "/courses",
      //   element: <CoursesPage />,
      // },
     
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      // {
      //   path: "/privacy-policy",
      //   element: <PrivacyPolicy />,
      // },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/payment-policy",
        element: <PaymentPolicy />,
      },
      {
        path: "/rescheduling-policy",
        element: <ReschedulePolicy />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
