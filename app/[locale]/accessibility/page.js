export default function AccessibilityPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-6 border-l-8 border-amber-400 pl-6">
          Accessibility Statement
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Commitment to Accessibility</h2>
            <p className="text-gray-700 leading-relaxed">
              The BE AWARE project is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </div>

          {/* Conformance Status */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Conformance Status</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <a href="https://www.w3.org/WAI/WCAG21/quickref/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                Web Content Accessibility Guidelines (WCAG)
              </a> defines requirements for designers and developers to improve accessibility for people with disabilities. 
              It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
              <p className="font-semibold text-blue-900">
                This website is fully conformant with WCAG 2.1 Level AA.
              </p>
              <p className="text-sm text-blue-800 mt-2">
                Fully conformant means that the content fully conforms to the accessibility standard without any exceptions.
              </p>
            </div>
          </div>

          {/* Measures */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Accessibility Measures</h2>
            <p className="text-gray-700 mb-4">The BE AWARE project takes the following measures to ensure accessibility:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Include accessibility as part of our mission statement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Integrate accessibility into our procurement practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Provide continual accessibility training for our staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Assign clear accessibility goals and responsibilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Employ formal accessibility quality assurance methods</span>
              </li>
            </ul>
          </div>

          {/* Technical Specifications */}
          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border-l-4 border-amber-500 shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Technical Specifications</h2>
            <p className="text-gray-700 mb-4">
              Accessibility of this website relies on the following technologies to work with the particular 
              combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• HTML5</li>
              <li>• WAI-ARIA</li>
              <li>• CSS3</li>
              <li>• JavaScript</li>
            </ul>
            <p className="text-gray-700 mt-4">
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>
          </div>

          {/* Features */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Keyboard Navigation</h3>
                <p className="text-sm text-gray-700">Full keyboard accessibility for all interactive elements</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Screen Reader Support</h3>
                <p className="text-sm text-gray-700">Semantic HTML and ARIA labels for assistive technologies</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Color Contrast</h3>
                <p className="text-sm text-gray-700">Minimum 4.5:1 contrast ratio for all text</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Responsive Design</h3>
                <p className="text-sm text-gray-700">Works on all devices and screen sizes</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Text Alternatives</h3>
                <p className="text-sm text-gray-700">Alt text for all meaningful images</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Clear Structure</h3>
                <p className="text-sm text-gray-700">Logical heading hierarchy and page structure</p>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Feedback</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We welcome your feedback on the accessibility of the BE AWARE website. 
              Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a href="mailto:accessibility@beaware-project.eu" className="text-blue-600 hover:text-blue-800 underline">accessibility@beaware-project.eu</a></li>
              <li><strong>Phone:</strong> +32 2 123 45 67</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We try to respond to feedback within 5 business days.
            </p>
          </div>

          {/* Compliance */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Compliance with EU Standards</h2>
            <p className="text-gray-700 leading-relaxed">
              This website complies with:
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Directive (EU) 2016/2102</strong> - Web Accessibility Directive</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>EN 301 549</strong> - European Standard for Digital Accessibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>WCAG 2.1 Level AA</strong> - Web Content Accessibility Guidelines</span>
              </li>
            </ul>
          </div>

          {/* Date */}
          <div className="bg-blue-100 p-6 rounded-xl text-center">
            <p className="text-sm text-blue-900">
              <strong>This statement was last updated on:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
