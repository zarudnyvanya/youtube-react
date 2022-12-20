import s from './SettingsPopup.module.scss'
import {useRef, useEffect, useState} from "react";


const SettingsPopup = ({ isOpen, setIsOpen }) => {

    return (
        <>
        <div className={s.overlay}  onClick={()=>setIsOpen(!isOpen)}></div>
                <div className={s.wrapper__popup}>
                    <h1 className={s.wrapper__title}>Имя</h1>
                    <form method='post' className={s.wrapper__info}>
                        <div className={s.info__block} >
                            <label className={s.info__label__content}>
                                <h2 className={s.info__title__content} >Имя</h2>
                                <div className={s.input__button}>
                                    <input type='text' className={s.info__content}
                                           value='Ladick'
                                           readOnly/>
                                    <div className={s.pencil}>
                                        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 24 24" width="24px" height="24px">
                                            <path
                                                d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"/>
                                        </svg>

                                    </div>
                                </div>
                            </label>

                            <button type='submit' className={s.submit_changes}>Сохранить
                            </button>
                        </div>
                    </form>
                </div>
        </>

)

}
// <div className={s.overlay}>

export default SettingsPopup