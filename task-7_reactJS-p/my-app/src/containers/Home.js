// --- Post bootstrap -----
import React from 'react';
import withRoot from '../theme/withRoot';
import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductCTA from '../views/ProductCTA';

function Index() {
  return (
    <>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductCTA />
      <ProductSmokingHero />
    </>
  );
}

export default withRoot(Index);
