import {useState} from 'react'

export const ItemCount = ({onAdd}) => {
    const [counter, setCounter] = useState(1)

    let handleSuma = () => {
      if (counter < 5) {
        setCounter(counter + 1)
      }
        
    }

    let handleResta = () => {
      if (counter > 1) {
        setCounter(counter - 1)
      }
        
    }

    const handleAddToCart = () => {
      onAdd(counter)
    }

  return (
    <div className="d-flex gap-3">
      
      <button onClick = {handleSuma}> + 1 </button>

      <p> Cantidad: {counter}</p>

      <button onClick = {handleResta}> - 1 </button>

      <button onClick= {handleAddToCart}> Agregar al carrito </button>
    </div>
  )
}


