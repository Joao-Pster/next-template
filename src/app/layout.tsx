import '@/styles/styles.scss';

export const metadata = {
  title: 'Mirage',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <head>
        <meta charSet='utf-8' />
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
