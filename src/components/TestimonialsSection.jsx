import TagLine from "./TagLine";

const TestimonialsSection = () => {
  return (
    <section className="flex items-center justify-center flex-col p-6">
      <TagLine>Testimonials</TagLine>
      <h2 className="text-4xl font-bold text-center mt-3 mb-8">
        What builders say about us
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
        {/* Cards */}
        {/* 1st Row of Cards */}
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/1.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The AI Form Builder has revolutionized the way we collect data.
                It's incredibly intuitive and has saved us countless hours of
                manual work. The dynamic form adjustments are a game-changer.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/2.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The AI-powered automation has revolutionized our operations,
                making form submissions faster, more accurate, and completely
                hassle-free, saving us countless hours of work.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/3.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                This powerful tool has streamlined data collection like never
                before. The intuitive interface, real-time updates, and smart
                form adjustments are truly remarkable and incredibly useful.
              </span>
            </p>
          </div>
        </div>

        {/* 2nd Row of Cards */}
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/4.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                With AI Form Builder, we’ve eliminated tedious manual data entry
                and errors. Its intelligent automation, advanced validation, and
                seamless integration have significantly improved our efficiency.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/5.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The ease of use, customizable templates, and real-time form
                customization make AI Form Builder an essential tool for our
                workflow. It’s a true game-changer for businesses of all sizes.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/6.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                We no longer struggle with form creation—AI Form Builder adapts
                dynamically to our needs, ensuring a smooth, efficient, and
                error-free data-gathering experience across multiple platforms.
              </span>
            </p>
          </div>
        </div>

        {/* 3rd Row of Cards */}
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/7.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                Thanks to AI Form Builder, we can now collect, validate, and
                process data effortlessly. It has simplified a once
                time-consuming task and enhanced our productivity like never
                before.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/8.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The adaptability and smart suggestions of AI Form Builder have
                significantly boosted our productivity. We no longer waste time
                on manual adjustments or fixing errors in our forms.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/9.png"
                className="w-16 h-16 rounded-full"
                alt="User_image"
              />
              <p className="font-semibold">User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                Creating, managing, and optimizing forms has never been this
                easy! The AI-driven features, predictive suggestions, and
                seamless user experience make everything incredibly efficient
                and user-friendly.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
