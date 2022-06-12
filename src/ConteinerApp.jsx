import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import App from './App'
import {scrollMoveAC} from './store/actionCreatores/scrollAC'

let AppConteiner = () =>
{
    const dispatch = useDispatch() 
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, true);
    }, []);
    let handleScroll = () => {
      let position =  window.scrollY / window.innerHeight
      dispatch(scrollMoveAC(position))
    };

    return (
        <App />
    )
}
export default AppConteiner