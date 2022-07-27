import React, {useEffect, useState} from 'react'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './Body.css'

const Body = () => {

    const [items,setitems] = useState([])

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')

        .then(res=>{
            console.log(res.data)

            setitems(res.data.categories)
        })
        
        .catch(err=>{
            console.log(err)
        })
    },[])

    if(items.idCategory === '1')
    {
        console.log("Hello")
    }

    const itemslist = items.map((obj)=>{

        return (
            <div className="col-md-4">
                <img src={obj.strCategoryThumb} className="img-fluid" />
                <p>{obj.strCategory}</p>
                <p>{obj.strCategoryDescription}</p>
            </div>
        )

    })

  return (
    <div>
        <div className="row">
            {itemslist}
        </div>
    </div>
  )
}

export default Body