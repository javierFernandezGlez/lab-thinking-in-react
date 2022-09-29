import ProductRow from "./ProductRow";

function ProductsTable(props) {
    const products = props.productsToShow;
    return (
        <div>
            <table>
                <caption>Products</caption>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <ProductRow product={product} checked={props.checked}/>
                        
                    ))}
                </tbody>
            </table>
        </div>
        
    );
}

export default ProductsTable;