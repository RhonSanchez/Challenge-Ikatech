import { AppBar } from "./components/AppBar/AppBar";
import { AppFooter } from "./components/AppFooter";
import { CompleteLookProducts } from "./components/CompleteLookProducts";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { RecomendedProducts } from "./components/RecomendedProducts";

function App() {
  return (
    <>
      <AppBar />
      <hr />
      <main className="container">
        <ProductDetail />
        {/* <CompleteLookProducts />
        <RecomendedProducts /> */}
      </main>
      {/* <AppFooter /> */}
    </>
  );
}

export default App;
