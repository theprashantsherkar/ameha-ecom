import allProducts from './allProducts';

const bestsellers = allProducts.filter(p => p.tags.includes("bestseller"));
export default bestsellers;

