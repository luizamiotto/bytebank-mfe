import { useResponsive } from "@bytebank/context";
import { Box } from "@mui/material";
import Chart from "../Chart";

export default function ChartCard() {
	const { isMobile, isTablet, isDesktop } = useResponsive();
	
	return (
		<Box
			sx={{
				width: isDesktop ? "640px" : isTablet ? "568px" : "276px",
				height: isMobile ? "342px" : "184px",
				position: "relative",
				top: "24px",
				ml: isDesktop ? 3 : isTablet ? 2 : 0,
				borderRadius: "8px",
				backgroundColor: "var(--primaryColor)"
			}}
		>
			<Box sx={{mt: 3}}>
				<Chart />
			</Box>
		</Box>
	);
}