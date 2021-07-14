import React, { useEffect, useState, useSelector } from 'react'
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase/firebase-config';
import { useForm } from '../../hooks/useForm';
import { PhonesCard } from '../phones/PhonesCard';
import {FooterBootstrap} from '../computers/FooterBootstrap'
import queryString from 'query-string';
import { SearchScreen } from '../search/SearchScreen';


export const PhoneScreen = ({ history }) => {

    const location = useLocation();
    // console.log(location.search);
    // console.log(queryString.parse( location.search ));
    const { q = '' } = queryString.parse( location.search );
    console.log(q);
    

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;


     const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
        history.push(`?q=${ searchText }`);
    }


    const [data, setData] = useState([]);
    

    const getPhones = async () => {

        const phonesSnap = await db.collection(`phones`).orderBy('calification', 'desc').get();
        const phones = [];

        phonesSnap.forEach(snapHijo => {
            phones.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(phones)
        setData(phones)

    }
  
    
    useEffect(() => {
        getPhones();
    }, []);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filterPhone = (data, query) => {
    if (!query) {
        return data;
    }

    return data.filter((data) => {
        const dataName = data.name.toLowerCase();
        return dataName.includes(query);
    });
    };
  

    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPhones = filterPhone(data, searchQuery);

    return (
            <>  
            <SearchScreen
             searchQuery={searchQuery}
             setSearchQuery={setSearchQuery}
            />

        <div class="container">        
            { 
                filteredPhones.map(libro => (
                    <PhonesCard
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
