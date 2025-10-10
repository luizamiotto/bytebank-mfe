import { useResponsive } from "@bytebank/context";
// import { userMock } from "@/app/mocks/user-mock";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import WelcomeImages from "../decorative-images/WelcomeImages";
import { Balance } from "@bytebank/components";

/** Componente que exibe a saudação de boas-vindas ao usuário. */
export default function Welcome() {
	const { isMobile, isDesktop } = useResponsive();
	const [formatedLetterDate, setFormatedLetterDate] = useState("");

	useEffect(() => {
		const date = new Date();
		const formatedDate = date.toLocaleDateString("pt-BR", {
			weekday: "long",
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});
		setFormatedLetterDate(
			formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1)
		);
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				height: isMobile ? "655px" : "402px",
				flexDirection: isMobile ? "column" : "row",
				justifyContent: "space-between",
				alignItems: isMobile ? "center" : "left",
			}}
		>
			{/* Imagens decorativas, flutuando*/}
			{/* {!isDesktop && <WelcomeImages />} */}

			{/* Agrupe textos e Balance juntos no mobile */}
			<Box>
				<Typography
					sx={{
						fontWeight: 600,
						fontSize: "24px",
						color: "var(--primaryTextColor)",
						mt: isMobile ? 4 : 3,
						ml: isMobile ? 0 : 3,
						textWrap: "nowrap",
						textAlign: isMobile ? "center" : "left",
					}}
				>
					{/* Olá, {userMock[0].first_name}! :) */}
				</Typography>

				<Typography
					sx={{
						fontWeight: 400,
						fontSize: "14px",
						color: "var(--primaryTextColor)",
						mt: isMobile ? 4 : 2,
						ml: isMobile ? 0 : 3,
						textAlign: isMobile ? "center" : "left",
					}}
				>
					{formatedLetterDate}
				</Typography>

				{/* Balance logo abaixo dos textos no mobile */}
				{isMobile && <Balance />}
			</Box>

			{/* No desktop/tablet, Balance fica fora do Box dos textos */}
			{!isMobile && <Balance />}
		</Box>
	);
}
