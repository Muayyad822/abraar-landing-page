import { useEffect, useState } from "react";
import { Calendar, Clock, Megaphone } from "lucide-react";

const Banner = () => {
  const earlyBirdDeadline = new Date("2025-09-15T23:59:59Z").getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = earlyBirdDeadline - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [earlyBirdDeadline]);

  return (
    <section className="bg-gray-900 text-white py-6 px-6 shadow-xl m-4 max-w-xl mx-auto relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center">
        <div className="flex flex-col justify-center items-center mx-auto mb-4">
          <Megaphone className="w-16 h-16 mx-4 animate-bounce" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            New Course Alert
          </h2>
        </div>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Enroll in our <span className="font-bold text-xl">Fiqh An-Nisā</span> course today for just{" "}
          <span className="font-bold text-xl">₦15,000</span> (early bird price). <br />
          Offer ends soon. 
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-lg text-center">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-sm">Days</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-lg text-center">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm">Hours</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-lg text-center">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-lg text-center">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://forms.gle/ZZXLwpRPpmQJM71e9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <Calendar className="w-5 h-5" />
          Enroll Now for ₦15,000
        </a>

        {/* Regular price note */}
        <div className="flex items-center justify-center">
          {/* <Clock className="w-4 h-4" /> */}
          <p className="mt-4 text-md opacity-80">
            Regular Price: ₦20,000 after Early Bird ends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;