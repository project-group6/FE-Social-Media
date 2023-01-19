import { ReactNode } from "react";

import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="h-full w-full bg-white dark:bg-black flex flex-row">
        {children}
      </div>
    </div>
  );
}

export default Layout;