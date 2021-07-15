//Donde se detalla el producto al darle clicks.
import React, { useEffect, useState } from 'react'
import { Commentary } from '../commentary/Commentary';
import { DetailPhoneScreen } from '../detail/DetailPhoneScreen';


export const DetailReviewPhone = ({history}) => {

  console.log(history);
  
  return (
    
      <div>

      <DetailPhoneScreen history={history}/>
      <Commentary/>
      
      </div>   
  )
}
