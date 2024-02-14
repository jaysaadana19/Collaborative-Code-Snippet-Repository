import mongoose from 'mongoose'

const snippetSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    snippet_with_context: {
        type: String,
        require: true,
    },
    tags: {
        type: Array,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    language: {
        type: String,
        require: true,
    },
},{ timestamps: true });

const Snippet = mongoose.model("Snippet", snippetSchema)

export default Snippet;