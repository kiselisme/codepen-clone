import React, {useContext, useMemo} from 'react';
import {EditorContext} from '../../context/context'
import s from './Preview.module.scss'

const Preview = () => {
    const {html,css, js} = useContext(EditorContext)

    const document = useMemo(() => {
        if (!html && !css && !js) return
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <style> ${css} </style>
        </head>
        <body>
        ${html}
        <script> ${js}</script>
        </body>
        </html>
        `
    }, [html,css,js])
    return (
        <div className={s.content}>
            {
                document ? <iframe title="preview" className={s.preview } srcDoc={document}/>
                : <div className={s.loading}>Your code will be displayed here</div>
            }
        </div>
    );
};

export default Preview;