"use client";
import { useResponsive } from "@bytebank/context";

import {
  Box,
  Typography,
  Pagination,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditingId,
  deleteTransaction,
  selectEditingId,
} from "@bytebank/redux/src/features/transactions";
import FormModal from "@bytebank/components/src/FormModal";
import EditButton from "@bytebank/components/src/EditButton";
import StatementItem from "@bytebank/components/src/StatementItem";
import FilterButton from "@bytebank/components/src/FilterButton";

export default function Statement() {
  const { isMobile, isDesktop } = useResponsive();
  const dispatch = useDispatch();
  const editingId = useSelector(selectEditingId);

  const transactions = useSelector(
    (state: {
      transactions: {
        transactions: {
          id: string;
          date: string;
          type: string;
          value: number;
        }[];
      };
    }) => state.transactions.transactions
  );

  // Estados de edição, exclusão, modal, filtros e paginação
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({ month: "", transactionType: "" });
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const optionsRowsPerPage = [5, 8, 10, 20];

  // Paginação
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event: { target: { value: number } }) => {
    const value = Number(event.target.value);
    setRowsPerPage(value);
    setPage(1);
  };

  // Filtros
  const filteredTransactions = useMemo(() => {
    const monthQuery = (filters.month || "").trim().toLowerCase();

    return transactions.filter((t) => {
      const date = new Date(t.date);
      const monthLongPt = date
        .toLocaleDateString("pt-BR", { month: "long" })
        .toLowerCase();
      const matchMonth = !monthQuery || monthLongPt.includes(monthQuery);
      const matchType =
        !filters.transactionType || t.type === filters.transactionType;
      return matchMonth && matchType;
    });
  }, [transactions, filters.month, filters.transactionType]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTransactions.length / rowsPerPage)
  );

  const paginated = useMemo(() => {
    const currentPage = Math.min(Math.max(page, 1), totalPages);
    const start = (currentPage - 1) * rowsPerPage;
    return filteredTransactions.slice(start, start + rowsPerPage);
  }, [filteredTransactions, page, rowsPerPage, totalPages]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
    if (page < 1) setPage(1);
  }, [page, totalPages]);

  // Handlers dos modos
  const handleEditMode = () => {
    setEditMode((prev) => !prev);
    setDeleteMode(false);
    dispatch(setEditingId(null));
  };

  const handleDeleteMode = () => {
    setDeleteMode((prev) => !prev);
    setEditMode(false);
    dispatch(setEditingId(null));
  };

  const handleItemClick = (id: string) => {
    if (editMode) {
      dispatch(setEditingId(id));
      if (!isDesktop) setOpen(true);
    }
    if (deleteMode) {
      dispatch(deleteTransaction(id));
    }
  };

  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    dispatch(setEditingId(null));
  };

  return (
    <Box
      sx={{
        width: isDesktop ? "282px" : isMobile ? "312px" : "600px",
        minHeight: isDesktop ? "512px" : "480px",
        height: "100%",
        mt: isDesktop ? 3 : 6,
        borderRadius: "8px",
        backgroundColor: "var(--primaryTextColor)",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* Cabeçalho */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          m: 3,
          width: "240px",
          alignSelf: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "25px" }}>
          Extrato
        </Typography>

        <Box sx={{ display: "flex" }}>
          <FilterButton
            initialFilters={filters}
            onChange={(f) => {
              setFilters(f);
              setPage(1);
            }}
            onApply={(f) => {
              setFilters(f);
              setPage(1);
            }}
          />
          <span onClick={handleEditMode}>
            <EditButton type="edit" editing={editMode} />
          </span>
          <span onClick={handleDeleteMode}>
            <EditButton type="delete" editing={deleteMode} />
          </span>
        </Box>
      </Box>

      {/* Lista com scroll vertical */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          maxHeight: isDesktop ? 420 : 380,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 1,
          width: "100%",
        }}
      >
        {paginated.map((item, index) => (
          <StatementItem
            key={item.id || index}
            id={item.id}
            date={item.date}
            type={item.type}
            value={item.value}
            isClickable={editMode || deleteMode}
            isSelected={editingId === item.id && editMode}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </Box>

      {/* Rodapé */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        py={1}
        px={2}
      >
        <FormControl size="small" sx={{ minWidth: 100 }}>
          <InputLabel id="rows-per-page-label">itens / página</InputLabel>
          <Select
            labelId="rows-per-page-label"
            label="Itens por página"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            {optionsRowsPerPage.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          size="small"
          sx={{
            "& .MuiPaginationItem-root": { color: "var(--thirdTextColor)" },
            "& .MuiPaginationItem-icon, & .MuiPaginationItem-ellipsis": {
              color: "var(--thirdTextColor)",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "var(--primaryColor)",
              color: "var(--primaryTextColor)",
            },
            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "var(--primaryColor)",
              opacity: 0.9,
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
        />
      </Stack>

      <FormModal open={open} onClose={closeModal} />
    </Box>
  );
}
