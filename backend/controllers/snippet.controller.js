import Snippet from "../models/snippet.model.js";

export const test = (req, res) => {
    res.json(
        { message: "hello" },
    )
}
export const createSnippet = async(req, res) => {
    try {
        console.log(req.body)
        const snippet = await Snippet.create({
            title: 'ssasd',
            description:'sa',
            tags: ['wew','eq'],
            category: 'dvadv',
            language: 'avdad'
        });

        return res.status(201).json(snippet)
    } catch (error) {
        next(error)
    }
}