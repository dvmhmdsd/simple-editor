import { ContentItem } from "@/interfaces/content.interface";
import { UseControllerProps, useController } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface AdditionalProps {
  isMultiline: boolean;
  label: string;
  onChange: (name: string, value: string) => void;
  value: string;
}

type Props = AdditionalProps & UseControllerProps<ContentItem>;

export default function FormField(props: Props) {
  const { field } = useController(props);
  return (
    <Box>
      <TextField
        sx={{ width: "100%" }}
        {...field}
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        multiline={props.isMultiline}
        onChange={(e) => props.onChange(props.name, e.target.value)}
        value={props.value}
        defaultValue={props.value}
      />
    </Box>
  );
}