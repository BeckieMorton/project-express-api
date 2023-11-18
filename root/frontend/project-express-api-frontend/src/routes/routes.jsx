import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Country } from "../pages/Country";
import { IataCode } from "../pages/IataCode";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/airports/country/:iso_country" element={<Country />} />
    <Route path="/airports/iata/:code" element={<IataCode />} />
  </>
);

export default routes;
