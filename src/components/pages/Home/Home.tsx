import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    
    const [repositories, setRepositories] = useState([])
    
    
    function repositorySearch(item: string) {
        console.log(item)
    }
    

    return (
        <div className="container">
           <div className="search-form">
                <form>
                    
                </form>
           </div>
           <div className="search-results">    
                <div className="user">
                    <div className="image">
                        
                    </div>
                </div>

           </div>
           {
            repositories.map((item) => {
                return(<div> {item} </div>)
            })
           }
        </div>
    )
};

export default Home;