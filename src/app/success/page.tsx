/* eslint-disable react/no-unescaped-entities */
function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-50">
      <div className="bg-blue p-8 rounded-lg shadow-lg max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <svg
              className="w-8 h-8 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2l4-4m1-5a9 9 0 11-9 9 9 9 0 019-9z"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Email Sent Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Your message has been delivered. We'll get back to you soon.
        </p>
      </div>
    </div>
  );
}

export default SuccessPage;
