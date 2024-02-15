import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, ChevronsUpDown, Loader, Loader2 } from "lucide-react"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
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
import { useState } from "react"
import { cn } from "@/lib/utils"
import Markdown from "@/components/Editor/Markdown"
import axios from "axios"
import InputTag from "./InputTag"
import { languages } from "@/lib/data"
import { categories } from "@/lib/data"
import { toast } from "sonner"
 

const SnippetForm = () => {
    const [tags, setTags] = useState([]);
    const [editorState, setEditorState] = useState("");
    const [loading, setLoading] = useState(false);
  
   {/* Form Schema using zod */}  
   
    const FormSchema = z.object({
      title: z.string().min(8, {
        message: "Username must be at least 8 characters."}),
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
   
    {/* submit function*/}

    const onSubmit = async(data) => {
      try {

        if(editorState.replace(/<[^>]*>/g,'').length < 8){
          toast('Snippet field must contain a least 8 characters.')
          return
        }
        setLoading(true)
        const resp = await axios.post('/api/snippet/create', {
          title: data.title,
          snippet_with_context: editorState,
          tags: tags,
          category: data.category,
          language: data.language
        })
        if(!resp.data){
          toast.error('Failed to create a post')
        }
        console.log(resp.data)
        toast("Post has been created successfully")
        setLoading(false)
        setTags([])
        setEditorState('')
        form.reset()
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
   
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-neutral-800">
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
          <section className="flex gap-3 items-center justify-between ">
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
                      {
                        categories.map((category) => (
                          <SelectItem key={category.label} value={category.value}>{category.label}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                  <FormMessage className='font-semibold text-xs ml-1'/>
                </FormItem>
              )}
            />
          
          </section>

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

        <div/> 
        <Button variant={'green'} className='w-full' type="submit">
          { loading ? <Loader2 className="animate-spin" /> : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}

export default SnippetForm
