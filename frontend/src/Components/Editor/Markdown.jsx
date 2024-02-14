import React, { useEffect } from "react";
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import { HardBreak } from "@tiptap/extension-hard-break";
import Underline from '@tiptap/extension-underline'
import StarterKit from "@tiptap/starter-kit";

import { floatingMenuFunctions, bubbleMenuFunctions } from "@/lib/data";
import EditorMenubar from "./EditorMenuBar";

const Markdown = ({ editorState, setEditorState }) => {
  const CustomHardBreak = HardBreak.extend({
    addKeyboardShortcuts() {
      return {
        "Mod-Enter": () => true,
      };
    },
  });
  const editor = useEditor({
    extensions: [StarterKit, CustomHardBreak, Underline],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });
  useEffect(() => {
    if (editorState === null || editorState === "") {
      editor?.commands.setContent("");
    }
  }, [editorState, editor?.commands]);



  return (
    <>
      <main className="rounded-lg py-1 md:px-3 shadow-sm dark:text-white text-black placholder:text-gray-400 border  border-neutral-400 bg-white text-lg w-full max-w-full ">
        {editor && (
          <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <div className=" gap-1 bg-white px-4 py-1 text-black rounded-sm hidden md:flex shadow-md border">
              {bubbleMenuFunctions.length > 0 &&
                bubbleMenuFunctions.map((func, idx) => (
                  <button
                    key={func.title + idx}
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      func.onFunction();
                    }}
                    className={
                      editor.isActive(func.title)
                        ? "is-active rounded-sm p-0.5"
                        : " rounded-sm p-0.5"
                    }
                  >
                    <func.icon className="w-3 h-3 sm:h-4 sm:w-4" />
                  </button>
                ))}
            </div>
          </BubbleMenu>
        )}

        {editor && (
          <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <div className="gap-1 bg-white px-4 py-1 text-black rounded-sm hidden md:flex shadow-md border">
              {floatingMenuFunctions.length > 0 &&
                floatingMenuFunctions.map((func, idx) => (
                  <button
                    key={func.title + idx}
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      func.onFunction();
                    }}
                    className={
                      editor.isActive(func.title, func.attribute)
                        ? "is-active rounded-sm p-0.5"
                        : "rounded-sm p-0.5"
                    }
                  >
                    <func.icon className="w-3 h-3 sm:h-4 sm:w-4" />
                  </button>
                ))}
            </div>
          </FloatingMenu>
        )}

        {editor && <EditorMenubar editor={editor} />}
        <EditorContent className="prose dark:prose-invert  px-3 min-w-full overflow-x-hidden " editor={editor} />
      </main>
    </>
  );
};
export default Markdown;
