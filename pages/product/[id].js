import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
    const router = useRouter();
    const [ product, setProduct ] = React.useState({});
    const { id } = router.query;
    React.useEffect(() => {
        (id) && window.fetch(`/api/avo/${id}`)
        .then(response => response.json())
        .then(data => {
            setProduct(data);
        }
        );
    }, [id]);
    
    return (
        <div>
        <h1>Hola esto es un product item2 {id}</h1>
                <h2>{product?.name}</h2>
                <p>{product?.price}</p>
        </div>
    );
}
export default ProductItem;