// app/_components/profile-header.tsx
interface ProfileHeaderProps {
  name: string;
  role: string;
}

export function ProfileHeader({ name, role }: ProfileHeaderProps) {
  return (
    <section className="rounded-2xl border border-border bg-panel p-6">
      <div className="font-hand text-6xl leading-none text-foreground sm:text-7xl">
        hello
      </div>
      <div className="mt-3 text-sm text-muted">
        {name} — {role}
      </div>
    </section>
  );
}