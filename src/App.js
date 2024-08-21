import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/SideBar";
import Team from "./scenes/Team";
import Contacts from "./scenes/Contacts";
import Invoices from "./scenes/Invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
// import Bar from "./scenes/Bar";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/FAQ";
// import Geography from "./scenes/Geography";

function App() {
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSideBar={isSideBar} />
          <main className="content">
            <TopBar isSideBar={isSideBar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />

              <Route path="/invoices" element={<Invoices />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/Bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/pie" element={<Pie />} />*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
