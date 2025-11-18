export default function PrivacyPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-6 border-l-8 border-amber-400 pl-6">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              The BE AWARE project is committed to protecting your privacy and ensuring the security of your personal information. 
              This privacy policy explains how we collect, use, and protect your data in accordance with GDPR regulations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We only collect information that you voluntarily provide through our contact forms or email communications. 
              This may include your name, email address, organization, and message content.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">Under GDPR, you have the right to:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Access your personal data</li>
              <li>• Rectify inaccurate data</li>
              <li>• Request deletion of your data</li>
              <li>• Object to data processing</li>
              <li>• Data portability</li>
            </ul>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl">
            <p className="text-sm text-blue-900">
              <strong>Contact for privacy concerns:</strong> privacy@beaware-project.eu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
