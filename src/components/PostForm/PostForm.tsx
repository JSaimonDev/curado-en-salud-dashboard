import { useEffect, useRef, useState } from "react";
import TextEditor from "./TextEditor";
import { getPost, createPost } from "../../services/postServices";

interface PostFormProps {
    id?: number
}


const PostForm = ({ id }: PostFormProps) => {
    const [altContent, setAltContent] = useState<string>()
    const [altFeatured, setAltFeatured] = useState<string>()
    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [subcategory, setSubcategory] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [tags, setTags] = useState<string>('')
    const featuredImageRef = useRef<HTMLInputElement>(null)
    const [defaultContent, setDefaultContent] = useState('')
    const contentRef = useRef('');

    useEffect(() => {
        const asyncGetPost = async () => {
            if (id) {
                const fetchedPost = await getPost(id)
                if (fetchedPost) {
                    setTitle(fetchedPost.title || '')
                    setCategory(fetchedPost.category.name || '')
                    setSubcategory(fetchedPost.subCategory || '')
                    setTags(fetchedPost.tags || '')
                    setDefaultContent(fetchedPost.content)
                }
            }
        }
        asyncGetPost()
    }, [id])

    let arrayTags: string[]
    if (tags) arrayTags = tags.split(/,\s*/)

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const formData = new FormData()
        title && formData.append('title', title)
        category && formData.append('category', category)
        subcategory && formData.append('subcategory', subcategory)
        description && formData.append('description', description)
        altContent && formData.append('altContent', altContent)
        altFeatured && formData.append('altFeaturedImage', altFeatured)
        formData.append('tags', JSON.stringify(arrayTags))
        contentRef && formData.append('content', contentRef.current)
        featuredImageRef.current && featuredImageRef.current.files && formData.append('featuredImage', featuredImageRef.current.files[0])

        createPost(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-greyLight2 rounded-2xl p-10 flex flex-col gap-4 border border-greyLight1 border-opacity-30">
            <div className="w-full">
                <div className="flex gap-4 w-full">
                    <label htmlFor='title'>Title</label>
                    <input id='title' onChange={e => setTitle(e.target.value)} value={title} className="w-full" />
                </div>
            </div>
            <div className="flex gap-8">
                <div className="basis-1/2 flex justify-between">
                    <label htmlFor='category'>Category</label>
                    <input id='category' onChange={e => setCategory(e.target.value)} value={category} />
                </div>
                <div className="basis-1/2 flex justify-between">
                    <label htmlFor='subCategory'>Subcategory</label>
                    <input id='subCategory' onChange={e => setSubcategory(e.target.value)} value={subcategory} />
                </div>
            </div>
            <div className="flex gap-4 w-full">
                <label>Description</label>
                <textarea className="w-full" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="flex gap-8">
                <div className="basis-1/2 flex justify-between">
                    <label htmlFor='tag'>Tag</label>
                    <input id='tag' onChange={(e) => setTags(e.target.value)} value={tags} />
                </div>
                <div className="basis-1/2">
                    <label htmlFor='featuredImage' className="block mb-2">Featured Image</label>
                    <input id='featuredImage' type="file" ref={featuredImageRef} className="block file:rounded-lg w-full text-sm text-gray-900 border
                 border-greyLight1 border-opacity-30 rounded-lg cursor-pointer file:bg-greyDark1 file:text-white file:border-0
                  focus:outline-none file:p-2 placeholder:pl-4 file:rounded-r-none backdrop:bg-white "/>
                </div>
            </div>
            <div className="flex gap-4 w-full">
                <label >Alt tag for featured image</label>
                <input className="w-full" onChange={(e) => setAltFeatured(e.target.value)} />
            </div>
            <div className="flex gap-4 w-full">
                <label>Alt tags for content images</label>
                <textarea className="w-full" onChange={(e) => setAltContent(e.target.value)} />
            </div>
            <div>
                <TextEditor defaultContent={defaultContent} contentRef={contentRef} />
            </div>
            <button type="submit" className="bg-main py-4 text-white font-bold rounded-lg">Enviar</button>
        </form>
    );
}

export default PostForm;