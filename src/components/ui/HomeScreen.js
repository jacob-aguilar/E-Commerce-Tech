import React from 'react'
import { CarouselHome } from './CarouselHome'
import { FooterTransparent } from './FooterTransparent'

export const HomeScreen = ({history}) => {
    console.log(history);

    return (
        <div>
            <CarouselHome history={history}/>
            <FooterTransparent/>
        </div>
    )
}
