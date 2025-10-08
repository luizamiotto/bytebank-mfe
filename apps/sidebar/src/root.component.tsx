import { useResponsive } from "./hooks/useResponsive";
// import { useSidebar } from "@/app/contexts/SidebarContext";
import { Box } from "@mui/material";
// import SidebarList from "./SidebarList";

export default function Root() {
  const { isTablet, isDesktop } = useResponsive();
  // const { selectedItem } = useSidebar();

  return isDesktop ? (
    <Box
      sx={{
        width: "180px",
        height: "904px",
        // height: selectedItem === "Início" || selectedItem === "Transferências" ? "904px" : "1009px",
        position: "relative",
        top: "24px",
        borderRadius: "8px",
        backgroundColor: "var(--primaryTextColor)",
      }}
    >
      {/* <SidebarList /> */}
    </Box>
  ) : isTablet ? (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        top: "24px",
      }}
    >
      {/* <SidebarList /> */}
    </Box>
  ) : null;
}

