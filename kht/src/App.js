import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import BeforeLayout from "./navigation/BeforeLayout";
import AfterLayout from "./navigation/AfterLayout";

import LoginBeforePage from "./pages/Main/LoginBefore";
import LoginAfterPage from "./pages/Main/LoginAfter";
import LoginPage from "./pages/Auth";
import SignupPage from "./pages/User";
import ResultPage from "./pages/Search/Result";
import SearchPage from "./pages/Search/Search";
import InfoPage from "./pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BeforeLayout />}>
          <Route path="/" element={<LoginBeforePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route element={<AfterLayout />}>
          <Route path="/main" element={<LoginAfterPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;