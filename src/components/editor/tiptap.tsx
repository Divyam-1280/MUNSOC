'use client'

import { BubbleMenu, useEditor, EditorContent } from '@tiptap/react'
import { Link as TipTapLink } from '@tiptap/extension-link'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'

import EditorMenu from './menu'
import { InsertBlogs } from '@/server/db/schema/blog'
import { useEditorContentStore } from '@/store/editorContent'
import { useSubmitToggleStore } from '@/store/canSubmit'
import BubbleMenuItems from './bubble-menu-items'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'

export type EditorProps = {
  session: any,
  blogObj?: InsertBlogs,
}

export default function Tiptap({ session, blogObj }: EditorProps) {
  const { editorContent, setEditorContent } = useEditorContentStore()
  const { setCanSubmit } = useSubmitToggleStore()

  const lowlight = createLowlight(common)
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Underline,
      TipTapLink.configure({
        openOnClick: false,
        autolink: true,
      })
    ],
    onCreate({ editor }) {
      setEditorContent(editor.getHTML())
    },
    content: blogObj?.content || '',
    onUpdate({ editor }) {
      let canUndo = editor.can().chain().focus().undo().run()
      setEditorContent(editor.getHTML());
      setCanSubmit(canUndo)
    },
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100, maxWidth: '678px', placement: 'top', }}>
        <BubbleMenuItems editor={editor} />
      </BubbleMenu>

      <div className="sticky max-sm:top-14 top-16 lg:top-14 max-w-2xl z-40">
        <EditorMenu editor={editor} />
      </div>
      <div className="border border-border mt-2 sm:mt-4 prose dark:prose-invert max-w-2xl px-4 py-2 prose-img:ml-[auto] prose-img:mr-[auto] space-y-2 bg-background flex-grow rounded-md shadow-md prose-a:underline prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:decoration-2 prose-a:decoration-primary/85 prose-blockquote:border-l-primary">
        <article className="sm:p-4 h-full">
          <EditorContent editor={editor} />
        </article>
      </div>
    </>
  )
}
