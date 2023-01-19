import { ReactNode } from "react";

import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="h-full w-full bg-white dark:bg-black bg-[url('../assets/layered-waves-haikei.svg')] bg-center bg-cover bg-no-repeat flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default Layout;