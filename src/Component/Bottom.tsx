import Link from "next/link";
import bottomStyle from "./Bottom.module.css";
const BottomComponent = () => {
    
    return (<div className={bottomStyle.bottom}>
        <ul>
            <li>
                <Link href="./">
                    <span className="material-symbols-outlined ">home</span><br/>
                    Home
                </Link>
            </li>
            <li>
                <Link href="./category">
                    <span className="material-symbols-outlined">
                    fastfood
                    </span><br/>
                    Taste
                </Link>
            </li>
            <li>
                <Link href="#" onClick={()=>{alert("현재 지원하지 않는 기능입니다."); return false;}}>
                    <span className="material-symbols-outlined">
                    person
                    </span><br/>
                    My
                </Link>
            </li>
        </ul>
    </div>);
}

export default BottomComponent;