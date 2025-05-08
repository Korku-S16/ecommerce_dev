import Carousel from "@/app/home/component/carousel";
import Category from "@/app/home/component/category";
import Product from "@/app/home/component/products";
import Popular from "@/app/home/component/popular";

const YourPage = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <Product />
      <Popular />
    </div>
  );
};

export default YourPage;
