import { useResponsive } from '@bytebank/context';
import { PieChart } from "@mui/x-charts/PieChart";

export default function Chart() {
	const { isMobile } = useResponsive();
	
	const data = [
		{ value: 90, label: 'Fundos de Investimento', color: '#2567f9' },
		{ value: 120, label: 'Tesouro Direto', color: '#8f3cff' },
		{ value: 60, label: 'Previdência Privada', color: '#ff3c82' },
		{ value: 80, label: 'Bolsa de Valores', color: '#f1823d' },
	];
	
	const size = {
		width: 126,
		height: 126,
	};

	return (
		<PieChart 
			series={
				[
					{ data, 
						innerRadius: 40,
					}
				]
			}
			sx={{
				"& .MuiPieArc-root": {
					stroke: "none",
				},
				"& .MuiChartsLegend-label": {
					color: "var(--primaryTextColor)",
					fontSize: 14,
					fontWeight: 400,
				},
				"& .MuiChartsLegend-root .MuiChartsLegend-mark": {
					width: 10,
					height: 10,
					ml: 3,
				},
				"& .MuiChartsLegend-item": {
					mt: isMobile ? 2 : 0,
				},
			}} 
			slotProps={{
				legend: {
					direction: isMobile ? "horizontal" : "vertical",
					position: {
						vertical: isMobile ? "bottom" : "middle",
					},
				},
			}}
			{...size}>
		</PieChart>
	);
}