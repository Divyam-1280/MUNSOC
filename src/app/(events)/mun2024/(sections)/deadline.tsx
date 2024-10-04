import BlurFade from "@/components/ui/blur-fade";

export default function Deadline() {
  return (
    <section className="mt-14 max-w-[1370px] w-full mx-auto max-lg:px-6 h-full">
      <div className="flex flex-col items-center h-full gap-10">
        <BlurFade inView>
          <h1 className="text-4xl lg:text-[10rem] tracking-tighter text-center">So what are you waiting for? </h1>
          <h1 className="text-4xl lg:text-[10rem] tracking-tighter text-center">Registration Deadline: 2 November EOD</h1>
        </BlurFade>
      </div>
    </section>
  )
}

