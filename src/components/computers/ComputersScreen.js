import React, { useEffect, useState, useSelector } from 'react'
import { db } from '../../firebase/firebase-config';
import { ComputersCard } from './ComputersCard';
import {FooterBootstrap} from './FooterBootstrap'


export const ComputersScreen = ({ history }) => {

       const handleReturn = () => {

        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }


    const [data, setData] = useState([]);
    

    const getComputer = async () => {

        const computersSnap = await db.collection(`computers`).orderBy('calification', 'desc').get();
        const computers = [];

        computersSnap.forEach(snapHijo => {
            computers.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(computers)
        setData(computers)

        

    }
  
    
    useEffect(() => {
        getComputer();
    }, []);



    return (
    <>
        <div class="container">        
            { 
                data.map(libro => (
                    <ComputersCard
                        key={libro.id}
                        {...libro}
                    />
                ))
            }
        </div>

        <div className="div-space">
        
        </div>
        
        <FooterBootstrap/>
    </>
    

    )
}
