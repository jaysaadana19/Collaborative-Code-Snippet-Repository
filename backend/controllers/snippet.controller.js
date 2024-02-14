import Snippet from "../models/snippet.model.js";
export const createSnippet = async(req, res) => {
    try {
        const snippet = await Snippet.create({
            title: req.body.title,
            snippet_with_context:req.body.snippet_with_context,
            tags: req.body.tags,
            category: req.body.category,
            language: req.body.language
        });

        return res.status(201).json(snippet)

    } catch (error) {
        next(error)
    }
}