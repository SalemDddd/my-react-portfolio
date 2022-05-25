import React from "react";
import Styles2 from './info.module.scss'
import githubImg from '../../../assets/Github.svg'
import vkImg from '../../../assets/vk.svg'
import telegramImg from '../../../assets/telegram.svg'
import instagramImg from '../../../assets/instagram.svg'
import youtubeImg from '../../../assets/youtube.svg'
import avatar from '../../../assets/avatar.png'


let Info = () =>
{ 
    let goToMyVk = () =>
    {
        window.location.href = 'https://vk.com/your_pilotka'
    }
    let goToMyGit = () =>
    {
        window.location.href = 'https://github.com/SalemDddd'
    }
 return(    
     <div className={Styles2.center}>
 <div className={Styles2.profile}>
    <img 
    src={avatar} />
    <h1>Alexandr Seredkin</h1>
    <p>I'm Frontend-developer</p>
    <div>
        <img src={instagramImg} onClick={goToMyGit}/>
        <img src={youtubeImg} onClick={goToMyGit}/>
        <img src={githubImg} onClick={goToMyGit}/>
        <img src={telegramImg} onClick={goToMyGit}/>
        <img src={vkImg} onClick={goToMyVk}/>
    </div>
    <button>Написать</button>
    </div>
    </div>)
}

export default Info