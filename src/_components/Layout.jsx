import React from "react";

const Layout = ({ children, containerName = "" }) => {
  return (
    <div className="wrapper">
      <div className={"container " + containerName}>{children}</div>
    </div>
  );
};

export default Layout;
