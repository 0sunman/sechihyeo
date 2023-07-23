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
          Text={"뜨거운 날씨와 여름 비 소식으로 가늠할 수 없다면 주목하세요. 다양한 아이템을 최대 88% 할인율로 준비했습니다. 시원한 쇼핑을 위한 12% 쿠폰도 놓치지 마세요."}
          Content={<div className={customStyle.custom2} >
            <p>WELECOME TO</p>
            <h2>15%</h2>
            <span>SECHIHYEO</span>
          </div>}/>
          <BannerComponent 
          Title={"완벽한 바캉스 보낼 준비"}
          Text={"뜨거운 날씨와 여름 비 소식으로 가늠할 수 없다면 주목하세요. 다양한 아이템을 최대 88% 할인율로 준비했습니다. 시원한 쇼핑을 위한 12% 쿠폰도 놓치지 마세요."}
          Content={<div className={customStyle.custom1} >
            <span>SECHIHYEO</span>
            <h2>15%</h2>
            <p>SUMMER VACANCE</p>
          </div>}/>

<div style={{marginBottom:"100px"}}></div>
        <BottomComponent/>

      </main>
    </>
  )
}
