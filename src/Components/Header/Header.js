import { useNavigate } from 'react-router-dom';
import ExcelJS from 'exceljs';
import { useEffect,useState } from 'react';
import { saveAs } from 'file-saver';
import axios from 'axios';

const Header = () => {
  const [jsonData, setJsonData] = useState(null);

  const navigate = useNavigate();

  async function handleLogout() {
    try {
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/api/details`
        );
        setJsonData(response.data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  const convertToExcel = () => {
    if (!jsonData) return;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    // Convert JSON data to rows
    const rows = Object.values(jsonData);

    // Add headers
    const headers = Object.keys(jsonData);
    worksheet.addRow(headers);

    // Add data rows
    rows.forEach((row) => {
      const values = Object.values(row);
      worksheet.addRow(values);
    });

    // Generate Excel file
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(blob, 'data.xlsx');
    });
  };
  return (
    <nav className='navbar-expand-lg bg-body-tertiary d-flex justify-content-between p-2'>
      <div>
        <a
          href='https://www.nasa.gov/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/McDonald%27s_SVG_logo.svg/2095px-McDonald%27s_SVG_logo.svg.png'
            alt='React'
            width='65'
            height='65'
          />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>

      <div id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <div className='row'>
            <div className='pe-5'>
              <button
                type='button'
                onClick={convertToExcel}
                className='button excel-button'
              >
                Download Excel
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <button
                type='button'
                onClick={handleLogout}
                className='button logout-button'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
