import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Create Account"
      description="Join TDAU All Clubs Community"
    >
      <RegisterForm />
    </AuthCard>
  );
}