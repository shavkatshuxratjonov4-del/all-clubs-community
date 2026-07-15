interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mb-8 text-center text-zinc-400">
          {description}
        </p>

        {children}

      </div>
    </main>
  );
}