import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthCard
      title="Login"
      description="Welcome back to TDAU All Clubs Community"
    >
      <LoginForm />
    </AuthCard>
  );
}