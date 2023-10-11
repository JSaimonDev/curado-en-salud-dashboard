import "quill/dist/quill.snow.css"
import Quill from 'quill'
import { useCallback, useEffect, useState } from "react";
import DOMPurify from 'dompurify'

const htmlToDelta = (html: string) => {
    const div = document.createElement('div');
    div.setAttribute('id', 'htmlToDelta');
    div.innerHTML = `<div id="quillEditor" style="display:none">${html}</div>`;
    document.body.appendChild(div);
    const quill = new Quill('#quillEditor', {
        theme: 'snow',
    });
    const delta = quill.getContents();
    const divHtmlToDelta = document.getElementById('htmlToDelta')
    divHtmlToDelta != null && divHtmlToDelta.remove();
    return delta;
}

interface getEditorProps {
    contentRef: React.MutableRefObject<string>
    defaultContent: string
}

const toolbarOptions = [
    ['link', 'image'],

    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'direction': 'rtl' }],

    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],

    ['clean']
];

const TextEditor = ({ defaultContent, contentRef }: getEditorProps) => {
    const [quill, setQuill] = useState<Quill>()



    const wrapperRef = useCallback((wrapper: { innerHTML: string; append: (arg0: HTMLDivElement) => void; } | null) => {
        if (wrapper == null) return
        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q = new Quill(editor, { modules: { toolbar: toolbarOptions }, theme: 'snow' })
        const defaultDelta = htmlToDelta(defaultContent)
        if (defaultContent) q.setContents(defaultDelta)
        setQuill(q)
    }, [defaultContent])

    useEffect(() => {
        quill != undefined && quill.on('text-change', (_delta, _oldDelta, source) => {
            if (source == 'user') contentRef.current = DOMPurify.sanitize(quill.root.innerHTML);
        })
    }, [contentRef, quill])


    return (
        <div>
            <div id='editor' ref={wrapperRef}></ div>
        </div>
    );
}

export default TextEditor;