import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language, languages } from '@/data/translations';

export function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang.code,
  }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (languages.some(l => l.code === langParam) ? langParam : 'en') as Language;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
