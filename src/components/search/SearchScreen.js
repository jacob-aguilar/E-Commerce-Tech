export const SearchScreen = ({ searchQuery, setSearchQuery }) => {    
    
    return (        
        <>        
           <div className="container-search">
                    <form action="/" className="form-inline" method="get">
                        <input 
                            type="text"
                            placeholder="Search"
                            className="form-control col-3 mr-sm-2"
                            name="searchText"
                            autoComplete="off"
                            placeholder="Search"
                            maxLength="25" 
                            aria-label="Search"
                            value={ searchQuery }
                            onInput={e => setSearchQuery(e.target.value)}
                            />

                        {/* <button
                            type="submit"
                            className="btn m-1 btn-block btn-primary col-1 mr-sm-2">Search
                        </button> */}
                    </form>
            </div>
        </>
    )}



