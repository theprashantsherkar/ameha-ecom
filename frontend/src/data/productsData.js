import allProducts from './allProducts';

const products = allProducts.filter(p => !p.tags.includes("new") && !p.tags.includes("bestseller"));
export default products;

