import React from "react";
import { Pagination, PaginationItem, Box, Typography } from "@mui/material";
import { useApp } from "@/app/context/AppContext";

const CustomPagination: React.FC = () => {
  const { pagination, setPage } = useApp();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startItem = (pagination.currentPage - 1) * pagination.itemsPerPage + 1;
  const endItem = Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
      <Pagination
        count={Math.ceil(pagination.totalItems / pagination.itemsPerPage)}
        page={pagination.currentPage}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              color: "white",
              backgroundColor: "#141014",
              borderRadius: "8px",
              border: item.page === pagination.currentPage ? "2px solid #FF00FF" : "none", // Pink outline for selected page
              "&.Mui-selected": {
                backgroundColor: "#141014",
                color: "white",
              },
              "&:hover": {
                backgroundColor: "#1E1E1E",
              },
            }}
          />
        )}
      />
      <Typography sx={{ color: "white", fontSize: "14px" }}>
        Showing {startItem} to {endItem} of {pagination.totalItems} models
      </Typography>
    </Box>
  );
};

export default CustomPagination;
