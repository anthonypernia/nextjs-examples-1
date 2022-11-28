import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Link from 'next/link'

const mapProductsToCards = (products) => {
    return products.map(({ name, id, price, image }) => (
        <Link href={`/product/${id}`} key={id}>
        <Card >
        <Image src={ image } wrapped ui={false} width={333} height={333} />
        <Card.Content>
          <Card.Header>{ name }</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    { price }
                </Card.Content>
      </Card>
        </Link>
    ));
};


const ProductList = ({ products }) => (
<Card.Group itemsPerRow={3} stackable>
  {mapProductsToCards(products)}
</Card.Group>
)

export default ProductList;