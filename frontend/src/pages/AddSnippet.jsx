"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { InputTag } from "@/Components/forms/InputTag"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/Components/ui/textarea"
import Markdown from "@/Components/Editor/Markdown"
// import { toast } from "@/components/ui/use-toast"
 
const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
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

 
const AddSnippet = () => {
  const [tags, setTags] = useState([]);
  const [editorState, setEditorState] = useState("");

console.log(editorState)
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    language: z.string({
      required_error: "Please select a language.",
    }),
  })
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      languages: "",
    },
  })
 
  function onSubmit(data) {
    console.log(data, tags)
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className='space-y-0.5'>
              <FormLabel className='uppercase text-xs font-semibold text-neutral-600'>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} 
                className=''
                />
              </FormControl>
              <FormMessage className='font-semibold text-xs ml-1' />
            </FormItem>
          )}
        />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className='space-y-0.5'>
              <FormLabel className='uppercase text-xs font-semibold text-neutral-600'>Tags</FormLabel>
              <FormControl>
              <Textarea placeholder="Enter description" {...field} 
                className=''
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
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
                <PopoverContent className="w-[200px] p-0">
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
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
export default AddSnippet