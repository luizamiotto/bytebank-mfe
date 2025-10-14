import { useResponsive } from "@bytebank/context";
import { Box } from "@mui/material";
import { SidebarList } from "@bytebank/components";
import { useSelector } from "react-redux";
import { selectSelectedItem } from "@bytebank/redux";

export default function SidebarContent() {
	const { isTablet, isDesktop } = useResponsive();
	const item = useSelector(selectSelectedItem);

	return isDesktop ? (
		<Box
			sx={{
				width: "180px",
				height: item === "Início" || item === "Transferências" ? "904px" : "1009px",
				position: "relative",
				top: "24px",
				borderRadius: "8px",
				backgroundColor: "var(--primaryTextColor)",
			}}
		>
			<SidebarList />
		</Box>
	) : isTablet ? (
		<Box
			sx={{
				display: "flex",
				position: "relative",
				top: "24px",
			}}
		>
			<SidebarList />
		</Box>
	) : null;
}
