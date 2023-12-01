import { ContentItem } from "@/interfaces/content.interface";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Controller, useForm } from "react-hook-form";
import styles from "@/styles/form.module.css";
import TextField from "@mui/material/TextField";

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
    register,
  } = useForm<ContentItem>({
    defaultValues: {
      title: content?.title,
      description: content?.description,
      btnVal: content?.btnVal,
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
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <TextField
                  {...field}
                  inputRef={ref}
                  fullWidth
                  id="title"
                  label="Title"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange("title", e.target.value);
                  }}
                  value={content.title}
                  variant="outlined"
                  multiline={false}
                  error={!!errors.title}
                />
              )}
            />
            {errors.title?.type === "required" && (
              <p role="alert" className={styles.errorText}>
                Title is required
              </p>
            )}
          </Box>

          <Box component="section" sx={{ p: 2 }}>
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <TextField
                  {...field}
                  inputRef={ref}
                  fullWidth
                  id="description"
                  label="Description"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange("description", e.target.value);
                  }}
                  value={content.description}
                  variant="outlined"
                  multiline={true}
                  error={!!errors.description}
                />
              )}
            />
            {errors.description?.type === "required" && (
              <p role="alert" className={styles.errorText}>
                Description is required
              </p>
            )}
          </Box>

          <Box component="section" sx={{ p: 2 }}>
            <Controller
              name="btnVal"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <TextField
                  {...field}
                  inputRef={ref}
                  fullWidth
                  id="btnVal"
                  label="Button Value"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange("btnVal", e.target.value);
                  }}
                  value={content.btnVal}
                  variant="outlined"
                  multiline={false}
                  error={!!errors.btnVal}
                />
              )}
            />
            {errors.btnVal?.type === "required" && (
              <p role="alert" className={styles.errorText}>
                Button Value is required
              </p>
            )}
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
