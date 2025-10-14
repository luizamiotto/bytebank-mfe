import { navigateToUrl } from "single-spa";
import { useResponsive } from "@bytebank/context";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebarItems, setSelectedItem } from "@bytebank/redux";

type SidebarListProps = {
  onClose?: () => void;
};

export default function SidebarList({ onClose }: SidebarListProps) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const dispatch = useDispatch();
  const sidebarItems: {
    name: string;
    selected: boolean;
  }[] = useSelector(selectSidebarItems);

  const handleClick = (text: string) => {
    dispatch(setSelectedItem(text));
    onClose?.();

    const url = `/${text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")}`;
    navigateToUrl(url);
  };

  const renderList = (variant: "desktop" | "tablet" | "mobile") => (
    <List sx={{ display: variant === "tablet" ? "flex" : "block" }}>
      {sidebarItems.map((item, index) => (
        <Box key={index} sx={{ textAlign: "center" }}>
          <ListItem disablePadding>
            <ListItemButton
              selected={item.selected}
              onClick={() => handleClick(item.name)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "transparent",
                },
                "&:hover": {
                  backgroundColor: "var(--background)",
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    fontSize={16}
                    fontWeight={item.selected ? 700 : 400}
                    color={
                      item.selected
                        ? "var(--thirdColor)"
                        : "var(--secondaryTextColor)"
                    }
                    textAlign="center"
                    noWrap
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          {variant !== "tablet" && index < sidebarItems.length - 1 && (
            <Divider sx={{ width: "112px", margin: "0 auto" }} />
          )}
        </Box>
      ))}
    </List>
  );

  if (isDesktop) return renderList("desktop");
  if (isTablet) return renderList("tablet");
  if (isMobile)
    return (
      <Box
        sx={{
          width: "172px",
          height: "240px",
          top: 0,
          left: 0,
          pt: 2,
          position: "absolute",
          zIndex: 3,
          backgroundColor: "var(--background)",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: "var(--thirdColor)",
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>
        {renderList("mobile")}
      </Box>
    );
}
