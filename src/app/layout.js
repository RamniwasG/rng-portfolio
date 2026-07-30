import "./globals.css";

export const metadata = {
  title: "RamniwasG | Senior Engineer",
  description:
    "A polished personal portfolio showcasing projects, experience, skills, and contact details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
