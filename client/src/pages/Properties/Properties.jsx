import React from "react";
import "./Properties.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  console.log(data);

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error While Fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flexColCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="flexColCenter paddings properties-container">
      <SearchBar />
      <div className="paddings flexCenter properties">
        {
          data.map((card,i)=>(<PropertyCard card={card} key={i}/>))
        }
      </div>
    </div>
  );
};

export default Properties;
