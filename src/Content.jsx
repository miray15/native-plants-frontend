import axios from "axios";
import { useEffect, useState } from "react"; // Added useState import
import { CountiesIndex } from "./CountiesIndex";

export function Content() {
  const [counties, setCounties] = useState([]); // Added useState

  useEffect(() => {
    // Define a function to fetch counties data
    const fetchCounties = async () => {
      try {
        const response = await axios.get("http://localhost:3000/counties.json");
        setCounties(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching counties data:", error);
      }
    };

    // Call the fetchCounties function when the component mounts
    fetchCounties();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <CountiesIndex counties={counties} />{" "}
      {/* Pass counties data to CountiesIndex */}
    </div>
  );
}
