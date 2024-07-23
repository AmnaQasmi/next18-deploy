import Product from './Product';


export default function ProductPage() {
  const product = {
    _id: '1',
    title: 'Product Title',
    price: '$100',
    description: 'Product Description',
    image: '/path/to/image.jpg',
    category: {
      name: 'Category Name',
    },
  };

  return (
    <div className='product-page'>
      <Product product={product} />
    </div>
  );
}
