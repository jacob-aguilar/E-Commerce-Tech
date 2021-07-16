import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { db} from '../../firebase/firebase-config'


export const Navbar = ({history}) => {

    const dispatch = useDispatch();
    const auth = useSelector( state => state.auth );
    

    console.log(history);

    const hanleLogout = () => {
    dispatch( startLogout() )
    }

    const handlelogin = () => {
        history.push('/auth/login/');
        }

    const citiesRef = db.collection("computers");
    console.log(citiesRef);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Appland E-Commerce
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                   
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/computers"
                    >Computers
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/phones"
                    >Phones
                    </NavLink>
                
                </div>
            </div>

            <div className="navbar-collapse  w-12 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    {/* <form className="form-inline my-2 my-lg-0" >
                         <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                         <button className="btn btn-primary" type="submit">Search</button>

                            <div className="ml-1"></div>
                         
                     </form> */}
                     {/* <button type="button" class="btn btn-outline-primary">
                     <Link 
                      to="/auth/login"
                    >
                      Sing in
                    </Link>
                    </button> */}
   
                    {
                     auth.uid
                    ? <div className="div-name">Hello, {auth.name}</div>
                    : <div className="div-name">Hey, join us</div>
                    }
                    {
                    auth.uid
                    ?  <a href="#" class="AddCart btn btn-info border-i" onClick={hanleLogout}>
                        <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
                        <Link 
                        to="/auth/login"
                        >
                        </Link></a>
                    : <a href="#" class="AddCart btn btn-info border-i" onClick={handlelogin}>
                        <i class="fa fa-user" aria-hidden="true"></i> Sign in
                        <Link 
                        to="/auth/login"
                        >
                        </Link>
                    </a>
                    }
                    
                </ul>
            </div>

        </nav>
    )
}