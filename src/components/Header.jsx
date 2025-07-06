import { Link } from "react-router-dom"

const Header = () => (
    <header>
        <nav>
            <Link to="/">Trang chủ</Link> | <Link to="/about">Giới thiệu</Link>
        </nav>
    </header>
)

export default Header
