import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import MainLayout from "../layouts/MainLayout"

const AppRouter = () => (
    <BrowserRouter basename="/tedxfptuniversityhcmc2025">
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </MainLayout>
    </BrowserRouter>
)

export default AppRouter