import React from "react";
import { Container } from "@mui/material";
import FilterSortForm from "./components/FilterSortForm";
import ProductTable, { Product } from "./components/ProductTable";
import { Filters } from "./hooks/useProducts";

interface ListProps {
  products: Product[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
  deleteProduct: (id: number) => void;
}

const ListProductsPage: React.FC<ListProps> = ({
  products,
  filters,
  setFilters,
  deleteProduct,
}) => {
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
