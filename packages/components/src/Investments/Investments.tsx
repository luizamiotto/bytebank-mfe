import { useResponsive } from "@bytebank/context";
import { Box, Typography } from "@mui/material";
import { ValueCard, ChartCard, TransactionImages } from "@bytebank/components";
// import { investmentsMock } from "@/app/mocks/investments-mock";

/** Componente que exibe os investimentos. */
export default function Investments() {
	const { isMobile, isTablet } = useResponsive();
	
	return (
		<Box
			sx={{
				position: "relative",
				height: isMobile ? "844px" : isTablet ? "630px" : "583px",
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
					color: "var(--secondaryTextColor)",
					mt: isMobile ? 4 : 3,
					ml: isMobile ? 0 : 3,
					textAlign: isMobile ? "center" : "left",
					position: "relative",
				}}
			>
				Investimentos
			</Typography>

			<Typography
				sx={{
					fontWeight: 400,
					fontSize: "25px",
					color: "var(--primaryColor)",
					mt: isMobile ? 4 : 3,
					ml: isMobile ? 0 : 3,
					textAlign: isMobile ? "center" : "left",
					position: "relative",
				}}
			>Total: 
			{/* {investmentsMock[0].total.toLocaleString("pt-BR", {
				style: "currency",
				currency: "BRL",
			})} */}
			</Typography>

			<Box 
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				{/* <ValueCard title="Renda Fixa" value={investmentsMock[0].fixo} />
				<ValueCard title="Renda Variável" value={investmentsMock[0].variavel}/> */}
			</Box>

			<Typography
				sx={{
					fontWeight: 400,
					fontSize: "20px",
					color: "var(--secondaryTextColor)",
					mt: isMobile ? 4 : 7,
					ml: isMobile ? 0 : 3,
					textAlign: isMobile ? "center" : "left",
					position: "relative",
				}}
			>
				Estatísticas
			</Typography>

			<ChartCard />
		</Box>
	);
}
