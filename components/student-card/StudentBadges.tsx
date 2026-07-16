interface StudentBadgesProps {
  points: number;
}

export default function StudentBadges({
  points,
}: StudentBadgesProps) {
  function getTier() {
    if (points >= 1000000) {
      return {
        title: "Pink Diamond",
        color: "text-pink-200",
        stars: 1,
        diamond: true,
      };
    }

    if (points >= 100000) {
      return {
        title: "Platinum",
        color: "text-zinc-100",
        stars: 5,
      };
    }

    if (points >= 25000) {
      return {
        title: "Gold",
        color: "text-yellow-400",
        stars: 5,
      };
    }

    if (points >= 5000) {
      return {
        title: "Silver",
        color: "text-zinc-300",
        stars: 5,
      };
    }

    return {
      title: "Bronze",
      color: "text-orange-500",
      stars: 5,
    };
  }

  const tier = getTier();

  return (
    <div className="flex flex-col items-center">

      <p
        className={`text-lg font-bold ${tier.color}`}
      >
        {tier.title}
      </p>

      {tier.diamond ? (

        <div className="mt-2 text-5xl">
          💎
        </div>

      ) : (

        <div className="mt-2 flex gap-1">

          {Array.from({
            length: tier.stars,
          }).map((_, index) => (
            <span
              key={index}
              className={`text-2xl ${tier.color}`}
            >
              ★
            </span>
          ))}

        </div>

      )}

      <p className="mt-3 text-sm text-zinc-400">
        {points.toLocaleString()} CP
      </p>

    </div>
  );
}