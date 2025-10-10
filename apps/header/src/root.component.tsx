import { AppBar, Box, Container } from "@mui/material";
import { useResponsive } from "@bytebank/context";
import { DrawerButton, UserComponent } from "@bytebank/components";

export default function Root() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const containerWidth = isDesktop ? "1200px" : isTablet ? "600px" : "312px";
  const justifyContentValue = isMobile ? "space-between" : "right";

   return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        background: "var(--primaryColor)",
        color: "var(--primaryTextColor)",
        height: "96px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        fixed
        sx={{
          width: containerWidth,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: justifyContentValue,
          }}
        >
          {isMobile && <DrawerButton />}
          <UserComponent />
        </Box>
      </Container>
    </AppBar>
  );
}
