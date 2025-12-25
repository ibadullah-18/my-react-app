import { Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage";
import Detalispage from "../pages/Detalispage";

export const Navigator = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<Detalispage />} />
        </Routes>
    )
}
export default Navigator;