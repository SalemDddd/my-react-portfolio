import React from 'react'
import Style from "../About.module.scss";
import codes from '../../../../assets/code.svg'
import code2 from '../../../../assets/code2.svg'
import coffee from '../../../../assets/coffee.svg'
import night from '../../../../assets/night.svg'
import Fade from 'react-reveal/Fade';
import {useSelector , useDispatch} from 'react-redux'
import { useRef , useEffect , useState} from 'react';
import {coffeeAddAC, nightAddAC} from '../../../../store/actionCreatores/scrollAC'

let Content = () =>
{
    let [nights , setNights] = useState(0)
    let [projects , setProjects] = useState(0)
    let [coffeeCups , setcoffeeCups] = useState(0)
    let [code , setCode] = useState(0)
    let positionY = useSelector(state => state.scrollState.position.y)
    let nightadd , cupsAdding, codeadd, projectsadd;
    if ((positionY) && (positionY > 0.5))
    {
        if (coffeeCups < 5347)
        {
            const cupsAdding = setTimeout(() => {
                setcoffeeCups(prev => prev +3)
            },10)
        }
        if (nights < 3501)
        {
            const nightadd = setTimeout(() => {
                setNights(prev => prev +3)
            },10)
        }
        if (projects < 2)
        {
            const projectsadd = setTimeout(() => {
                setProjects(prev => prev +1)
            },10)
        }
        if (code <= 100)
        {
            const codeadd = setTimeout(() => {
                setCode(prev => prev +1)
            },10)
        }
        else
        {
            if (code > 100)
            {
                setCode(100)
            }
            if (projects > 2)
            {
                setCode(2)
            }
            clearTimeout(nightadd)
            clearTimeout(projectsadd)
            clearTimeout(codeadd)
            clearTimeout(cupsAdding)
        }
    }
    return(
        <div className={Style.achievements} >
            <Fade bottom>
        <div>
            <img src={codes} />
            <div className={Style.item}>
                <h1>{projects}</h1>
                <p>Projects completed</p>
            </div>
        </div>
        <div>
            <img src={coffee} />
            <div className={Style.item}>
                <h1>{coffeeCups}</h1>
                <p>Coffee cups</p>
            </div>
        </div>
        <div>
            <img src={night} />
            <div className={Style.item}>
                <h1>{nights}</h1>
                <p> Nights unslept </p>
            </div>
        </div>
        <div>
            <img src={code2} />
            <div className={Style.item}>
                <h1>{code}</h1>
                <p>% love for code</p>
            </div>
        </div>
        </Fade>
</div>
    )
}

export default Content