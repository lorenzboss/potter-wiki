import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const t = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold tracking-wider">{t.home.title}</h1>
      <p className="text-2xl tracking-wide uppercase">{t.home.description}</p>
      <p
        style={{ whiteSpace: "pre-wrap" }}
        className="text-gray-300 text-xl -tracking-wide text-center leading-relaxed"
      >
        {t.home.comment}
      </p>
    </main>
  );
}
