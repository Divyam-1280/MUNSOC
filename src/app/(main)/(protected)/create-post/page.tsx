import MetadataForm from "@/components/editor/metadata-form";
import Tiptap from "@/components/editor/tiptap";

export default async function CreatePost() {
  const { session } = await getUserAuth()
  if (session && session.user)
    return (
      <main className="mx-auto px-4 bg-secondary">
        <div className="max-lg:pt-4 md:flex max-lg:flex-wrap-reverse justify-center h-full main-height max-w-7xl mx-auto max-md:gap-y-4">
          <section className="lg:px-4">
            <Tiptap session={{ session }} />
          </section>
          <aside>
            <MetadataForm session={{ session }} />
          </aside>
        </div>
      </main>
    )
}
function getUserAuth(): { session: any; } | PromiseLike<{ session: any; }> {
  throw new Error("Function not implemented.");
}
