import { useResponsive } from "@bytebank/context";
import { Box } from "@mui/material";
import { Welcome, Transaction, Investments } from "@bytebank/components";

interface CentralBoxProps {
  content: string;
}

/** Componente que exibe o conteúdo central da aplicação. */
export default function Root({ content }: CentralBoxProps) {
  const { isTablet, isDesktop } = useResponsive();

  return (
    <Box
      sx={{
        width: isDesktop ? "690px" : isTablet ? "600px" : "312px",
        position: "relative",
        top: isDesktop ? "24px" : "48px",
        mb: 3,
        borderRadius: "8px",
        backgroundColor:
          content === "welcome"
            ? "var(--primaryColor)"
            : "var(--backgroundBox)",
      }}
    >
      {content === "welcome" && <Welcome />}
      {content === "transaction" && <Transaction />}
      {content === "investments" && <Investments />}
    </Box>
  );
}
