import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "../ui/select"
import { Input } from "../ui/input"
import { InputTag } from "../forms/InputTag"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import Markdown from "@/components/Editor/Markdown"
import axios from "axios"
// import { toast } from "@/components/ui/use-toast"
 
const languages = [
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

const categories = [
  { label: "Errors", value: "error" },
  { label: "Enhancement", value: "enchancement" },
  { label: "Bug", value: "bug" },
  { label: "Learning", value: "learning" },
  { label: "Complex", value: "complex" },
  { label: "Level-1", value: "level_1" },
  { label: "Level-2", value: "level_2" },
  { label: "Level-3", value: "level_3" },
]

 
const SnippetForm = () => {
    const [tags, setTags] = useState([]);
    const [editorState, setEditorState] = useState("");
  
  console.log(editorState)
    const FormSchema = z.object({
      title: z.string().min(2, {
        message: "Username must be at least 2 characters."}),
      language: z.string({
        required_error: "Please select a language."}),
      category: z.string({
        required_error: "Please select a language."}),
    })
    const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        title: "",
        language: "",
        category: ""
      },
    })
   
    const onSubmit = async(data) => {
      console.log('data:',data,'tags:', tags, 'editorState', typeof(editorState))
      try {
        const resp = await axios.post('/api/snippet/create', {
          title: data.title,
          snippet_with_context: editorState,
          tags: tags,
          category: data.category,
          language: data.language
        })
        console.log(resp)
        setTags([])
        setEditorState('')
        form.reset()
      } catch (error) {
        console.log(error)
      }
  
    }
   
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className='space-y-0.5'>
              <FormLabel className='uppercase text-xs font-semibold text-neutral-600'>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} 
                className='input_style shadow-sm border-neutral-400'
                />
              </FormControl>
              <FormMessage className='font-semibold text-xs ml-1' />
            </FormItem>
          )}
        />
         <div className="flex gap-3 items-center justify-between ">
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-0.5 mt-2 ">
                <FormLabel className='uppercase text-xs font-semibold text-neutral-600'>Language</FormLabel>
                <Popover>
                  <PopoverTrigger asChild className="shadow-sm border-neutral-400">
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[150px] sm:w-[200px] justify-between ",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? languages.find(
                              (language) => language.value === field.value
                            )?.label
                          : "Select language"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[160px] sm:w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search language..." />
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("language", language.value)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage className='font-semibold text-xs ml-1' />
              </FormItem>
            )}
          />
            <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className='space-y-0.5 w-full'>
              <FormLabel className='uppercase text-xs font-semibold text-neutral-600'>Categories</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="input_style shadow-sm border-neutral-400">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="error">Error</SelectItem>
                  <SelectItem value="bug">Bug</SelectItem>
                  <SelectItem value="enhancement">Enhancement</SelectItem>
                  <SelectItem value="newbie">newbie</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className='font-semibold text-xs ml-1'/>
            </FormItem>
          )}
        />
        
        </div>
        <div className="space-y-0.5">
        <FormLabel className='uppercase text-xs font-semibold text-neutral-600'>Description and Code snippet</FormLabel>

        <Markdown editorState={editorState} setEditorState={setEditorState} />
        </div>

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className='space-y-0.5'>
              <FormLabel className='uppercase text-xs font-semibold text-neutral-600'>Tags</FormLabel>
              <FormControl>
              <InputTag
                  {...field}
                  placeholder="Add tags ( you can only enter upto 5 tags )"
                  tags={tags}
                  className='sm:min-w-[450px]'
                  setTags={(newTags) => {
                  setTags(newTags);
                  }} 
                />
              </FormControl>
            </FormItem>
          )}
        />
       
        

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default SnippetForm
