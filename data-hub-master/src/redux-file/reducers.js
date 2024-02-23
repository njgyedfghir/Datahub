// reducers.js
const initialState = {
  itemsData: [
    { id: 1, name: 'Item 1', region: 'Addis Ababa', dataType: 'Economy', year: 2021 },
    { id: 2, name: 'Item 2', region: 'Oromia', dataType: 'Infrastructure', year: 2020 },
    // ... more items
  ],
  searchTerm: '',
  isFilterVisible: false,
  filters: {
    regionFilter: 'All',
    dataTypeFilter: 'All',
    startYearFilter: 'All',
    endYearFilter: 'All',
  },
  filteredItems: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };

    case 'TOGGLE_FILTER_VISIBILITY':
      return {
        ...state,
        isFilterVisible: !state.isFilterVisible,
      };

    case 'SET_REGION_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          regionFilter: action.payload,
        },
      };

    case 'SET_DATA_TYPE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          dataTypeFilter: action.payload,
        },
      };

    case 'SET_START_YEAR_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          startYearFilter: action.payload,
        },
      };

    case 'SET_END_YEAR_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          endYearFilter: action.payload,
        },
      };

    case 'APPLY_FILTERS':
      const filteredData = state.itemsData.filter((item) => {
        const regionMatch = state.filters.regionFilter === 'All' || item.region === state.filters.regionFilter;
        const dataTypeMatch =
          state.filters.dataTypeFilter === 'All' || item.dataType === state.filters.dataTypeFilter;
        const yearMatch =
          state.filters.startYearFilter === 'All' || state.filters.endYearFilter === 'All'
            ? true
            : item.year >= parseInt(state.filters.startYearFilter, 10) &&
              item.year <= parseInt(state.filters.endYearFilter, 10);

        return regionMatch && dataTypeMatch && yearMatch;
      });

      return {
        ...state,
        filteredItems: filteredData,
      };

    default:
      return state;
  }
};

export default rootReducer;
