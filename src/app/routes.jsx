import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/home.jsx';
import { Profile } from "../pages/Profile.jsx";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};
