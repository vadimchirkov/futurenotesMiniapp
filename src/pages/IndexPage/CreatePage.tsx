import { FC } from "react";
import { MilkdownEditor } from "./Milkdown";
import { MilkdownProvider } from "@milkdown/react";
import { ProsemirrorAdapterProvider } from "@prosemirror-adapter/react";
import { Section, List } from "@telegram-apps/telegram-ui";
import { StrictMode } from "react";

const content = `# Dauga Spirit Values 
values
hello
peace
`;
export const CreatePage: FC = () => {
  return (
    <StrictMode>
      <List className="w-full">
        <Section className="prose lg:prose-xl flex w-full m-4 justify ">
          <MilkdownProvider>
            <ProsemirrorAdapterProvider>
              <MilkdownEditor content={content} />
            </ProsemirrorAdapterProvider>
          </MilkdownProvider>
        </Section>
      </List>
    </StrictMode>
  );
};

export default CreatePage;
