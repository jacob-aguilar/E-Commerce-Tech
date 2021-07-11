import React , { useState, useEffect } from 'react'
import { ProductsList } from '../detail/ProductsList'
import { ProductsCard } from '../detail/ProductsCard'
import {useSelector} from 'react-redux'
import { FooterBootstrap } from './FooterBootstrap'
import { CarouselBootstrap } from './CarouselBootstrap'
import { SpaceBoostrap } from './SpaceBoostrap'
import { DetailScreen } from '../detail/DetailScreen'



export const ComputerScreen = () => {

    const {active} = useSelector( state => state.products);
    console.log(active);

    return (
        <div>
            <main>
             {/* <ProductsList/> */}
            <ProductsCard/>
            <CarouselBootstrap/>
            <DetailScreen/>
            <SpaceBoostrap/>
            <FooterBootstrap/>
            </main>
        </div>

    )
}
