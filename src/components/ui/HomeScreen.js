import React from 'react'
import { CarouselBootstrap } from '../computers/CarouselBootstrap';
import { SpaceBoostrap } from '../computers/SpaceBoostrap';
import { CarouselHome } from './CarouselHome'
import { FooterTransparent } from './FooterTransparent'

export const HomeScreen = ({history}) => {
    console.log(history);

    return (
        <div>
            <CarouselHome history={history}/>
            <CarouselBootstrap/>
            <SpaceBoostrap/>
            <FooterTransparent/>
        </div>
    )
}
