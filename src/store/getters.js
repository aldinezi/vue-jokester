export default {
  jokes: state => state.jokes,
  categories: state => state.categories,
  selectedCategory: state => state.selectedCategory,
  loading: state => state.loading,
  favorites: state => state.favorites,
  theme: state => state.theme,
  isDarkMode: state => state.theme === 'dark',
};
