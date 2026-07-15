import AuthCard from "@/components/auth/AuthCard";
import UpdatePasswordForm from "@/components/auth/UpdatePasswordForm";

export default function UpdatePasswordPage() {
  return (
    <AuthCard
      title="Update Password"
      description="Create a new password for your account."
    >
      <UpdatePasswordForm />
    </AuthCard>
  );
}