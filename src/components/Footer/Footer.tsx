import './Footer.css'
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {

    return (
        <footer className="footer">
            <p className="copyright">
                <AiOutlineCopyrightCircle /> 2026 Bridge Collective
            </p>

            <p className="charity">Registered charity 12345678</p>
        </footer>
    )
}