import React,{ FC } from "react";
import "./index.css";

type Props = {
  children: React.ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return <div className="page-layout">{children}</div>;
};

export default Layout;
