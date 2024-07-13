export default function test () {
    return (
      <div className="flex items-center justify-between bg-gray-300 py-10 px-16">
        <div>
          <img src="/ibaktor-logo.svg" alt="Ibaktor Logo" />
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 6v12" />
              <path d="M18 6H6" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-blue-700">Ibaktor</p>
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <span>Play</span>
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }