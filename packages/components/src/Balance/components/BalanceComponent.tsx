import { useResponsive } from "@bytebank/context";
import { selectCurrentBalance } from "@bytebank/redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import type { SxProps, Theme } from "@mui/material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function BalanceContent() {
  const { isMobile, isDesktop } = useResponsive();
  const [showBalance, setShowBalance] = useState(true);

  let sx: SxProps<Theme>;

  if (isDesktop) {
	sx = { position: "relative", top: "94px", right: "100px" };
  } else if (isMobile) {
	sx = { position: "static", mt: 4 };
  } else {
	sx = { position: "relative", top: "86px", right: "110px" };
  }

  // Cor do ícone/divisor
  const iconColor = isDesktop
	? "var(--secondaryColor)"
	: "var(--primaryTextColor)";

  const balance: number = useSelector(selectCurrentBalance);
  const balanceStr = new Intl.NumberFormat("pt-BR", {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
  }).format(balance ?? 0);

  return (
	<Box sx={sx}>
	  <Box sx={{ display: "flex", alignItems: "center" }}>
		<Typography
		  sx={{
			fontWeight: 600,
			fontSize: "20px",
			color: "var(--primaryTextColor)",
			mr: 4,
		  }}
		>
		  Saldo
		</Typography>
		<IconButton onClick={() => setShowBalance((prev) => !prev)}>
		  {showBalance ? (
			<VisibilityIcon
			  sx={{
				color: iconColor,
				width: "20px",
				height: "20px",
			  }}
			/>
		  ) : (
			<VisibilityOffIcon
			  sx={{
				color: iconColor,
				width: "20px",
				height: "20px",
			  }}
			/>
		  )}
		</IconButton>
	  </Box>
	  <Divider
		sx={{
		  width: "180px",
		  height: "16px",
		  borderBottomWidth: "2px",
		  borderColor: iconColor,
		}}
	  />
	  <Box>
		<Typography
		  sx={{
			fontWeight: 400,
			fontSize: "16px",
			color: "var(--primaryTextColor)",
			mt: 2,
		  }}
		>
		  Conta Corrente
		</Typography>
		<Typography
		  sx={{
			fontWeight: 400,
			fontSize: "32px",
			color: "var(--primaryTextColor)",
		  }}
		>
		  {showBalance ? balanceStr : "••••••"}
		</Typography>
	  </Box>
	</Box>
  );
}
