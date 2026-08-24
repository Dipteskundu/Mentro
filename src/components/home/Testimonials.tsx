import { testimonials } from "@/data";

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

const companyColors: Record<string, string> = {
  Stripe: "bg-purple-50 text-purple-700",
  Shopify: "bg-green-50 text-green-700",
  OpenAI: "bg-green-50 text-green-700",
  Figma: "bg-purple-50 text-purple-700",
  Netflix: "bg-red-50 text-red-700",
  Spotify: "bg-green-50 text-green-600",
  Microsoft: "bg-blue-50 text-blue-700",
  Airbnb: "bg-pink-50 text-pink-700",
};

export default function Testimonials() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          What Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
            Students
          </span>{" "}
          Say
        </h2>
        <p className="text-gray-500 text-center mt-3 max-w-xl mx-auto text-lg">
          Join thousands of learners who transformed their careers
        </p>
      </div>

      <div className="group relative mt-12">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicated.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[380px] mx-3"
            >
              <div className="bg-[#f8f9fc] p-7 rounded-2xl h-full flex flex-col hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-hover rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
                  </div>
                  <span className={`ml-auto px-2 py-0.5 text-[10px] font-semibold rounded-full shrink-0 ${(testimonial.company && companyColors[testimonial.company]) || "bg-gray-100 text-gray-600"}`}>
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
