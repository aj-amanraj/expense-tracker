import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/publicRoute";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/signin' />}
       />

      <Route path="/signin" element={
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      } />

      <Route path="/signup" element={
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      } />

      <Route path="/dashboard" 
        element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />

        <Route path="*" 
          element={<NotFound />} 
        />

    </Routes>
    
  );
};

export default App;
