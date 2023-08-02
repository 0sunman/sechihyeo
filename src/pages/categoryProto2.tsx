import { useEffect, useState } from "react";
import testStyle from '../styles/Test.module.css'
import listStyle from '../styles/list.module.css'
import popupStyle from '../styles/popup.module.css'
import BottomComponent from "@/Component/Bottom";
import HeaderComponent from "@/Component/Header";
const Popup = () => {
    return (<div className={popupStyle.popup}>
        <div style={{display:"flex", width:"100%", justifyItems:"center", alignItems:"center"}}>
            <div style={{width:"100%", textAlign:"center", backgroundColor:"#fff"}}>
                <div>
                    <img src="https://placehold.co/100x100" style={{width:"100%"}}/>
                    <ul>
                        <li>
                            상품명
                        </li>
                        <li>
                            상품상세
                        </li>
                    </ul>
                </div>
                <div>
                    <button style={{width:"20%"}}>취소하기</button>
                    <button style={{width:"80%"}}>구매하기</button>
                </div>
            </div>
            
        </div>
    </div>)
}


const Category = () => {
    
    const [Category, setCategory] = useState([{
        id:1, name : "디저트/간식", isCheck : false
    },{
        id:2, name : "음료", isCheck : false
    }])
    const [Taste, setTaste] = useState([{
        id:1, name : "고소", isCheck : false
    },{
        id:2, name : "담백", isCheck : false
    },{
        id:3, name : "달콤", isCheck : false
    },{
        id:4, name : "부드러움", isCheck : false
    },{
        id:5, name : "매콤", isCheck : false
    },{
        id:6, name : "쫄깃", isCheck : false
    },{
        id:7, name : "바삭", isCheck : false
    },{
        id:8, name : "이색", isCheck : false
    },{
        id:9, name : "새콤", isCheck : false
    },{
        id:10, name : "독특", isCheck : false
    },{
        id:11, name : "개성", isCheck : false
    },{
      id:12, name : "은은", isCheck : false
    },{
      id:13, name : "향긋", isCheck : false
    },{
      id:14, name : "시원", isCheck : false
    },{
      id:15, name : "청량", isCheck : false
    }
  ]) 
    const [category2,setCategory2]= useState([{
      id:1, name : "일반", isCheck : false
  },{
      id:2, name : "빵/디저트", isCheck : false
  },{
      id:3, name : "사탕/젤리", isCheck : false
  }])

    const [Datas, setDatas] = useState([

      {
        name : "초저당 티라미수 세트",
        id:1, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["고소","담백"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/1.jpg"
      },
      {
        name : "바스크 치즈케익 세트",
        id:2, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["고소","부드러움"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/2.jpg"
      },
      {
        name : "고사리 누들 떡볶이",
        id:3, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["매콤","쫄깃"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/3.jpg"
      },
      {
        name : "캐슈넛 멀티팩",
        id:4, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["바삭","고소"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/4.jpg"
      },
      {
        name : "글루텐프리 애플 크럼블 파운드케이크",
        id:5, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["담백","부드러움"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/5.jpg"
      },
      {
        name : "제로떡볶이",
        id:6, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["매콤","부드러움"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/6.jpg"
      },
      {
        name : "생과방 약과",
        id:7, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["이색","독특","개성","은은"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/7.jpg"
      },
      {
        name : "레몬 소르베, 피스타치오, 감귤 젤라또",
        id:8, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["새콤","달콤","고소","은은"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/8.jpg"
      },
      {
        name : "살라미 초콜릿 5가지 맛",
        id:9, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["이색","독특","개성","달콤"],
        category:"디저트/간식",
        category2:"일반",
        imageUrl:"/image/9.jpg"
      },
      {
        name : "찻잎담다 밀크티",
        id:10, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["향긋","시원"],
        category:"음료",
        category2:"일반",
        imageUrl:"/image/10.jpg"
      },
      {
        name : "애플주스",
        id:11, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["달콤","시원"],
        category:"음료",
        category2:"일반",
        imageUrl:"/image/11.jpg"
      },
      {
        name : "프리미엄 밀크티 세트",
        id:12, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["이색","독특","개성"], 
        category:"음료",
        category2:"일반",
        imageUrl:"/image/12.jpg"
      },
      {
        name : "원두 취향 찾기 패키지",
        id:13, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["고소","향긋"], 
        category:"음료",
        category2:"일반",
        imageUrl:"/image/13.jpg"
      },
      {
        name : "티 2종 세트",
        id:14, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["달콤","향긋"],
        category:"음료",
        category2:"일반",
        imageUrl:"/image/14.jpg"
      },
      {
        name : "이온 음료 4종",
        id:15, 
        description: "바삭한 감각과 고소한 맛을 선사하는 과자", 
        taste:["탄산","시원","청량","이색"],
        category:"음료",
        category2:"일반",
        imageUrl:"/image/15.jpg"
      }

    ])
    const tasteList = (Taste.reduce((a:any,v:any)=>{
      if(v.isCheck){
            a.push(v.name);
        }
        return a;
    },[]));
    const categoryList = (Category.reduce((a,v)=>{
        
        if(v.isCheck){
            a = v.name;
        }
        return a;
    },""));
    useEffect(()=>{

        setResult(Datas.reduce((a:any,v:any)=>{
            let isTrue = false;

            if(tasteList.length === 0 && categoryList.length === 0){
              a.push(v);
              return a;
            }

            

            for(let i=0;i<categoryList.length;i++){
                for(let j=0;j<v.category.length;j++){
                    if(categoryList[i] === v.category[j]){
                        isTrue = true;
                        j = v.category.length;
                    }
                    if(j === v.category.length-1){
                        isTrue = false;
                        i = categoryList.length + 1;
                    }
                }
            }
            if(categoryList.length === 0 || isTrue){

              for(let i=0;i<tasteList.length;i++){
                for(let j=0;j<v.taste.length;j++){
                    if(tasteList[i] === v.taste[j]){
                        isTrue = true;
                        j = v.taste.length;
                    }
                    if(j === v.taste.length-1){
                        isTrue = false;
                        i = tasteList.length + 1;
                    }
                }
              }
              if(isTrue){
                  a.push(v);
              }
            }

            return a;
        },[]))
    },[Category, Taste])

    const [IsPopup,setIsPopup] = useState(false);
    const [CurrentId,setCurrentId] = useState(null);

    const [Result,setResult] = useState(Datas)
    return (
        <div>
        <HeaderComponent/>
            <div className={`${popupStyle.popup} ${IsPopup ? "visible" : "none"}`} >
                {
                    Datas.map((ele:any,idx:any)=>{
                        if(ele.id === CurrentId){
                            return <div key={idx} style={{display:"flex", width:"100%", justifyItems:"center", alignItems:"center", height:"calc(100% - 60px)"}}>
                            <div style={{width:"100%", textAlign:"center", backgroundColor:"#fff"}}>
                                <div>
                                    <img src={ele.imageUrl} style={{width:"100%"}}/>
                                    <ul style={{padding:"30px 0px"}}>
                                        <li style={{textAlign:"left", marginLeft:"10px", marginBottom:"5px"}}>
                                            상품명 : {ele.name}
                                        </li>
                                        {/* <li style={{textAlign:"left", marginLeft:"10px"}}>
                                            상품상세  : {ele.description}
                                        </li> */}
                                    </ul>
                                </div>
                                <div>
                                    <button style={{width:"20%", height:"50px", border:0}} onClick={()=>{setIsPopup(false)}}>취소하기</button>
                                    <button style={{width:"80%", height:"50px", border:0, backgroundColor:"black", color:"white"}} onClick={()=>{alert("구매완료"); setIsPopup(false)}}>구매하기</button>
                                </div>
                            </div>
                            
                        </div>;
                        }else{
                            return "";
                        }})
                }
                
            </div>
            <div className={testStyle.test} style={{marginTop:"51px", borderTop:"1px solid #000"}}>
                <h2 style={{fontWeight:"bold"}}>장르 카테고리</h2>
                <ul>
                    {Category.map(({id,name,isCheck})=>(<li key={id} className={isCheck ? "checked" : ""} onClick={()=>{
                        //alert("현재 지원하지 않는 기능입니다.");
                        

                        setCategory(Category.map(ele => {
                            ele.isCheck = false;
                            if(ele.id === id){
                                ele.isCheck = !ele.isCheck
                            }
                            return ele;
                        }))
                        
                    }}>{name}</li>))}
                </ul>
                <h2 style={{fontWeight:"bold"}}>맛 카테고리</h2>
                <ul>
                    {Taste.map(({id,name,isCheck})=>(<li key={id} className={isCheck ? "checked" : ""} onClick={()=>{
                        setTaste(Taste.map(ele => {
                            if(ele.id === id){
                                ele.isCheck = !ele.isCheck
                            }
                            return ele;
                        }))
                        
                    }}>{name}</li>))}
                </ul>
            </div>
            <div style={{paddingBottom:"70px"}}>
              
            {   (tasteList.length >= 10)? <>
                      <img style={{width:"100%"}} src="https://media.tenor.com/Y1DBcZPPmAgAAAAd/dog.gif"/>
                    </>:<></>}
                <ul>
                    {
                    (Result.length === 0)?
                         <div className="not-found"> 결과 없음 </div>
                    :
                         Result.map((ele:any,idx:any)=> <li key={idx}>
                            <div className={listStyle.list} onClick={()=>{ 
                                    setIsPopup(true);
                                    setCurrentId(ele.id);
                                }}>
                                <div>
                                    <img src={ele.imageUrl} style={{width:"100px", height:"100px"}}/>
                                </div>
                                <ul>
                                    <li>{ele.name}</li>
                                    {/* <li>{ele.description}</li> */}
                                </ul>
                            </div>
                            </li>)
                    
                    
                    }
                   
                </ul>
            </div>
            <BottomComponent/>
        </div>
    )
}

export default Category;