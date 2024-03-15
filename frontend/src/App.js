import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SongManagementPage from './pages/SongManagementPage';

import SongUploadPage from './pages/SongUploadPage';
import UserManagePage from './pages/UserManagePage';
import SongPreviewPage from './pages/SongPreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path = "/main" element = {<MainPage/>} />
        <Route path = "/song/management" element = {<SongManagementPage/>}/>
        <Route path = "/song/preview" element = {<SongPreviewPage/>}/>
        <Route path = "/song/upload" element = {<SongUploadPage/>}/>
        <Route path = "/user/manage" element = {<UserManagePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
