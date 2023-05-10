import { useFilter } from '../context/filterContext';

export function useFilters() {
  const { filters, setFilters } = useFilter();
  console.log(filters);

  const filterProduct = products => {
    return products.filter(product => {
      const isPriceMatched = product.price >= filters.minPrice;
      const isCategoryMatched =
        filters.category === 'all' || product.category === filters.category;
      const isTitleMatched =
        filters.title !== null
          ? product.title.toLowerCase().includes(filters.title.toLowerCase())
          : true;

      return isPriceMatched && isCategoryMatched && isTitleMatched;
    });
  };
  return { filters, setFilters, filterProduct };
}
