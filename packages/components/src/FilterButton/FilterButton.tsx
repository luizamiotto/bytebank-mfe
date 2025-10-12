"use client";

import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  IconButton,
  Menu,
  Box,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  TextField,
  MenuItem,
  Divider,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

// FilterButton.tsx
interface FilterValues {
  month: string;
  transactionType: string;
}

interface FilterButtonProps {
  initialFilters?: FilterValues;
  onChange?: (filters: FilterValues) => void;
  onApply?: (filters: FilterValues) => void;
}

export default function FilterButton({
  initialFilters,
  onChange,
  onApply,
}: FilterButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const transactionTypes = useSelector(
    (state: { transactionTypes: { types: string[] } }) =>
      state.transactionTypes.types
  );

  const [filters, setFilters] = useState<FilterValues>({
    month: initialFilters?.month ?? "",
    transactionType: initialFilters?.transactionType ?? "",
  });

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  // Ao atualizar, sempre manter string
  const updateFilters = (next: Partial<FilterValues>) => {
    const merged: FilterValues = {
      month: next.month ?? filters.month ?? "",
      transactionType: next.transactionType ?? filters.transactionType ?? "",
    };
    setFilters(merged);
    onChange?.(merged);
  };

  const clearFilters = () => {
    const cleared: FilterValues = {
      month: "",
      transactionType: "",
    };
    setFilters(cleared);
    onChange?.(cleared);
  };

  const handleApply = () => {
    onApply?.(filters);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          backgroundColor: "var(--primaryColor)",
          color: "var(--primaryTextColor)",
          width: "40px",
          height: "40px",
          mr: 1,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "var(--primaryTextColor)",
            color: "var(--primaryColor)",
          },
        }}
        aria-label="Abrir filtros"
      >
        <FilterAltIcon sx={{ fontSize: 20 }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{ sx: { p: 2, width: 320 } }}
      >
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
            Filtros
          </Typography>
          <Divider />

          {/* Mês digitado */}
          <TextField
            size="small"
            label="Mês (ex.: Novembro)"
            placeholder="Digite o mês"
            value={filters.month ?? ""}
            onChange={(e) => updateFilters({ month: e.target.value })}
            fullWidth
          />

          {/* Tipo de transação */}
          <FormControl size="small" fullWidth>
            <InputLabel id="type-label">Tipo de Transação</InputLabel>
            <Select
              labelId="type-label"
              label="Tipo de Transação"
              value={filters.transactionType ?? ""}
              onChange={(e) =>
                updateFilters({ transactionType: e.target.value })
              }
              input={<OutlinedInput label="Tipo de Transação" />}
            >
              <MenuItem value="">
                <em>Todos</em>
              </MenuItem>
              {}
              {transactionTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box display="flex" gap={1} mt={1}>
            <IconButton
              onClick={clearFilters}
              sx={{
                backgroundColor: "var(--secondaryColor)",
                fontSize: "14px",
                fontWeight: "700",
                color: "var(--primaryTextColor)",
                "&:hover": {
                  backgroundColor: "var(--primaryTextColor)",
                  color: "var(--secondaryColor)",
                },
              }}
              aria-label="Limpar filtros"
            >
              Limpar
            </IconButton>
            <IconButton
              onClick={handleApply}
              sx={{
                backgroundColor: "var(--primaryColor)",
                fontSize: "14px",
                fontWeight: "700",
                color: "var(--primaryTextColor)",
                "&:hover": {
                  backgroundColor: "var(--primaryTextColor)",
                  color: "var(--primaryColor)",
                },
                ml: "auto",
              }}
              aria-label="Aplicar filtros"
            >
              Aplicar
            </IconButton>
          </Box>
        </Box>
      </Menu>
    </>
  );
}
