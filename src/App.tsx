import { Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";

export function App() {
  return (
    <Routes>
      <Route element={<h1>Home</h1>} path="/" />
      <Route element={<h1>Settings</h1>} path="/settings" />
      <Route element={<Login />} path="/login" />
      <Route element={<h1>404</h1>} path="*" />
    </Routes>
  );
}
