import React from 'react'
import { Link, NavLink, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';


export const Navbar = () => {

    const dispatch = useDispatch();
// const { name } = useSelector( state => state.auth );

    const hanleLogout = () => {
    dispatch( startLogout() )
}

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
                
                </div>
            </div>

            <div className="navbar-collapse  w-12 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <form className="form-inline my-2 my-lg-0" >
                         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                         <button className="btn btn-primary" type="submit">Search</button>

                            <div className="ml-1"></div>
                         
                     </form>
                     <button type="button" class="btn btn-outline-primary">
                     <Link 
                      to="/auth/login"
                    >
                      Sing in
                    </Link>
                    </button>
                    <button type="button" class="btn btn-outline-primary" onClick={hanleLogout}><Link 
                      to="/auth/login"
                    >
                      Logout
                    </Link></button>
                    
                </ul>
            </div>

        </nav>
    )
}