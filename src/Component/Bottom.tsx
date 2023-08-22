import Link from "next/link";
import bottomStyle from "./Bottom.module.css";
const BottomComponent = () => {
    
    return (<div className={bottomStyle.bottom}>
        <ul>
            <li>
                <Link href="./">
                    <span className="material-symbols-outlined ">home</span><br/>
                    HOME
                </Link>
            </li>
            {/* <li>
                <Link href="./categoryProto1">
                    <span className="material-symbols-outlined">
                    smart_toy
                    </span><br/>
                    PROTO1
                </Link>
            </li> */}
            <li>
                <Link href="./categoryProto2">
                    <span className="material-symbols-outlined">
                    robot
                    </span><br/>
                    CATEGORY
                </Link>
            </li>
            <li>
                <Link href="#" onClick={()=>{alert("현재 지원하지 않는 기능입니다."); return false;}}>
                    <span className="material-symbols-outlined">
                    person
                    </span><br/>
                    MY
                </Link>
            </li>
        </ul>
    </div>);
}

export default BottomComponent;