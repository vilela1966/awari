function List({items = []}) {

    const listaItens = items.map((item) => {
        return (
        <li id={item.id}>{item.name}</li>
        )
    });

    return(
        <div>
            {listaItens}
        </div>
    );
}

export default List;