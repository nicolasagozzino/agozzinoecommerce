import { useEffect } from "react"
import { useState } from "react"
import asyncMock, { getProducByCategory } from "./asyncMock"
import productos from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const {categoryId} = useParams();
  
    useEffect(() => {
      if(!categoryId){
        asyncMock(0, productos)
        .then (resultado => {
          setItems(resultado)
        });
      }
      else{
        getProducByCategory(categoryId)
        .then (resultado => {
          setItems(resultado)
        });
      }
    }, [categoryId])
  
    return (
      <div className='cardList'>
        <ItemList productos={items}/>
      </div>
      
    )
  }

export default ItemListContainer














// {
//     const [items, setItems] = useState([])
 //    const {categoryId} = useParams()
// 
// //     useEffect(() => {
//         asyncMock(0, productos)
//         .then(resultado => setItems(resultado))
//     },[items])
// return (
//     <>
//         <ItemList productos= {items} /> 
//    </>
//)
//} 



