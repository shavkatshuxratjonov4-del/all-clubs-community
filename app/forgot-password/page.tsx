import AuthCard from "@/components/auth/AuthCard";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Reset Password"
      description="Enter your email to receive a password reset link."
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
}