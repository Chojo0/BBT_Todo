import { useEffect } from "react";
import { useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore';
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    const[item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

      const doctRef = doc(db, 'productos', id);
      getDoc(doctRef).then((resp) => {
        setItem(
          { ...resp.data(), id: resp.id}
        )
      })

    }, [id])
    
  return (
      <div className="productsDetail">
        {item  && <ItemDetail item={item}/>}
      </div>
  )
}

export default ItemDetailContainer