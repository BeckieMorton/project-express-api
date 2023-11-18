import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IataCode } from "./IataCode";

export const Home = () => {
  const [airports, setAirports] = useState([]);
  const [code, setCode] = useState("");

  const myBackendAPI = `https://project-express-api-hcmb.onrender.com/airports`;

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch(myBackendAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setAirports(json);
        console.log("Updated airports state:", airports);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchAirports();
  }, []);

  console.log(`what is in airports array?: should be everything?:`, airports);
  console.log(`what is in code:? should be what user types in input:`, code);

  return (
    <>
      <div>
        <p style={{ textDecoration: "underline" }}>
          Enter the airport IATA code
        </p>
        <input
          type="text"
          placeholder="e.g JRO"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Link to={`/airports/iata/${code}`} key={code}>
          Find Airport
        </Link>
      </div>
    </>
  );
};
