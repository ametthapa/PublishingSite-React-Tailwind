import React from "react";

import Showcase from "../components/Showcase";
import Information from "../components/Information";
import DataValue from "../components/DataValue";
import Author from "../components/Author";
import RecentBlog from "../components/RecentBlog";

const HomePage = () => {
  return (
    <div>
      <Showcase />
      <Information />
      <DataValue />
      <Author />
      <RecentBlog />
    </div>
  );
};

export default HomePage;
