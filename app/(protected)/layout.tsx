import { redirect } from "next/navigation";
import { getCurrentUser } from "../lib/auth/getCurrentUser";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  console.log(user)

  if (!user) {
    redirect("/login");
  }

  return <>{children}</>;
}