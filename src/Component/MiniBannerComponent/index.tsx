import MiniBannerStyle from "./MiniBanner.module.css"
const MiniBannerComponent = ({Content,isArrow,Align}) =>{
    return (<div className={MiniBannerStyle.banner}>
        {Align === "right" ? (
            <h2 style={{marginLeft:"auto", marginRight:"25px"}}>{Content}</h2>
        ) : (
            <h2>{Content}</h2>
        )}
          {isArrow === true ? <span className="material-symbols-outlined">arrow_forward</span> : ""}
    </div>)
}

export default MiniBannerComponent;