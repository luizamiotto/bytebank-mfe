import { useResponsive } from "@bytebank/context";
import { Pixels2 } from "../Images";
import { Pixels3 } from "../Images";
import { Ilustracao2 } from "../Images";
import { useSelector } from "react-redux";
import { selectSelectedItem } from "@bytebank/redux";
import { Box } from "@mui/material";

/** Componente que exibe as imagens decorativas do formulário de transação. */
export default function TransactionImages() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
	const selectedItem = useSelector(selectSelectedItem);

  interface ImageConfig {
    key: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    sx: Record<string, unknown>;
  }

  const images: ImageConfig[] = [];

  // Pixel superior (tablet e desktop)
  if (isTablet || isDesktop) {
    images.push({
      key: "pixel-top-tablet-desktop",
      src: Pixels3,
      alt: "pixels",
      width: 180,
      height: 177,
      sx: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "180px",
        height: "177px",
      },
    });
  }

  // Pixel superior (mobile)
  if (isMobile) {
    images.push({
      key: "pixel-top-mobile",
      src: Pixels3,
      alt: "pixels",
      width: 146,
      height: 144,
      sx: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "146px",
        height: "144px",
      },
    });
  }

  // Pixel inferior (mobile)
  if (isMobile) {
    images.push({
      key: "pixel-bottom-mobile",
      src: Pixels2,
      alt: "pixels",
      width: 146,
      height: 144,
      sx: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "146px",
        height: "144px",
      },
    });
  }

  // Pixel inferior (tablet e desktop)
  if (isTablet || isDesktop) {
    images.push({
      key: "pixel-bottom-tablet-desktop",
      src: Pixels2,
      alt: "pixels",
      width: 180,
      height: 177,
      sx: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "180px",
        height: "177px",
      },
    });
  }

  // Ilustração (mobile e tablet)
  if (
    !isDesktop &&
    (selectedItem === "Início" || selectedItem === "Transferências")
  ) {
    images.push({
      key: "illustration",
      src: Ilustracao2,
      alt: "ilustração",
      width: isTablet ? 327 : 280,
      height: 231,
      sx: {
        position: "absolute",
        bottom: "28px",
        right: "16px",
        width: isTablet ? "327px" : "280px",
        height: "231px",
      },
    });
  }

  return (
    <>
      {images.map((img) => (
        <Box key={img.key} sx={img.sx}>
          <img
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            style={{ objectFit: "contain" }}
          />
        </Box>
      ))}
    </>
  );
}
