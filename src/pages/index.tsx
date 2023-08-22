import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BottomComponent from '@/Component/Bottom'
import HeaderComponent from '@/Component/Header'
import BannerComponent from '@/Component/BannerComponent'
import customStyle from "../Component/Custom/custom1.module.css"
import MiniBannerComponent from '@/Component/MiniBannerComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <main style={{paddingTop:"51px"}}>
        <MiniBannerComponent Content={"FIND YOUR TASTE"} isArrow={true}/>
        <MiniBannerComponent Content={"24H"}/>
        <MiniBannerComponent Content={"CHASE TRENDS"} isArrow={true}/>
        <MiniBannerComponent Content={"EVERYTIME"} Align={"right"}/>
        <MiniBannerComponent Content={"FOR YOU"} Align={"right"}/>
        <MiniBannerComponent Content={"SECHIHYEO"} Align={"right"}/>
          <BannerComponent 
          Title={"원하는 맛을 찾아보세요"}
          Text={"새로운 경험과 향연을 원하는 맛을 찾아보세요! 다양한 맛으로 여러분을 매료시킬 준비가 되어 있습니다. 우리와 함께 특별한 맛의 세계로 떠나보세요!"}
          Content={<div className={customStyle.custom2} >
            <p>WELECOME TO</p>
            <h2>15%</h2>
            <span>SECHIHYEO</span>
          </div>}/>
          <BannerComponent
            imgUrl={"url(/image/main/11.png)"}
            Title={"황금색 감자튀김의 맛있는 유혹"}
            Text={"바삭한 겉은 입안에서 살살 녹아내리고, 부드럽고 달콤한 감자 속은 어느새 두 번 다시 찾게 될 맛있는 유혹으로 여러분을 초대합니다."}
            />

          <BannerComponent 
          Title={"완벽한 바캉스 보낼 준비"}
          Text={"뜨거운 날씨와 여름 비 소식으로 가늠할 수 없다면 주목하세요. 다양한 아이템을 최대 88% 할인율로 준비했습니다. 시원한 쇼핑을 위한 12% 쿠폰도 놓치지 마세요."}
          Content={<div className={customStyle.custom1} >
            <span>SECHIHYEO</span>
            <h2>15%</h2>
            <p>SUMMER VACANCE</p>
          </div>}/>
          <BannerComponent
            imgUrl={"url(/image/main/13.jpg)"}
            Title={"입맛을 사로잡는 떡볶이"}
            Text={"입안 가득 퍼지는 풍부한 양념의 균형과 쫄깃한 떡의 신선함이 만났을 때, 특별한 순간을 위한 특별한 맛, 지금 경험해보세요!"}
            />
            

<div style={{marginBottom:"100px"}}></div>
        <BottomComponent/>

      </main>
    </>
  )
}
