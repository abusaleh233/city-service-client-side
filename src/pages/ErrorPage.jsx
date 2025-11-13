import React from 'react';
import { Home, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
 
  const goToHomepage = () => {
    alert('Navigation is working! (Check console)');
  };
  
  const alert = (message) => {
    const modal = document.getElementById('custom-modal');
    const modalMessage = document.getElementById('modal-message');
    
    if (modal && modalMessage) {
      modalMessage.textContent = message;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000); 
    }
  };

  return (
    <div className='w-11/12 mx-auto'>
        <title>Error-page</title>
         <div className="pb-5 mx-auto">
            <Navbar ></Navbar>
         </div>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      <script src="https://cdn.tailwindcss.com"></script>

      <div id="custom-modal" className="hidden fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded shadow-lg z-50 transition duration-300">
        <p id="modal-message" className="text-sm"></p>
      </div>

      
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-16 text-center max-w-lg w-full 
                      transform transition duration-500 hover:scale-[1.01] hover:shadow-3xl border border-gray-100">
        
        
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6 animate-bounce" />
        
       
        <h1 
          className="text-8xl md:text-9xl font-extrabold text-gray-800 tracking-wider mb-4"
        >
          404
        </h1>
        
       
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Page Not Found
        </h2>
        
        <Link to="/"> 
        <button 
          onClick={goToHomepage}
          className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-xl 
                     text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 
                     focus:ring-indigo-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5 mr-3" />
          Go to Homepage
        </button>

        </Link>
        

       
      </div>
    </div>

    <Footer></Footer>

    </div>

  );
};

export default ErrorPage;
