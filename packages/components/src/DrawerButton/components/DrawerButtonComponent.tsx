import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useState } from "react";
import { SidebarList } from "@bytebank/components";

export default function DrawerButtonContent() {
	const [open, setOpen] = useState(false);
	const toggleSidebar = () => setOpen((prev) => !prev);

	return (
	<>
		<Button onClick={toggleSidebar}>
		<MenuIcon
			sx={{
			color: "var(--secondaryColor)",
			height: "40px",
			width: "40px",
			fontWeight: 300,
			}}
		/>
		</Button>

		{open && <SidebarList onClose={() => setOpen(false)} />}
	</>
	);
}
