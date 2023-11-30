import { useState } from "react";

import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Preview from "./components/Preview";
import EditorForm from "./components/EditorForm";
import { useMediaQuery } from "@mui/material";
import Bar from "./components/Bar";

export default function Home() {
  const isBigScreen = useMediaQuery("(min-width: 900px)");
  const [isEditorShown, setIsEditorShown] = useState(
    isBigScreen ? true : false
  );
  const [previewContent, setPreviewContent] = useState({
    title: "Generic title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    btnVal: "Get Started",
  });

  const handleMenuOpen = () => {
    setIsEditorShown(!isEditorShown);
  };

  return (
    <>
      <Head>
        <title>Simple Web Editor</title>
        <meta
          name="description"
          content="A simple web editor for editing content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bar toggleMenu={handleMenuOpen} />
      <main>
        <Preview content={previewContent} />
        <EditorForm
          isBigScreen={isBigScreen}
          isDrawerOpened={isEditorShown}
          onClose={handleMenuOpen}
        />
      </main>
    </>
  );
}
