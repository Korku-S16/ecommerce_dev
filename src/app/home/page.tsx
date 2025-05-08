import HeaderTop from "@/components/ui/HeaderTop";
import Carousel from "@/components/ui/carousel";
import Category from "@/components/ui/category";
import Product from "@/components/ui/products";
import Popular from "@/components/ui/popular";
import Footer from "@/components/ui/footer";

const YourPage = () => {
  return (
    <div>
      <HeaderTop />
      <Carousel />
      <Category />
      <Product />
      <Popular />
      <Footer />
    </div>
  );
};

export default YourPage;
