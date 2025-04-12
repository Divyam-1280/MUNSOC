import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";

export default async function AuthLayout({
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header />
      <div className="mt-12">
        Sorry we are currently in the process of migrating some dev stuff. It will take some time before you can actually create posts.
      </div>
      <Toaster />
    </>
  );
}
