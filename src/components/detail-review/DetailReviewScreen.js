//Donde se detalla el producto al darle clicks.
import React, { useEffect, useState } from 'react'
import { Commentary } from '../commentary/Commentary';
import {DetailScreen} from '../detail/DetailScreen'


export const DetailReviewScreen = ({history}) => {

  console.log(history);
  
  return (
    
      <div>

      <DetailScreen history={history}/>
      <Commentary/>
      
      </div>   
  )
}
