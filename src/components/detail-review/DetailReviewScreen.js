//Donde se detalla el producto al darle clicks.
import React, { useEffect, useState } from 'react'
import {DetailScreen} from '../detail/DetailScreen'
import { Commentary } from './Commentary';


export const DetailReviewScreen = ({history}) => {

  console.log(history);
  
  return (
    
      <div>

      <DetailScreen history={history}/>
      <Commentary history={history}/>
      </div>   
  )
}
