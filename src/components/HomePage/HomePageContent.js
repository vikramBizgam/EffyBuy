import React, { Component } from 'react'
import FirstPannel from '../HomePAgeContent/FirstPannel'
import SecondPannel from '../HomePAgeContent/SecondPannel'
import ThirdPannel from '../HomePAgeContent/ThirdPannel'
import ForthPannel from '../HomePAgeContent/ForthPannel'
import FifthPannel from '../HomePAgeContent/FifthPannel'
import SixthPannel from '../HomePAgeContent/SixthPannel'
import SeventhPannel from '../HomePAgeContent/SeventhPannel'
import EighthPannel from '../HomePAgeContent/EighthPannel'
import Video from '../HomePAgeContent/Video'
import useDocumentTitle from '../useDocumentTitle'
import first_pannel_image from '../../assets/images/FirstPannel.png'



const HomePageContent = ()=> {
    // render() {
        useDocumentTitle("EffyBuy");
        return (
            <>
                <FirstPannel firstimg={first_pannel_image}/>
                <SecondPannel/>
                <ThirdPannel/>
                <Video/>
                <ForthPannel/>
                <FifthPannel/>
                <SeventhPannel/>
                <EighthPannel/>
                <SixthPannel/>
            </>
        )
    // }
}

export default HomePageContent
