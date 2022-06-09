import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemCount stock={5} onAdd={() => {}} initial={1}/>
        </>
)
}
export default ItemListContainer