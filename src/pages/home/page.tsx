function IndustryCard({ title, desc, image, link }: IndustryProps) {
  return (
    <div className="relative min-w-[900px] h-[560px] rounded-2xl overflow-hidden shadow-xl">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />

      <div className="relative h-full flex flex-col justify-between p-10 text-white">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>

          <p className="text-base text-white/90 mt-2 max-w-md">
            {desc}
          </p>
        </div>

        <Link
          to={link}
          className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-semibold w-fit"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
