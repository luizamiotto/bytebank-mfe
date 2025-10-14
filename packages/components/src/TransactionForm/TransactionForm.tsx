"use client";
import { useResponsive } from "@bytebank/context";
import {
  addTransaction,
  editTransaction,
  selectEditingId,
  selectTransactions,
  selectTransactionById,
  setEditingId,
} from "@bytebank/redux";
import type { SxProps, Theme } from "@mui/material";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface TransactionFormProps {
  onCancel?: () => void;
}

export default function TransactionForm({ onCancel }: TransactionFormProps) {
  const { isMobile, isDesktop } = useResponsive();
  const dispatch = useDispatch();

  // selectors
  const editingId = useSelector(selectEditingId);
  const transactions = useSelector(selectTransactions);
  // pega a transação diretamente do store (estável)
  const transaction = useSelector((state) =>
    selectTransactionById(state, editingId)
  );

  const transactionTypes = useSelector(
    (state: { transactionTypes: { types: string[] } }) =>
      state.transactionTypes.types
  );

  // Estado do formulário (use nomes claros)
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  // Preencher os campos ao entrar em modo edição
  useEffect(() => {
    if (editingId && transaction) {
      setType(transaction.type ?? "");
      setValue(
        typeof transaction.value === "number"
          ? transaction.value.toFixed(2).replace(".", ",")
          : ""
      );
    } else {
      setType("");
      setValue("");
    }
    setError("");
  }, [editingId, transaction]);

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const submitForm = () => {
    const valueRegex = /^\d+,\d{2}$/;

    if (!valueRegex.test(value)) {
      setError("Informe o valor no formato 00,00");
      return;
    }

    setError("");

    const transactionData = {
      date: transaction ? transaction.date : new Date().toISOString(),
      type: type,
      value:
        type === "Transferência"
          ? -parseFloat(value.replace(",", "."))
          : parseFloat(value.replace(",", ".")),
    };

    if (editingId && transaction) {
      dispatch(editTransaction({ id: editingId, updated: transactionData }));
      dispatch(setEditingId(null));
    } else {
      dispatch(addTransaction(transactionData));
    }

    // Limpa campos depois de despachar
    setType("");
    setValue("");

    if (!isDesktop) {
      onCancel?.();
    }
  };

  // Responsividade do container principal
  let sx: SxProps<Theme>;
  if (isDesktop) {
    sx = {
      mt: 3,
      ml: 3,
      width: "355px",
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      gap: 2,
    };
  } else if (isMobile) {
    sx = {
      mt: 3,
      width: "280px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: 2,
    };
  } else {
    sx = {
      mt: 3,
      ml: 3,
      width: "355px",
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      gap: 2,
    };
  }

  return (
    <Box sx={sx}>
      <FormControl
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            height: "48px",
            backgroundColor: "var(--primaryTextColor)",
            borderRadius: "8px",
          },
        }}
      >
        <Select
          value={type}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => {
            if (!selected) {
              return (
                <span style={{ color: "#999" }}>
                  Selecione o tipo de transação
                </span>
              );
            }
            return selected;
          }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
              borderWidth: "1px",
            },
          }}
        >
          {transactionTypes.map((t) => (
            <MenuItem
              key={t}
              value={t}
              sx={{
                "&:hover, &.Mui-selected, &.Mui-selected:hover": {
                  backgroundColor: "var(--background)",
                },
              }}
            >
              {t}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          color: "var(--thirdTextColor)",
          mt: 3,
        }}
      >
        Valor
      </Typography>

      <TextField
        value={value}
        onChange={(e) => {
          const input = e.target.value;
          const regex = /^\d*(,?\d{0,2})?$/;
          if (regex.test(input)) {
            setValue(input);
            setError("");
          }
        }}
        helperText={error}
        id="outlined-basic"
        placeholder="00,00"
        variant="outlined"
        sx={{
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            height: "48px",
            backgroundColor: "var(--primaryTextColor)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
              borderWidth: "1px",
            },
          },
          "& .MuiFormHelperText-root": {
            color: "red",
            fontSize: "12px",
            height: "10px",
            mt: 1,
            ml: 1,
            backgroundColor: "transparent",
          },
          mb: 2,
          width: isMobile ? "144px" : "250px",
        }}
      />

      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          onClick={submitForm}
          disabled={!type || !value}
          variant="contained"
          sx={{
            color: "var(--primaryTextColor)",
            backgroundColor: "var(--primaryColor)",
            width: isMobile ? "144px" : "250px",
            height: "48px",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "16px",
            textTransform: "none",
            "&.Mui-disabled": {
              backgroundColor: "var(--thirdTextColor)",
              color: "var(--primaryTextColor)",
              opacity: 0.9,
            },
          }}
        >
          {editingId ? "Salvar edição" : "Concluir transação"}
        </Button>
        {editingId && (
          <Button
            onClick={() => {
              dispatch(setEditingId(null));
              if (!isDesktop) {
                onCancel?.();
              }
            }}
            variant="outlined"
            sx={{
              color: "var(--primaryColor)",
              width: isMobile ? "144px" : "250px",
              height: "48px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "16px",
              textTransform: "none",
              borderColor: "var(--primaryColor)",
            }}
          >
            Cancelar
          </Button>
        )}
      </Box>
    </Box>
  );
}
