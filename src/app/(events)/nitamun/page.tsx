import Committees from "./(sections)/committees";
import Hero from "./(sections)/hero";
import Prize from "./(sections)/prize";
import Nitamun from "./(sections)/nitamun";
import PoweredBy from "./(sections)/powered-by";
import Partners from "./(sections)/partners";

export default function Page() {
  return (
    <>
      <Hero />
      <Committees />
      <Prize />
      <Nitamun />
      <Partners />
      <PoweredBy />
      <footer className="py-20 text-center tracking-tighter text-xl">
        MUNSOC NITA @ 2024
      </footer>
    </>
  )
}
