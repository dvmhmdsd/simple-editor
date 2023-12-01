import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "@/styles/preview.module.css";
import { ContentItem } from "@/interfaces/content.interface";

interface Props {
  content: ContentItem;
}

export default function Preview({ content }: Props) {
  return (
    <Box
      component="section"
      className={styles.section}
      sx={{
        marginLeft: { sx: "0", md: "40%" },
        width: { sx: "100%", md: "60%" },
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
        }}
      >
        {content?.title}
      </Typography>
      <Typography component="p">{content?.description}</Typography>
      <Button variant="contained">{content?.btnVal}</Button>
    </Box>
  );
}
