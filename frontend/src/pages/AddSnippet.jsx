import SnippetForm from "@/components/forms/SnippetForm"
 
const AddSnippet = () => {
  return (
    <>
    <main className="w-full lg:max-w-2xl lg:min-w-[672px] h-full py-12 px-4 ml-5 space-y-6 overflow-scroll">
      <div className="space-y-1">
        <h3 className="text-3xl font-semibold text-neutral-700">Snippet submission form</h3>
        <p className="text-sm md:text-base text-neutral-600">Welcome! Whether you're sharing a quick tip, a clever solution, or a snippet from your latest project, we're excited to see what you've got.</p>
      </div>
      <SnippetForm />
    </main>
    </>
  )
}
export default AddSnippet