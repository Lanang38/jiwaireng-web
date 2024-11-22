import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/home.jsx';
import { Setting } from "../pages/settings.jsx";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pengaturan" element={<Setting />} />
            </Routes>
        </BrowserRouter>
    );
};
