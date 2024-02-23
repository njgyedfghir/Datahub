// actions.js
export const setSearchTerm = (term) => {
  return {
    type: 'SET_SEARCH_TERM',
    payload: term,
  };
};

export const toggleFilterVisibility = () => {
  return {
    type: 'TOGGLE_FILTER_VISIBILITY',
  };
};

export const setRegionFilter = (region) => {
  return {
    type: 'SET_REGION_FILTER',
    payload: region,
  };
};

export const setDataTypeFilter = (dataType) => {
  return {
    type: 'SET_DATA_TYPE_FILTER',
    payload: dataType,
  };
};

export const setStartYearFilter = (startYear) => {
  return {
    type: 'SET_START_YEAR_FILTER',
    payload: startYear,
  };
};

export const setEndYearFilter = (endYear) => {
  return {
    type: 'SET_END_YEAR_FILTER',
    payload: endYear,
  };
};

export const applyFilters = () => {
  return {
    type: 'APPLY_FILTERS',
  };
};
