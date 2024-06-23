import { FC } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Headline } from "@telegram-apps/telegram-ui";
import "./IndexPage.css";
import { ContentProvider } from "./ContentContext";
import CreatePage from "./CreatePage";

export const ContentPage: FC = () => {
  const { page } = useParams<{ page: string }>();
  const { project } = useParams<{ project: string }>();
  const content = "hello world";
  return (
    <ContentProvider value={content}>
      <div className="prose lg:prose-xl flex w-full m-4 flex-col mt-10">
        <Avatar
          size={96}
          src="https://avatars.githubusercontent.com/u/84640980?v=4"
          className="mx-10"
        />
        <h1
          contentEditable={true}
          suppressContentEditableWarning={true}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          {page}
        </h1>
        <CreatePage />
      </div>
    </ContentProvider>
  );
};
