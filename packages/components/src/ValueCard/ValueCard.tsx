import { useResponsive } from "@bytebank/context";
import { Box, Typography } from "@mui/material";

interface ValueCardProps {
	title: string;
	value: number;
}

export default function ValueCard({ title, value }: ValueCardProps) {
	const { isDesktop } = useResponsive();
	
	return (
		<Box
			sx={{
				width: isDesktop ? "293px" : "272px",
				height: "95px",
				position: "relative",
				top: "24px",
				mb: 3,
				borderRadius: "8px",
				backgroundColor: "var(--primaryColor)"
			}}
		>
			<Typography
				sx={{
					fontWeight: 400,
					fontSize: "16px",
					color: "var(--primaryTextColor)",
					mt: 2,
					textAlign: "center",
					position: "relative",
				}}
			> {title}
			</Typography>
			<Typography
				sx={{
					fontWeight: 400,
					fontSize: "20px",
					color: "var(--primaryTextColor)",
					mt: 1,
					textAlign: "center",
					position: "relative",
				}}
			> {value.toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</Typography>
		</Box>
	);
}