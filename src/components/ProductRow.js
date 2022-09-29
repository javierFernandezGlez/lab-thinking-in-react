function ProductRow(props) {
    let inStock = props.product.inStock;
    let color = inStock ? "black":"red";

    if(props.checked) {
        if(inStock) {
            return(
                <tr>
                    <th scope="row">{props.product.name}</th>
                    <td>{props.product.price}</td>
                </tr>
            );
        }
    }
    else {
        return(
            <tr>
                <th scope="row" style={{color:color}}>{props.product.name}</th>
                <td>{props.product.price}</td>
            </tr>
        );
    }
    
}

export default ProductRow;