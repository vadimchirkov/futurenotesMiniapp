import { BlockProvider } from "@milkdown/plugin-block";
import { useInstance } from "@milkdown/react";
import { usePluginViewContext } from "@prosemirror-adapter/react";
import { useEffect, useRef, useCallback } from "react";
import { Ctx } from "@milkdown/ctx";
import { tooltipFactory, TooltipProvider } from "@milkdown/plugin-tooltip";
import { toggleStrongCommand } from "@milkdown/preset-commonmark";
import { callCommand } from "@milkdown/utils";
import { useNavigate } from "react-router-dom";

export const tooltip = tooltipFactory("Text");

export const BlockView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const tooltipProvider = useRef<BlockProvider & TooltipProvider>();

  const { view, prevState } = usePluginViewContext();
  const [loading, get] = useInstance();
  const action = useCallback(
    (fn: (ctx: Ctx) => void) => {
      if (loading) return;
      get().action(fn);
    },
    [loading]
  );

  useEffect(() => {
    const div = ref.current;
    if (loading || !div) return;

    const editor = get();
    if (!editor) return;

    tooltipProvider.current = new BlockProvider({
      ctx: editor.ctx,
      content: div,
    }) as BlockProvider & TooltipProvider;

    return () => {
      tooltipProvider.current?.destroy();
    };
  }, [loading]);

  useEffect(() => {
    tooltipProvider.current?.update(view, prevState);
  });
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Tooltip clicked!");
    // Add any additional logic for the click event here
  };

  const handlePlusClick = () => {
    const newPage = "new-page"; // Define the new page name dynamically if needed
    const project = "current-project"; // Replace with the current project logic if needed
    navigate(`/project/${project}/${newPage}`);
  };

  return (
    <div>
      <div ref={ref} className=" cursor-grab absolute flex">
        <button
          className="text-gray-600  hover:text-gray-900 w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={handlePlusClick}
        >
          +
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </div>
    </div>
  );
};
