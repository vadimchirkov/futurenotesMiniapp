import { FC } from "react";
import { MilkdownEditor } from "./Milkdown";
import { MilkdownProvider } from "@milkdown/react";
import { ProsemirrorAdapterProvider } from "@prosemirror-adapter/react";
import { Section, List } from "@telegram-apps/telegram-ui";
import { StrictMode } from "react";

export const CreatePage: FC = () => {
  return (
    <StrictMode>
      <MilkdownProvider>
        <ProsemirrorAdapterProvider>
          <MilkdownEditor />
        </ProsemirrorAdapterProvider>
      </MilkdownProvider>
    </StrictMode>
  );
};

export default CreatePage;
