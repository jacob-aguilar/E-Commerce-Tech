import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ComputerScreen } from '../components/computers/ComputerScreen'
import { DetailScreen} from '../components/detail/DetailScreen'
import {Navbar} from '../components/ui/Navbar'
import { DetailReviewScreen } from '../components/detail-review/DetailReviewScreen';

import { useDispatch } from 'react-redux';
import { ComputersScreen } from '../components/computers/ComputersScreen'
import { HomeScreen } from '../components/ui/HomeScreen'
import { PhoneScreen } from '../components/phones/PhoneScreen'

export const DashboardRoutes = () => {
    return (
        <>
          <Navbar/>  
        <div>
            <Switch>
                {/* <Route exact path ="/computers" component= { ComputerScreen }/> */}
                <Route exact path ="/detail/:detailId" component= { DetailScreen }/>
                <Route exact path ="/" component= { HomeScreen }/>
                <Route exact path="/computers" component= { ComputersScreen } />
                <Route path="/detail-review/:id" component= { DetailReviewScreen } />
                <Route exact path="/phones" component= { PhoneScreen } />
                <Redirect to="/"/>
            </Switch>
        </div>

        </>
    )
}
