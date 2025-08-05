export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About SuperHattricks
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team of developers, designers, and technology enthusiasts 
              dedicated to creating exceptional digital experiences. With years of experience 
              in the industry, we understand what it takes to build successful software solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to help businesses leverage technology to achieve their goals, 
              whether that&apos;s improving efficiency, reaching new customers, or creating innovative 
              products that make a difference.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Cutting-edge technologies and methodologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Transparent communication and collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 