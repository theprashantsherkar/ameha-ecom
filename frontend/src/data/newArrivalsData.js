import allProducts from './allProducts';

const newArrivals = allProducts.filter(p => p.tags.includes("new"));
export default newArrivals;


