import './styles.css'
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import * as productService from '../../../services/product-service';
import { useEffect, useState } from 'react';
import type { ProductDTO } from '../../../models/product';
import type { CategoryDTO } from '../../../models/category';

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const objTest : CategoryDTO = {
    id: 8,
    name: "Jardinagem"
  }

  useEffect(() => {

    localStorage.setItem("minhaCategoria", JSON.stringify(objTest)); //envia o objTest para o LocalStorage

    const obj = JSON.parse(localStorage.getItem("minhaCategoria") || "{}"); //pega o obj do LocalStorage e imprime no console com o console.log
    console.log(obj);

    productService.findAll()
    .then(response => {
      setProducts(response.data.content);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

               {
                products.map(
                   product => <CatalogCard key={product.id} product={product} />
                )
              }
          </div>

          <ButtonNextPage />
       </section>
  </main>
  );
}