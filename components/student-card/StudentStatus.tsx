interface StudentStatusProps {
  status?: string | null;
}

export default function StudentStatus({
  status,
}: StudentStatusProps) {
  const currentStatus =
    status?.toLowerCase() ?? "active";

  const styles = {
    active: {
      label: "Active Student",
      dot: "bg-green-500",
      text: "text-green-400",
      border: "border-green-500/30",
      bg: "bg-green-500/10",
    },

    pending: {
      label: "Pending Verification",
      dot: "bg-yellow-500",
      text: "text-yellow-400",
      border: "border-yellow-500/30",
      bg: "bg-yellow-500/10",
    },

    suspended: {
      label: "Suspended",
      dot: "bg-red-500",
      text: "text-red-400",
      border: "border-red-500/30",
      bg: "bg-red-500/10",
    },
  };

  const style =
    styles[
      currentStatus as keyof typeof styles
    ] ?? styles.active;

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