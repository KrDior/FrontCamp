// --- Post bootstrap -----
import React from 'react';
import withRoot from '../theme/withRoot';
import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductCTA from '../views/ProductCTA';
import NotFound from '../components/NotFound';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { errorInfo, error, hasError } = this.state;
    if (errorInfo || error || hasError) {
      // Error path
      return (
        <div>
          <NotFound />
        </div>
      );
    }
    // Normally, just render children
    return (
      <Index />
    );
  }
}

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

export default withRoot(ErrorBoundary);
