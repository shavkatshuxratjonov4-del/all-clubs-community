import ProfileForm from "@/components/profile/ProfileForm";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          My Profile
        </h1>

        <p className="mt-4 text-zinc-400">
          Keep your personal information up to date.
          This information will automatically be used
          when joining clubs, registering for events,
          and other university activities.
        </p>

      </div>

      <ProfileForm />

    </main>
  );
}