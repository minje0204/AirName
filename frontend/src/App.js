import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Entry,
  FinReport,
  Home,
  Loading,
  NameCard,
  Rcmnd,
  Survey,
} from "./pages";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/entry" element={<Entry />}></Route>
          <Route path="/survey" element={<Survey />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/rcmnd" element={<Rcmnd />}></Route>
          <Route path="/namecard" element={<NameCard />}></Route>
          <Route path="/finreport" element={<FinReport />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
