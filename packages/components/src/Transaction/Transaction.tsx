import { useResponsive } from "@bytebank/context";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import TransactionForm from "../TransactionForm";
import { selectEditingId } from "@bytebank/redux";
import TransactionImages from "../TransactionImages";

/** Componente que exibe o formulário de transação */
export default function Transaction() {
  const { isMobile } = useResponsive();
  const editingId = useSelector(selectEditingId);

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "655px" : "478px",
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-start",
        justifyContent: "flex-start",
      }}
    >
      {/* Imagens decorativas */}
      <TransactionImages />

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "25px",
          color: "var(--thirdTextColor)",
          mt: isMobile ? 4 : 3,
          ml: isMobile ? 0 : 3,
          textAlign: isMobile ? "center" : "left",
          position: "relative",
        }}
      >
        {editingId ? "Editar" : "Nova"} transação
      </Typography>

      {/* Formulário de transação conectado ao Redux */}
      <TransactionForm />
    </Box>
  );
}
