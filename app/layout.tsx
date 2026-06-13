export const metadata = {
  title: "Parmana Systems",
  description: "Execution Authority Infrastructure for AI Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}