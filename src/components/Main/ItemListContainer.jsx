import { useState, useEffect } from 'react'
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [title, setTitle] = useState("Productos");
  const categoria = useParams().categoria;
 
  useEffect(() => {
    
    const productRef = collection(db, 'productos');

    const q = categoria ? query( productRef, where('categoria', '==', capitalizeFirstLetter(categoria)) ) : productRef

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return {...doc.data(), id: doc.id}
        })
      )
    })

    if (categoria) {
      setTitle(capitalizeFirstLetter(categoria));
    } else {
      setTitle("Productos");
    }

  }, [categoria])


  return (
    
    <div className='productos '>
        <ItemList productos={productos} title={title}/> 
    </div>
 
  )
}

export default ItemListContainer