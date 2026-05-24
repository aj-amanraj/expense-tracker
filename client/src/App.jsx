import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./routes/ProtectedRoute";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/signin' />}
       />

      <Route path="/signin" element={<SignIn />} />

      <Route path="/signup" element={<SignUp />} />

      <Route path="/dashboard" 
        element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />
    </Routes>
    
  );
};

export default App;
