import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import { getFirestore, doc, getDoc } from "Firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, "productos", pid);

    // reemplazo del Moc, con la BD de Firestore
    getDoc(queryDoc)
      .then((result) => setProduct({ id: result.id, ...result.data() }))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [pid]);

  return ( 
          <div className= "m-3">
            {isLoading ? 
                  <Loading /> 
                        : 
                  <ItemDetail {...product} />}
          </div>
          )
};
