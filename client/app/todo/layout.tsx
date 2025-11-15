export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center md:w-3xl">
        {children}
      </div>
    </section>
  );
}
