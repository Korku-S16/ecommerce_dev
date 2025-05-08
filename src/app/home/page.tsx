import Carousel from "@/app/home/component/carousel";
import Category from "@/app/home/component/category";
import Product from "@/components/ui/products";
import Popular from "@/components/ui/popular";

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
