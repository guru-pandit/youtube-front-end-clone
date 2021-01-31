import { createContext, useState } from "react";

const SidebarStateContext = createContext();

const SidebarStateProvider = ({ children }) => {
  const [isSidebarClose, setIsSidebarClose] = useState(false);

  return (
    <SidebarStateContext.Provider value={[isSidebarClose, setIsSidebarClose]}>
      {children}
    </SidebarStateContext.Provider>
  );
};

export { SidebarStateContext, SidebarStateProvider };
