import { redirect } from "next/navigation";
import { LoginPage } from "@/components/features/login/login-page";

export default function Home() {
  return redirect("/login");
}
