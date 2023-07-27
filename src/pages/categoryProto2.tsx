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
        id:1, name : "과자", isCheck : false
    },{
        id:2, name : "라면", isCheck : false
    },{
        id:3, name : "위스키", isCheck : false
    },{
        id:4, name : "커피", isCheck : false
    }])
    const [Taste, setTaste] = useState([{
        id:1, name : "단맛", isCheck : false
    },{
        id:2, name : "짠맛", isCheck : false
    },{
        id:3, name : "쓴맛", isCheck : false
    },{
        id:4, name : "신맛", isCheck : false
    },{
        id:5, name : "고소한", isCheck : false
    },{
        id:6, name : "텁텁한", isCheck : false
    },{
        id:7, name : "부드러운", isCheck : false
    },{
        id:8, name : "바삭한", isCheck : false
    },{
        id:9, name : "매운맛", isCheck : false
    },{
        id:10, name : "촉촉한", isCheck : false
    }]) 
    const [category2,setCategory2]= useState([{
      id:1, name : "일반", isCheck : false
  },{
      id:2, name : "빵/디저트", isCheck : false
  },{
      id:3, name : "사탕/젤리", isCheck : false
  }])
    /*
    
    */
    const [Datas, setDatas] = useState([
        {id:1, description: "바삭한 감각과 고소한 맛을 선사하는 과자", name : "새우깡", taste:["짠맛","고소한","바삭한"], category:"과자",category2:"일반"},
        {id:2, description: "고소한 맛이 특징인 간편한 과자", name : "깨소금과자", taste:["짠맛","고소한"], category:"과자",category2:"일반"},
        {id:3, description: "짠맛이 돋보이는 과자", name : "소금과자", taste:["짠맛"], category:"과자",category2:"일반"},
        {id:4, description: "독특한 텍스처와 풍부한 맛을 지닌 과자", name : "먹태깡", taste:["짠맛","텁텁한"], category:"과자",category2:"젤리/사탕"},
        {id:5, description: "다양한 맛을 즐길 수 있는 유쾌한 젤리", name : "하리보", taste:["단맛","신맛"], category:"과자",category2:"젤리/사탕"},
        {id:6, description: "달콤함과 특별한 맛을 선사하는 과자", name : "달고나", taste:["단맛","쓴맛"], category:"과자",category2:"젤리/사탕"},
        {id:7, description: "고소한 맛과 함께 달콤한 감동을 주는 과자", name : "소라과자", taste:["단맛","고소한"], category:"과자",category2:"일반"},
        {id:8, description: "달콤함이 가득한 고급스러운 케이크", name : "초코케잌", taste:["단맛","부드러운"], category:"과자",category2:"빵/디저트"},
        {id:9, description: "달달하고 매콤한 과자", name : "떡볶이과자", taste:["단맛","매운맛"], category:"과자",category2:"일반"},
        {id:10, description: "단짠단짠의 환상의 비율 감자칩", name : "포카칩 초록색", taste:["단맛","짠맛","바삭함"], category:"과자",category2:"일반"},
        {
            "id": 11,
            "description": "담백하고 바삭한 맛이 특징인 과자",
            "name": "카라멜콘",
            "taste": ["바삭한", "담백한"],
            "category": "과자",category2:"일반"
            
          },
          {
            "id": 12,
            "description": "달콤하고 고소한 맛이 일품인 과자",
            "name": "코코볼",
            "taste": ["단맛", "고소한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 13,
            "description": "신선한 과일 향과 맛을 갖춘 과자",
            "name": "과일칩",
            "taste": ["과일"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 14,
            "description": "바삭하고 짭짤한 맛이 일품인 과자",
            "name": "스낵과자",
            "taste": ["짠맛", "바삭한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 15,
            "description": "고소한 크래커에 초콜릿을 코팅한 과자",
            "name": "초콜릿 크래커",
            "taste": ["고소한", "초콜릿"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 16,
            "description": "달콤하고 바삭한 식감의 스낵",
            "name": "허니버터칩",
            "taste": ["단맛", "바삭한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 17,
            "description": "고소하고 촉촉한 맛이 일품인 과자",
            "name": "마늘깡",
            "taste": ["고소한", "촉촉한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 18,
            "description": "달콤한 맛과 고소한 식감이 일품인 과자",
            "name": "프레첼",
            "taste": ["단맛", "고소한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 19,
            "description": "고소하고 바삭한 식감의 과자",
            "name": "감자깡",
            "taste": ["고소한", "바삭한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 20,
            "description": "달콤하고 고소한 맛이 일품인 과자",
            "name": "오징어땅콩",
            "taste": ["단맛","짠맛", "고소한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 21,
            "description": "상큼한 과일 향과 맛을 갖춘 과자",
            "name": "과일젤리",
            "taste": ["단맛", "신맛"],
            "category": "과자",category2:"사탕/젤리"
          },
          {
            "id": 22,
            "description": "짭짤한 감칠맛과 바삭한 식감이 일품인 과자",
            "name": "치토스",
            "taste": ["짠맛", "바삭한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 23,
            "description": "달콤하고 부드러운 식감이 일품인 과자",
            "name": "소프트쿠키",
            "taste": ["단맛", "부드러운"],
            "category": "과자",category2:"빵/디저트"
          },
          {
            "id": 24,
            "description": "바삭하고 고소한 식감의 과자",
            "name": "프레즐",
            "taste": ["바삭한", "고소한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 25,
            "description": "담백하고 고소한 맛이 일품인 과자",
            "name": "김밥깡",
            "taste": ["고소한", "담백한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 26,
            "description": "짭짤하고 바삭한 식감이 특징인 과자",
            "name": "맛동산",
            "taste": ["짠맛", "바삭한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 27,
            "description": "달콤하고 고소한 식감의 스낵",
            "name": "아몬드슬라이스",
            "taste": ["단맛", "고소한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 28,
            "description": "상큼하고 달콤한 맛이 일품인 과자",
            "name": "레몬쿠키",
            "taste": ["단맛", "신맛"],
            "category": "과자",category2:"빵/디저트"
          },
          {
            "id": 29,
            "description": "바삭하고 고소한 식감의 과자",
            "name": "땅콩과자",
            "taste": ["고소한", "바삭한"],
            "category": "과자",category2:"일반"
          },
          {
            "id": 30,
            "description": "달콤한 맛과 고소한 식감이 일품인 과자",
            "name": "치즈스틱",
            "taste": ["단맛", "고소한"],
            "category": "과자",category2:"일반"
          },
            {
              "id": 30,
              "description": "리그베릿 12년",
              "name": "Lagavulin 12 Year Old",
              "taste": ["짠맛", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 31,
              "description": "아르베클라 10년",
              "name": "Ardbeg 10 Year Old",
              "taste": ["신맛", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 32,
              "description": "글렌피딕 18년",
              "name": "Glenfiddich 18 Year Old",
              "taste": ["고소한", "부드러운"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 33,
              "description": "맥날트 15년 트리플 캐스크",
              "name": "Macallan 15 Year Old Triple Cask",
              "taste": ["부드러운", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 34,
              "description": "라플로이그 10년",
              "name": "Laphroaig 10 Year Old",
              "taste": ["짠맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 35,
              "description": "하이랜더 12년",
              "name": "Highlander 12 Year Old",
              "taste": ["고소한", "부드러운"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 36,
              "description": "토마틴 15년",
              "name": "Tomatin 15 Year Old",
              "taste": ["고소한", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 37,
              "description": "바울타인 라쉬니스 18년",
              "name": "Balvenie Laphroaig 18 Year Old",
              "taste": ["짠맛", "부드러운"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 38,
              "description": "로열로한 라라스 12년",
              "name": "Royal Lochnagar 12 Year Old",
              "taste": ["깔끔한", "신맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 39,
              "description": "글렌들라치 12년",
              "name": "GlenDronach 12 Year Old",
              "taste": ["고소한", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 40,
              "description": "라그무어 16년",
              "name": "Lagavulin 16 Year Old",
              "taste": ["짠맛", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 41,
              "description": "아발라워 12년",
              "name": "Aberlour 12 Year Old",
              "taste": ["신맛", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 42,
              "description": "글렌모랑지 18년",
              "name": "Glenmorangie 18 Year Old",
              "taste": ["고소한", "부드러운"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 43,
              "description": "매콬 12년",
              "name": "Macallan 12 Year Old",
              "taste": ["부드러운", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 44,
              "description": "라플로이그 쿼터캐스크",
              "name": "Laphroaig Quarter Cask",
              "taste": ["짠맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 45,
              "description": "하이랜더 15년",
              "name": "Highlander 15 Year Old",
              "taste": ["고소한", "부드러운"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 46,
              "description": "토마틴 18년",
              "name": "Tomatin 18 Year Old",
              "taste": ["고소한", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 47,
              "description": "바울타인 라쉬니스 21년",
              "name": "Balvenie Laphroaig 21 Year Old",
              "taste": ["짠맛", "부드러운"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 48,
              "description": "로열로한 라라스 16년",
              "name": "Royal Lochnagar 16 Year Old",
              "taste": ["신맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 49,
              "description": "글렌들라치 15년",
              "name": "GlenDronach 15 Year Old",
              "taste": ["고소한", "단맛"],
              "category": "위스키",category2:"일반"
            },
            {
              "id": 50,
              "description": "라그무어 18년",
              "name": "Lagavulin 18 Year Old",
              "taste": ["짠맛", "단맛"],
              "category": "위스키",category2:"일반"
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
            
            // if(tasteList.length === 0){
            //     a.push(v);
            //     return a;
            // }

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
                                    <img src="https://placehold.co/100x100" style={{width:"100%"}}/>
                                    <ul style={{padding:"30px 0px"}}>
                                        <li style={{textAlign:"left", marginLeft:"10px", marginBottom:"5px"}}>
                                            상품명 : {ele.name}
                                        </li>
                                        <li style={{textAlign:"left", marginLeft:"10px"}}>
                                            상품상세  : {ele.description}
                                        </li>
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
                                    <img src="https://placehold.co/100x100"/>
                                </div>
                                <ul>
                                    <li>{ele.name}</li>
                                    <li>{ele.description}</li>
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