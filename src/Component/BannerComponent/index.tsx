import BannerStyle from "./Banner.module.css"
const BannerComponent = ({imgUrl,Content,Title,Text}:any) =>{
    return (<div className={BannerStyle.banner} style={{marginTop:"40px"}}>
          <div style={{backgroundImage:imgUrl}}>
            {Content}
          </div>
          <h2>{Title}</h2>
          <p>{Text}</p>
          <div></div>
    </div>)
}

export default BannerComponent;