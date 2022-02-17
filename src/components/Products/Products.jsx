import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d95c81c3-895d-4206-87ea-3c239fa9faa7/run-swift-2-road-running-shoes-Pl8gq3.png'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://images.macrumors.com/t/PJemPEph0tylNgWFGNZ8o-JjfcI=/2769x/article-new/2013/09/16-inch-macbook-pro.jpg'},
];

const Products = () => {
    return(
        <main>
           <Grid container justify="center" spacing={4}> 
               {products.map((product) => (
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product} />
                   </Grid>
               ))}
           </Grid>
        </main>
    );
} 

export default Products;