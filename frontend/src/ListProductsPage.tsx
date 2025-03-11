import React from "react";
import { Container } from "@mui/material";
import FilterSortForm from "./components/FilterSortForm";
import ProductTable from "./components/ProductTable";
import useProducts from "./hooks/useProducts";

const ListProductsPage: React.FC = () => {
  const { products, filters, setFilters, deleteProduct } = useProducts({
    sortBy: "",
    search: "",
  });

  // TODO: Improve UX by adding a function like debounce
  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  return (
    <Container>
      <FilterSortForm
        filter={filters}
        handleFilterChange={handleFilterChange}
      />
      <ProductTable
        products={products}
        handleDeleteProduct={handleDeleteProduct}
      />
    </Container>
  );
};

export default ListProductsPage;
