
import React from "react"
import ContentLoader from "react-content-loader"
import s from './CardVideo.module.scss'
const Skeleton = (props) => (

  
        <ContentLoader
            className={s.video__item__skeleton}
            speed={1}
            width={310}
            height={293}
            viewBox="0 0 341 293"
            backgroundColor="#454545"
            foregroundColor="#ae6737"
            {...props}
        >
            <rect x="0" y="16" rx="15" ry="15" width="341" height="193" />
            <circle cx="35" cy="245" r="30" />
            <rect x="85" y="220" rx="4" ry="4" width="230" height="18" />
            <rect x="85" y="250" rx="4" ry="4" width="132" height="18" />
        </ContentLoader>
)

export default Skeleton













