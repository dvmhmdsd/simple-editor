import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  isDrawerOpened: boolean;
  isBigScreen: boolean;
  onClose: () => void;
}

export default function EditorForm({
  isDrawerOpened,
  isBigScreen,
  onClose,
}: Props) {
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "50%" },
        }}
      >
        Hi
      </SwipeableDrawer>
    </>
  );
}
