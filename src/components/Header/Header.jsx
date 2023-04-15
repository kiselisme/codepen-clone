import React, {useState} from 'react';
import {BsFillCameraVideoFill, BsFillCameraVideoOffFill} from 'react-icons/bs'
import s from './Header.module.scss'

const Header = () => {
    const [camera, setCamera] = useState(false)
    return (
   <header className={s.header}>
    <button 
    onClick={() => setCamera(!camera)}
    className={s.btn}>
     {camera ? 
     <BsFillCameraVideoFill fill='#fff' size={23}/> 
     : <BsFillCameraVideoOffFill fill='#fff' size={23}/>}
    </button>
   </header>
    );
};

export default Header;