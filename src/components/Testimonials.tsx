const testimonials = [
  {
    name: "John Smith",
    position: "CEO, TechStart Inc.",
    initials: "JS",
    gradientClass: "bg-gradient-to-br from-blue-500 to-purple-600",
    testimonial: "SuperHattricks delivered our e-commerce platform on time and exceeded our expectations. The team is professional, responsive, and truly understands our business needs."
  },
  {
    name: "Maria Johnson",
    position: "CTO, FinTech Solutions",
    initials: "MJ",
    gradientClass: "bg-gradient-to-br from-green-500 to-teal-600",
    testimonial: "The mobile banking app they built for us is exceptional. The security features and user experience are top-notch. Highly recommend SuperHattricks for any fintech project."
  },
  {
    name: "David Lee",
    position: "Founder, CloudScale",
    initials: "DL",
    gradientClass: "bg-gradient-to-br from-purple-500 to-pink-600",
    testimonial: "SuperHattricks helped us build a scalable cloud management platform that handles millions of users. Their expertise in cloud technologies is unmatched."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with SuperHattricks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.gradientClass} rounded-full flex items-center justify-center text-white font-semibold text-lg`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                &quot;{testimonial.testimonial}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 