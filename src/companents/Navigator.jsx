import Homepage from "../pages/Homepage";

export const Navigator = () => {
    return (
        <Routes>
            <Route path="/home" element={<Homepage />} />
        </Routes>
    )
}
export default Navigator;