// import { StatementItemInterface } from "@/app/mocks/statement-mock";
import { Box, Divider, Typography } from "@mui/material";

export interface StatementItemInterface {
  id: number;
  date: string;
  type: string;
  value: number;
}

interface StatementItemProps extends StatementItemInterface {
	onClick?: () => void;
	isClickable?: boolean;
	isSelected?: boolean;
}

/** Componente de item do extrato */
export default function StatementItem({
	date,
	type,
	value,
	onClick,
	isClickable = false,
	isSelected = false,
}: StatementItemProps) {
	return (
		<Box
			onClick={isClickable ? onClick : undefined}
			sx={{
				width: "240px",
				height: "78px",
				display: "flex",
				flexDirection: "column",
				m: 1,
				cursor: isClickable ? "pointer" : "default",
				border: isSelected ? "2px solid #47A138" : "none",
				borderRadius: "8px",
				transition: "border 0.2s",
				backgroundColor: isSelected ? "var(--background)" : "transparent",
				"&:hover": {
					backgroundColor: isClickable ? "var(--background)" : "transparent",
				},
			}}
		>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "13px",
					color: "var(--thirdColor)",
				}}
			>
				{new Date(date)
					.toLocaleDateString("pt-BR", { month: "long" })
					.replace(/^./, (str) => str.toUpperCase())}
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography
					sx={{
						fontWeight: 400,
						fontSize: "16px",
						color: "var(--secondaryTextColor)",
					}}
				>
					{type}
				</Typography>

				<Typography
					sx={{
						fontWeight: 400,
						fontSize: "13px",
						color: "var(--thirdTextColor)",
					}}
				>
					{new Date(date).toLocaleDateString("pt-BR", {
						day: "2-digit",
						month: "2-digit",
						year: "numeric",
					})}
				</Typography>
			</Box>

			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "16px",
					color: "var(--secondaryTextColor)",
				}}
			>
				{(type === "Transferência" ? -value : value).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</Typography>

			<Divider
				sx={{
					width: "180px",
					borderColor: "rgba(71, 161, 56, 0.5)",
					mt: 1,
				}}
			/>
		</Box>
	);
}
