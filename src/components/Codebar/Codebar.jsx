import React from 'react';
import { useState } from 'react';
import HtmlEditor from './../Editor/HtmlEditor';
import CssEditor from './../Editor/CssEditor';
import JsEditor from './../Editor/JsEditor';
import s from './Codebar.module.scss'


const Codebar = () => {

    const [activeTab, setActiveTab] = useState('html')
    return (
        <div className={s.codebar}>
            <nav className={s.tab}>
                <button 
                onClick={() => setActiveTab('html')} 
                className={`${s.item} ${activeTab === 'html' ? s.activeTab : ''}`}>HTML</button>

                <button 
                onClick={() => setActiveTab('css')} 
                className={`${s.item} ${activeTab === 'css' ? s.activeTab : ''}`}>CSS</button>
                
                <button
                onClick={() => setActiveTab('js')} 
                className={`${s.item} ${activeTab === 'js' ? s.activeTab : ''}`}>JS</button>
            </nav>

            <div className={s.editor}>
                {activeTab === 'html' ? <HtmlEditor/>: null}
                {activeTab === 'css' ? <CssEditor/> : null}
                {activeTab === 'js' ? <JsEditor/> : null}
            </div>
        </div>
    );
};

export default Codebar;