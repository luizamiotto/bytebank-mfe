import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

interface EditButton {
  type: string;
  editing: boolean;
}

export default function EditButton({ type, editing }: EditButton) {
  return (
		<IconButton
			sx={{
				backgroundColor: editing
					? "var(--secondaryColor)"
					: "var(--primaryColor)",
				color: "var(--primaryTextColor)",
				width: "40px",
				height: "40px",
				mr: 1,
				borderRadius: "50%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				"&:hover": {
					backgroundColor: "var(--primaryTextColor)",
					color: "var(--primaryColor)",
				},
			}}
		>
			{type === "edit" && <EditIcon sx={{ fontSize: 20 }} />}
			{type === "delete" && <DeleteIcon sx={{ fontSize: 20 }} />}
		</IconButton>
  );
}
