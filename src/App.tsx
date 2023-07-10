import { AppBar } from "./components/AppBar/AppBar";
import { AppFooter } from "./components/AppFooter/AppFooter";
import { CompleteLookProducts } from "./components/CompleteLookProducts/CompleteLookProducts";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { RecomendedProducts } from "./components/RecomendedProducts/RecomendedProducts";
import { Separator } from "./components/Separator/Separator";

function App() {
  return (
    <>
      <AppBar />
      <Separator />
      <main className="container">
        <ProductDetail />
        <CompleteLookProducts />
        <RecomendedProducts />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
