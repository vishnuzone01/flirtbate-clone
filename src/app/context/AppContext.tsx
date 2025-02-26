"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContextType, Item, FilterState, PaginationState } from "./types";
import { data } from "../data";

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items] = useState<Item[]>(data);
  const [filters, setFiltersState] = useState<FilterState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 30,
  });
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  useEffect(() => {
    let newItems = items;

    if (filters.credits) {
      const [min, max] = filters.credits.split("-").map(Number);
      newItems = newItems.filter(
        (item) => item.credits >= min && item.credits <= max,
      );
    }

    if (filters.age) {
      const [min, max] = filters.age.split("-").map(Number);
      newItems = newItems.filter((item) => item.age >= min && item.age <= max);
    }

    if (filters.gender) {
      newItems = newItems.filter((item) => item.gender === filters.gender);
    }

    if (filters.status) {
      newItems = newItems.filter((item) => item.status === filters.status);
    }

    setFilteredItems(newItems);
    setPagination((prev) => ({
      ...prev,
      totalItems: newItems.length,
      currentPage: 1,
    }));
  }, [filters, items]);

  const setFilters = (newFilters: Partial<FilterState>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilteredItems(items)
  };

  const setPage = (page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  return (
    <AppContext.Provider
      value={{ items, filteredItems, filters, pagination, setFilters, setPage, resetFilters }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a AppContext");
  }
  return context;
};
