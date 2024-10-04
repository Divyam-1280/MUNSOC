export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <div className="mt-12">
        {children}
      </div>
    </>
  );
}

