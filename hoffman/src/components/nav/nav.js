import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Nav = ({ history }) => {    
    const [merch, setMerch] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/merchandise')
        .then(res => {
            setMerch(res.data)
            console.log("res", res.data)
        })
        .catch(error => {
            console.log("error", error)
    })    
    }, [])

    // const Submit = () => {
    //     merch.map(data => {
    //         history.push(`/merchandise/${data.category}`)
    //     })
        
    // }


return (
    <div className="container">
            <h1 className="main_header">Hoffman House Antiques</h1>
            <input className="searchbar" placeholder="Search Now" type="search"></input><br></br>
                <div className="dropcontainer">                
                    {merch.map(cat => {
                        return  <div className='dropdown'> 
                                    <button onClick={() => history.push(`/merchandise/${cat.category}`)} className="dropbtn">{cat.category}</button>                                        
                                </div>
                    })}
                </div>
    </div>
    )
}

export default Nav