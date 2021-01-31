import Header from "@containers/Header/Header";
import Sidebar from "@containers/Sidebar/Sidebar";
import Main from "@containers/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { SidebarStateProvider } from "@hooks/SidebarState/SidebarState";

function App() {
  return (
    <SidebarStateProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="app__mainContent">
            <Sidebar />
            <Main />
          </div>
        </div>
      </Router>
    </SidebarStateProvider>
  );
}

export default App;
