import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Link } from "@/components/Link/Link.tsx";

export const IndexPage: FC = () => {
  return (
    <List>
      <Section>
        <Link to="/project/ds/name">
          <Cell>Page </Cell>
        </Link>
      </Section>
      <Section>
        <Link to="/ton-connect">
          <Cell>TON Connect </Cell>
        </Link>
      </Section>
      <Section>
        <Link to="/init-data">
          <Cell subtitle="User data, chat information, technical data">
            Init Data
          </Cell>
        </Link>
        <Link to="/launch-params">
          <Cell subtitle="Platform identifier, Mini Apps version, etc.">
            Launch Parameters
          </Cell>
        </Link>
        <Link to="/theme-params">
          <Cell subtitle="Telegram application palette information">
            Theme Parameters
          </Cell>
        </Link>
      </Section>
    </List>
  );
};
