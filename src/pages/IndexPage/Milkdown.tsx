import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import type { FC } from "react";

import { Milkdown, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { nord } from "@milkdown/theme-nord";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { block } from "@milkdown/plugin-block";
import "@milkdown/theme-nord/style.css";
import { usePluginViewFactory } from "@prosemirror-adapter/react";

import { BlockView } from "./Block";

import "@milkdown/theme-nord/style.css";
import { cursor } from "@milkdown/plugin-cursor";

// Define the props interface
interface MilkdownEditorProps {
  content: string;
}

export const MilkdownEditor: FC<MilkdownEditorProps> = ({ content }) => {
  const pluginViewFactory = usePluginViewFactory();
  useEditor((root) => {
    return Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, content);
        ctx.set(block.key, {
          view: pluginViewFactory({
            component: BlockView,
          }),
        });
      })
      .config(nord)
      .use(commonmark)
      .use(block)
      .use(cursor);
  }, []);

  return <Milkdown />;
};
