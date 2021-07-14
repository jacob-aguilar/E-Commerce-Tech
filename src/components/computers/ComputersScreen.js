import React, { useEffect, useState, useSelector, useMemo} from 'react'
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase/firebase-config';
import { useForm } from '../../hooks/useForm';
import { ComputersCard } from './ComputersCard';
import {FooterBootstrap} from './FooterBootstrap'
import queryString from 'query-string';
import { SearchScreen } from '../search/SearchScreen';

export const ComputersScreen = ({ history }) => {

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

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filterComputers = (data, query) => {
    if (!query) {
        return data;
    }

    return data.filter((data) => {
        const dataName = data.name.toLowerCase();
        return dataName.includes(query);
    });
    };
  

    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredComputers = useMemo(() => filterComputers(data, searchQuery));
    // const filteredComputers = filterPosts(data, searchQuery);


    return (
    <>                   
                <SearchScreen
                 searchQuery={searchQuery}
                 setSearchQuery={setSearchQuery}
                />

        <div class="container">        
            { 
                filteredComputers.map(libro => (
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
