import { FC } from "react";
import {
  Section,
  List,
  Avatar,
  Headline,
  Text,
} from "@telegram-apps/telegram-ui";

import "./IndexPage.css";
import CreatePage from "./CreatePage";

export const IndexPage: FC = () => {
  return (
    <div className="prose lg:prose-xl flex w-full m-4 flex-col gap-y-6 items-center mt-10">
      <Avatar
        size={96}
        src="https://avatars.githubusercontent.com/u/84640980?v=4"
      />
      <Headline weight="1">Organisation Name</Headline>

      <CreatePage />
    </div>
  );
};

export default IndexPage;
