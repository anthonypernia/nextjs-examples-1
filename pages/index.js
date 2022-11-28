import React  from "react";
import ProductList from "@components/ProductList/ProductList";
const Home = () => {

    const [ productLists, setProductLists ] = React.useState([]);

    React.useEffect(() => {
        window.fetch("/api/avo")
        .then((res) => res.json())
        .then(({data, length}) => {
            setProductLists(data);
        })
    }, []);

    return (
        <div>
        <h1>Hola Aguacates!</h1>
        <ProductList products={ productLists }/>
        </div>
    );
};
export default Home;