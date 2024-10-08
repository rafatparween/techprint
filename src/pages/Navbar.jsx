import { Link } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';

const Navbar = () => {
  return (
    <nav className="border  shadow-2xl bg-gradient-to-br from-[#003366] to-[#006699] ">
      <div className="flex gap-5 items-center py-3">
        {/* <Link to="/">
          {' '}
          <PrintIcon sx={{ color: '#3730a3', fontSize: '3rem' }} />
        </Link> */}

        <ul className="flex gap-8 text-white">
          <Link to="/" className="hover:border border-[#3730a3] p-2 rounded">
            Home
          </Link>
          <Link
            to="/Offline"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Printer Offline
          </Link>
          <Link
            to="/Printer"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Printer Setup
          </Link>
          <Link
            to="/Scanner"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Scanner Setup
          </Link>
          <Link
            to="/privacypolicy"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Privacy PoLicy
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
