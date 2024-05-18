import {
  LandingPage,
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
];

export default routes;
