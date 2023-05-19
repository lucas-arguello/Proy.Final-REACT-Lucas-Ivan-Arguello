import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import {getFirestore, collection, getDocs, query, where } from "Firebase/firestore"

export const ItemListContainer = memo(() => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoria } = useParams();

  //console.log(categoria)

  useEffect(() => {

    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore,"productos")
    const queryCollectionFiltered = !categoria ? 
                                          queryCollection 
                                          : 
                                          query(queryCollection, where("categoria", "==", categoria))  
    
                                          getDocs (queryCollectionFiltered)
                                              .then (resultado => setProductos(resultado.docs.map(producto => ({id: producto.id, ...producto.data()}))))
                                              .catch((err) => console.log(err))
                                              .finally(() => setIsLoading(false));
    
  }, [categoria]);

    return (
    <div className="row gap-4 m-3" >
            {isLoading ? 
      
                  ( <Loading /> ) 
                  : 
                  ( <ItemList productos={productos} /> ) 

            }

    </div>
            );
  })
