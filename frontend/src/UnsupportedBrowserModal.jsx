import React, { useEffect, useState } from 'react';
import { isIE, isOperaMini, isMobileSafari, browserName, browserVersion } from 'react-device-detect';

const UnsupportedBrowserModal = () => {
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    if (
      isIE ||
      isOperaMini ||
      (isMobileSafari && parseInt(browserVersion, 10) < 11) ||
      (browserName === 'Android Browser')
    ) {
      setUnsupported(true);
    }
  }, []);

  if (!unsupported) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Navegador No Compatible</h2>
        <p className="text-gray-700 mb-6">
          Estás usando un navegador que puede no ser compatible con todas las funcionalidades de esta web.
          Te recomendamos actualizar a una versión moderna de Chrome, Firefox, Edge o Safari.
        </p>
        <button
          onClick={() => setUnsupported(false)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full"
        >
          Entiendo
        </button>
      </div>
    </div>
  );
};

export default UnsupportedBrowserModal;
