"use client"

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Working with Sewna completely changed how I collaborate with designers. I was able to bring my dream bridal outfit to life exactly how I imagined it.",
      name: "Ananya Mehta",
      designation: "Bride-to-be | Sewna Customer",
      src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Sewna gave my small design studio a global reach. I’ve collaborated with clients across continents and built real relationships through custom fashion.",
      name: "Diego Alvarez",
      designation: "Independent Fashion Designer | Barcelona",
      src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The platform makes it so easy to connect with verified designers. Communication was seamless, and the final outfit quality blew me away!",
      name: "Priya Sharma",
      designation: "Fashion Enthusiast | Sewna User",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Sewna allows me to focus on creativity while handling all the logistics of client management. It’s the perfect place for designers to grow independently.",
      name: "Liam Brooks",
      designation: "Menswear Designer | London",
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "From the first sketch to the final stitch, my experience on Sewna was amazing. I got personalized updates and my outfit arrived exactly on time.",
      name: "Sofia Nguyen",
      designation: "Creative Director | Sewna Customer",
      src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-green-50 dark:from-black dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
            Real Stories. <br />
            <span className="text-[#00b67f]">Real Creations.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
            From dream outfits to designer breakthroughs — hear what our
            community says about transforming imagination into reality on Sewna.
          </p>
        </div>

        {/* Right Side Animated Testimonials */}
        <div className="flex-1 w-full">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
