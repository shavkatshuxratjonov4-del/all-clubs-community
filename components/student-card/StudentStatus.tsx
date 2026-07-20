interface StudentStatusProps {
  status?: string | null;
}

export default function StudentStatus({
  status,
}: StudentStatusProps) {
  const currentStatus = (status ?? "no_active_event").toLowerCase();

  const styles = {
    no_active_event: {
      label: "No Active Event",
      dot: "bg-slate-500",
      text: "text-slate-300",
      border: "border-slate-500/30",
      bg: "bg-slate-500/10",
    },

    registered: {
      label: "Registered",
      dot: "bg-blue-500",
      text: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
    },

    checked_in: {
      label: "Checked In",
      dot: "bg-emerald-500",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
    },

    attended: {
      label: "Attended",
      dot: "bg-purple-500",
      text: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/10",
    },
  };

  const style =
    styles[currentStatus as keyof typeof styles] ??
    styles.no_active_event;

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-semibold
        ${style.border}
        ${style.bg}
        ${style.text}
      `}
    >
      <span
        className={`
          h-2.5
          w-2.5
          rounded-full
          ${style.dot}
        `}
      />

      {style.label}
    </div>
  );
}