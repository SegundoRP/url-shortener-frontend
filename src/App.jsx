import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopUrls from './components/TopUrls';
import UrlForm from './components/UrlForm'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TopUrls />} />
          <Route path="/new" element={<UrlForm />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default App
