import { ContentItem } from "@/interfaces/content.interface";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import styles from "@/styles/form.module.css";

interface Props {
  isDrawerOpened: boolean;
  isBigScreen: boolean;
  onClose: () => void;
  content: ContentItem;
  onChange: (name: string, value: string) => void;
}

export default function EditorForm({
  isDrawerOpened,
  isBigScreen,
  onClose,
  content,
  onChange,
}: Props) {
  const {
    control,
    formState: { errors },
  } = useForm<ContentItem>({
    defaultValues: {
      title: content.title,
      description: content.description,
      btnVal: content.btnVal,
    },
    mode: "onChange",
  });

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpened}
        variant={isBigScreen ? "permanent" : "temporary"}
        onClose={onClose}
        onOpen={() => {}}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "40%" },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box component="section" sx={{ p: 2 }}>
            <FormField
              control={control}
              name="title"
              rules={{ required: true }}
              isMultiline={false}
              label="Title"
              onChange={onChange}
              value={content.title}
            />
            {errors.title?.type === "required" && (
              <p role="alert" className={styles.errorText}>
                Title is required
              </p>
            )}
          </Box>

          <Box component="section" sx={{ p: 2 }}>
            <FormField
              control={control}
              name="description"
              rules={{ required: true }}
              isMultiline={true}
              label="Description"
              onChange={onChange}
              value={content.description}
            />
            {errors.description?.type === "required" && (
              <p role="alert" className={styles.errorText}>
                Description is required
              </p>
            )}
          </Box>

          <Box component="section" sx={{ p: 2 }}>
            <FormField
              control={control}
              name="btnVal"
              rules={{ required: true }}
              isMultiline={false}
              label="Button Value"
              onChange={onChange}
              value={content.btnVal}
            />
            {errors.btnVal?.type === "required" && (
              <p role="alert" className={styles.errorText}>
                Button value is required
              </p>
            )}
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
