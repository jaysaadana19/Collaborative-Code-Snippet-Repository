import {
  Bold,
  Code,
  Code2Icon,
  Heading,
  Heading3,
  Italic,
  List,
  ListOrdered,
  LucideUnderline,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";


export  const menuBarFunctions = [
  {
    title: "bold",
    onFunction: () => editor.chain().focus().toggleBold().run(),
    offFunction: () => !editor.can().chain().focus().toggleBold().run(),
    icon: Bold,
  },
  {
    title: "italic",
    onFunction: () => editor.chain().focus().toggleItalic().run(),
    offFunction: () => !editor.can().chain().focus().toggleItalic().run(),
    icon: Italic,
  },
  {
    title: "strike",
    onFunction: () => editor.chain().focus().toggleStrike().run(),
    offFunction: () => !editor.can().chain().focus().toggleStrike().run(),
    icon: Strikethrough,
  },
  {
    title: "underline",
    onFunction: () => editor.chain().focus().toggleUnderline().run(),
    offFunction: () => !editor.can().chain().focus().toggleUnderline().run(),
    icon: LucideUnderline,
  },
  {
    title: "code",
    onFunction: () => editor.chain().focus().toggleCode().run(),
    offFunction: () => !editor.can().chain().focus().toggleCode().run(),
    icon: Code,
  },
  {
    title: "heading",
    attribute: { level: 3 } || null,
    onFunction: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    offFunction: () => !editor.can().chain().focus().toggleHeading({ level: 3 }).run(),
    icon: Heading3,
  },

  {
    title: "bulletList",
    onFunction: () => editor.chain().focus().toggleBulletList().run(),
    offFunction: () => !editor.can().chain().focus().toggleBulletList().run(),
    icon: List,
  },
  {
    title: "orderedList",
    onFunction: () => editor.chain().focus().toggleOrderedList().run(),
    offFunction: () => !editor.can().chain().focus().toggleOrderedList().run(),
    icon: ListOrdered,
  },
  {
    title: "codeBlock",
    onFunction: () => editor.chain().focus().toggleCodeBlock().run(),
    offFunction: () => !editor.can().chain().focus().toggleCodeBlock().run(),
    icon: Code2Icon,
  },
  {
    title: "blockquote",
    onFunction: () => editor.chain().focus().toggleBlockquote().run(),
    offFunction: () => !editor.can().chain().focus().toggleBlockquote().run(),
    icon: Quote,
  },
  {
    title: "undo",
    onFunction: () => editor.chain().focus().undo().run(),
    offFunction: () => !editor.can().chain().focus().undo().run(),
    icon: Undo,
  },
  {
    title: "redo",
    onFunction: () => editor.chain().focus().redo().run(),
    offFunction: () => !editor.can().chain().focus().redo().run(),
    icon: Redo,
  },
];

export  const floatingMenuFunctions = [
  {
    title: `heading`,
    attribute: { level: 3 },
    onFunction: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
    icon: Heading,
  },
  {
    title: `codeBlock`,
    attribute: { level: 1 },
    onFunction: () => editor?.chain().focus().toggleCodeBlock().run(),
    icon: Code2Icon,
  },
  {
    title: `bulletList`,
    onFunction: () => editor?.chain().focus().toggleBulletList().run(),
    icon: List,
  },
  {
    title: `orderedList`,
    onFunction: () => editor?.chain().focus().toggleOrderedList().run(),
    icon: ListOrdered,
  },
];

export const bubbleMenuFunctions = [
  {
    title: "bold",
    onFunction: () => editor?.chain().focus().toggleBold().run(),
    icon: Bold,
  },
  {
    title: "italic",
    onFunction: () => editor?.chain().focus().toggleItalic().run(),
    icon: Italic,
  },
  {
    title: "strike",
    onFunction: () => editor?.chain().focus().toggleStrike().run(),
    icon: Strikethrough,
  },
  {
    title: "code",
    onFunction: () => editor?.chain().focus().toggleCode().run(),
    icon: Code,
  },
  {
    title: "underline",
    onFunction: () => editor?.chain().focus().toggleUnderline().run(),
    icon: LucideUnderline,
  },
];


export const languages = [
    {
      "value": "javascript",
      "label": "JavaScript"
    },
    {
      "value": "python",
      "label": "Python"
    },
    {
      "value": "java",
      "label": "Java"
    },
    {
      "value": "c++",
      "label": "C++"
    },
    {
      "value": "c#",
      "label": "C#"
    },
    {
      "value": "ruby",
      "label": "Ruby"
    },
    {
      "value": "swift",
      "label": "Swift"
    },
    {
      "value": "go",
      "label": "Go"
    },
    {
      "value": "rust",
      "label": "Rust"
    },
    {
      "value": "php",
      "label": "Php"
    },
    {
      "value": "typescript",
      "label": "TypeScript"
    },
    {
      "value": "kotlin",
      "label": "Kotlin"
    },
    {
      "value": "scala",
      "label": "Scala"
    },
    {
      "value": "perl",
      "label": "Perl"
    },
    {
      "value": "lua",
      "label": "Lua"
    },
    {
      "value": "haskell",
      "label": "Haskell"
    },
    {
      "value": "elixir",
      "label": "Elixir"
    },
    {
      "value": "r",
      "label": "R"
    },
    {
      "value": "dart",
      "label": "Dart"
    },
    {
      "value": "fortran",
      "label": "Fortran"
    },
    {
      "value": "cobol",
      "label": "Cobol"
    },
    {
      "value": "lisp",
      "label": "Lisp"
    },
    {
      "value": "prolog",
      "label": "Prolog"
    },
    {
      "value": "ada",
      "label": "Ada"
    },
    {
      "value": "erlang",
      "label": "Erlang"
    },
    {
      "value": "scheme",
      "label": "Scheme"
    },
    {
      "value": "pascal",
      "label": "Pascal"
    },
    {
      "value": "smalltalk",
      "label": "Smalltalk"
    },
    {
      "value": "apl",
      "label": "Apl"
    }
  ]

  export const categories = [
    { label: "Language-Specific", value: "language_specific" },
    { label: "App-Development", value: "app_development" },
    { label: "Web-Development", value: "web_development" },
    { label: "Design-Pattern", value: "design_pattern" },
    { label: "DBMS", value: "dbms" },
    { label: "Testing", value: "testing" },
    { label: "Configuration", value: "configuration" },
    { label: "IDE-Specific", value: "ide_specific" },
  ]