import ItemCount from "../../itemCount/ItemCount"


const ItemListContainer = () => {
  const onAdd = (cant)=>{
  console.log(`la cantidad es: ${cant}`)
  }
  return (
    <div>
      <h2>Este es el ItemListContainer</h2>
      <ItemCount initial={1} stock={15} onAdd={onAdd} />
    </div>
    
  )
}

export default ItemListContainer