// src/app/product/[car]/[slug]/page.js

export async function generateMetadata({ params }) {
  // Example: Fetch data based on slug
  const response = await fetch(`/products/${params.slug}`);
  const product = await response.json();

  return {
    title: product.name,
    description: product.description,
  };
}

const BlogPost = async ({ params }) => {
  const { slug } = params;

  // Fetch product data based on slug
  const response = await fetch(`/product/${slug}`);
  const product = await response.json();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default BlogPost;