// Define types
export interface Item {
  id: string;
  firstName: string;
  lastName: string;
  credits: number;
  age: number;
  region: string;
  languages: Array<string>;
  gender: string;
  profileImage: string;
  bookmarked: boolean;
  status: string;
  flagUrl: string;
  tags?: string | null;
}

export interface FilterState {
  [key: string]: string | undefined;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface AppContextType {
  items: Item[];
  filteredItems: Item[];
  filters: FilterState;
  pagination: PaginationState;
  setFilters: (filters: Partial<FilterState>) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
}

export type Option = { value: string; label: string } | string;

export type OptionsType = Option[];