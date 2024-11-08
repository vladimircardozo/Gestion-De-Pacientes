import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientsList';

function App() {
  return (
    <>
      <div className="container mx-auto pt-10">
        <h1 className="font-black text-5xl md:w-2/3 md:mx-auto mb-10">
        Seguimiento de Pacientes {""}
        <span className="text-indigo-700">Veterinaria</span>
        </h1>
        <div className='mt-12 md:flex'>
          <PatientForm />
          <PatientList />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
