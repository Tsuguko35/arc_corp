import {
  AboutUs,
  LandingPage,
  Portfolio,
  Product,
  RequestQuote,
  ServiceCommercial,
  ServiceResidential,
  Services,
} from "../pages";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/RequestQuote",
    component: <RequestQuote />,
  },
  {
    path: "/Services",
    component: <Services />,
  },
  {
    path: "/Services/Residential",
    component: <ServiceResidential />,
  },
  {
    path: "/Services/Commercial",
    component: <ServiceCommercial />,
  },
  {
    path: "/Services/:productType",
    component: <Product />,
  },
  {
    path: "/Portfolio",
    component: <Portfolio />,
  },
  {
    path: "/About",
    component: <AboutUs />,
  },
];

export default routes;
