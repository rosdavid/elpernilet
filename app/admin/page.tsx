import { AdminPanel } from "@/components/admin-panel";
import { requireAuth } from "@/lib/auth";

export default async function AdminPage() {
  await requireAuth();
  return <AdminPanel />;
}
