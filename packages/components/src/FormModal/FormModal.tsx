import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useResponsive } from "@bytebank/context";
import TransactionForm from "../TransactionForm";

interface FormModalProps {
	open: boolean;
	onClose: () => void;
}

export default function FormModal({ open, onClose }: FormModalProps) {
	const { isMobile } = useResponsive();

	return (
		<Dialog open={open} slotProps={{
			paper: {
				sx: {
					margin: 0,
				},
			},
		}}>
			<DialogTitle sx={{
				color: "var(--thirdTextColor)",
				ml: isMobile ? 0 : 3,
			}}>
				Editar transação
			</DialogTitle>
			<DialogContent>
				<TransactionForm onCancel={onClose} />
			</DialogContent>
		</Dialog>
	);
}
