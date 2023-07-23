import Link from "next/link";
import HeaderStyle from "./Header.module.css";
const HeaderComponent = () => {
    
    return (<div className={HeaderStyle.Header}>
        <ul>
            <li>
                <h2 style={{letterSpacing:"3px"}}>SECHIHYEO</h2>
            </li>
            <li style={{"marginLeft":"auto"}}>
                <span className="material-symbols-outlined">
                search
                </span>
            </li>
            <li>
                <span className="material-symbols-outlined">
                local_mall
                </span>
            </li>
        </ul>
    </div>);
}

export default HeaderComponent;