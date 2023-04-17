import React, {useState} from 'react';
import Webcam from 'react-webcam';
import Draggable from 'react-draggable';
import {BsFillCameraVideoFill, BsFillCameraVideoOffFill} from 'react-icons/bs'
import s from './Header.module.scss'

const Header = () => {
    const [camera, setCamera] = useState(false)


    return (
     <>
    <header className={s.header}>
    <button 
     onClick={() => setCamera(!camera)}
     className={s.btn}>
     {camera ? 
     <BsFillCameraVideoFill fill='#fff' size={23}/> 
     : <BsFillCameraVideoOffFill fill='#fff' size={23}/>}
     </button>
     </header>

     {
        camera ? <Draggable>
            <Webcam
        className={s.camera}
        audio={false}
        width={300}
        height={300}
        videoConstraints={{
            width: 300,
            height: 300,
            facingMode: "user"
        }} />
        </Draggable>
        
      : null
     }
    </>

    );
};

export default Header;