import React, { useEffect } from "react";
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import { HardBreak } from "@tiptap/extension-hard-break";
import Underline from '@tiptap/extension-underline'
import StarterKit from "@tiptap/starter-kit";
import EditorMenubar from "./EditorMenuBar";
import {
  BoldIcon,
  Italic,
  Code,
  List,
  ListOrdered,
  StrikethroughIcon,
  Code2Icon,
  Heading,
  LucideUnderline,
} from "lucide-react";

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

  const BubbleMenuFunctions = [
    {
      title: "bold",
      onFunction: () => editor?.chain().focus().toggleBold().run(),
      icon: <BoldIcon  className="font-bold w-3 h-3 sm:h-4 sm:w-4" />,
    },
    {
      title: "italic",
      onFunction: () => editor?.chain().focus().toggleItalic().run(),
      icon: <Italic  className="font-bold w-3 h-3 sm:h-4 sm:w-4" />,
    },
    {
      title: "strike",
      onFunction: () => editor?.chain().focus().toggleStrike().run(),
      icon: <StrikethroughIcon size={18} className="font-bold w-3 h-3 sm:h-4 sm:w-4" />,
    },
    {
      title: "code",
      onFunction: () => editor?.chain().focus().toggleCode().run(),
      icon: <Code size={18} className="font-bold w-3 h-3 sm:h-4 sm:w-4" />,
    },
    {
      title: "underline",
      onFunction: () => editor?.chain().focus().toggleUnderline().run(),
      icon: <LucideUnderline  className="font-bold w-3 h-3 sm:h-4 sm:w-4" />,
    },
  ];

  const FloatingMenuFunctions = [
    {
      title: `heading`,
      attribute: { level: 3 },
      onFunction: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
      icon: <Heading className="w-3 h-3 sm:h-4 sm:w-4" />,
    },
    {
      title: `codeBlock`,
      attribute: { level: 1 },
      onFunction: () => editor?.chain().focus().toggleCodeBlock().run(),
      icon: <Code2Icon className="w-3 h-3 sm:h-4 sm:w-4" />,
    },
    {
      title: `bulletList`,
      onFunction: () => editor?.chain().focus().toggleBulletList().run(),
      icon: <List className="w-3 h-3 sm:h-4 sm:w-4" />,
    },
    {
      title: `orderedList`,
      onFunction: () => editor?.chain().focus().toggleOrderedList().run(),
      icon: <ListOrdered className="w-3 h-3 sm:h-4 sm:w-4" />,
    },
  ];

  return (
    <>
      <main className="rounded-lg py-1 md:px-3 shadow-sm dark:text-white text-black placholder:text-gray-400 border  border-neutral-400 bg-white text-lg w-full max-w-full ">
        {editor && (
          <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <div className=" gap-1 bg-white px-4 py-1 text-black rounded-sm hidden md:flex shadow-md border">
              {BubbleMenuFunctions.length > 0 &&
                BubbleMenuFunctions.map((func, idx) => (
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
                    {func.icon}
                  </button>
                ))}
            </div>
          </BubbleMenu>
        )}

        {editor && (
          <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <div className="gap-1 bg-white px-4 py-1 text-black rounded-sm hidden md:flex shadow-md border">
              {FloatingMenuFunctions.length > 0 &&
                FloatingMenuFunctions.map((func, idx) => (
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
                    {func.icon}
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
