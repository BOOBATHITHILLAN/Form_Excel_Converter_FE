import { useFormik } from 'formik';
import axios from 'axios';
import './DetailList.css';
import { useState } from 'react';

function DetailsList() {
  const [timeValue, setTimeValue] = useState('');

  const formik = useFormik({
    initialValues: {
      NameoftheUPSI: '',
      InfoSharedBy: '',
      PANNumber1: '',
      InformationSharedInCapacity1: '',
      Designation1: '',
      PANNumber2: '',
      InformationSharedInCapacity2: '',
      Designation2: '',
      TypeofOrganization: '',
      NameoftheOrganization: '',
      DateofSharing: '',
      ParticularofInfoShared: '',
      PurposeofSharing: '',
      ModeofSharing: '',
      TimeofSharing: '',
    },
    onSubmit: async (values) => {
      values.TimeofSharing = timeValue;
      const result = await axios.post(
        `${process.env.REACT_APP_URL}/api/detailsnewform`,
        values
      );
      window.alert('🎉✨ Form Submitted Successfully! 🎉✨');
      window.location.reload();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='row' style={{ marginBottom: '20px' }}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Name of the UPSI:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              onChange={formik.handleChange}
              name='NameoftheUPSI'
              className='form-control'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='inputPassword' className='form-label'>
              Info Shared By:
            </label>
          </div>

          <div className='col-md-6'>
            <input
              type='text'
              onChange={formik.handleChange}
              name='InfoSharedBy'
              className='form-control'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='inputPassword' className='form-label'>
              PAN Number1:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              onChange={formik.handleChange}
              name='PANNumber1'
              className='form-control'
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Information Shared In Capacity 1:
            </label>
          </div>

          <div className='col-md-6'>
            <select
              className='form-select'
              onChange={formik.handleChange}
              name='InfoSharedwithrespectto'
              aria-label='.form-select-lg example'
            >
              <option defaultValue='None'>--- Select ---</option>
              <option value='Designated Person'>Designated Person</option>
              <option value='Insider'>Insider</option>
              <option value='UPSI Project'>UPSI Project</option>
            </select>
          </div>
        </div>

        <div className='row' style={{ marginTop: '15px' }}>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Designation 1:
            </label>
          </div>
          <div className='col-md-6'>
            <select
              className='form-select'
              onChange={formik.handleChange}
              name='InsiderTypes'
              aria-label='.form-select-lg example'
            >
              <option defaultValue='None'>--- Select ---</option>
              <option value='Director'>Director</option>
              <option value='Managing Director'>Managing Director</option>
              <option value='Independent Director'>Independent Director</option>
              <option value='CFO'>CFO</option>
              <option value='Company Secretary'>Company Secretary</option>
              <option value='Auditor'>Auditor</option>
              <option value='Company Secretary - In Practice'>
                Company Secretary - In Practice
              </option>
              <option value='Others'>Others</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Insider Signed Confidentiality Agreement:
            </label>
          </div>

          <div className='col-md-6'>
            <label
              htmlFor='text'
              className='form-label'
              style={{ color: 'red', whiteSpace: 'nowrap', marginTop: '10px' }}
            >
              No Confidentiality Agreement Signed
            </label>
          </div>
        </div>

        <div className='row' style={{ marginTop: '20px' }}>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Info Shared To:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              onChange={formik.handleChange}
              name='InfoSharedTo'
              className='form-control'
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='inputPassword' className='form-label'>
              PAN Number2:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              onChange={formik.handleChange}
              name='PANNumber2'
              className='form-control'
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Information Shared In Capacity 2:
            </label>
          </div>

          <div className='col-md-6'>
            <select
              className='form-select'
              onChange={formik.handleChange}
              name='InfoSharedwithrespectto'
              aria-label='.form-select-lg example'
            >
              <option defaultValue='None'>--- Select ---</option>
              <option value='Designated Person'>Designated Person</option>
              <option value='Insider'>Insider</option>
              <option value='UPSI Project'>UPSI Project</option>
            </select>
          </div>
        </div>

        <div className='row' style={{ marginTop: '15px' }}>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Designation 2:
            </label>
          </div>
          <div className='col-md-6'>
            <select
              className='form-select'
              onChange={formik.handleChange}
              name='InsiderTypes'
              aria-label='.form-select-lg example'
            >
              <option defaultValue='None'>--- Select ---</option>
              <option value='Director'>Director</option>
              <option value='Managing Director'>Managing Director</option>
              <option value='Independent Director'>Independent Director</option>
              <option value='CFO'>CFO</option>
              <option value='Company Secretary'>Company Secretary</option>
              <option value='Auditor'>Auditor</option>
              <option value='Company Secretary - In Practice'>
                Company Secretary - In Practice
              </option>
              <option value='Others'>Others</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Type of Organization:
            </label>
          </div>
          <div className='col-md-6'>
            <select
              className='form-select'
              onChange={formik.handleChange}
              name='TypeofOrganization'
              aria-label='.form-select-lg example'
            >
              <option defaultValue='None'>--- Select ---</option>
              <option value='Partnership'>Partnership</option>
              <option value='Individual'>Individual</option>
              <option value='Company'>Company</option>
            </select>
          </div>
        </div>
        <div className='row' style={{ marginTop: '15px' }}>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Name of the Organization:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              onChange={formik.handleChange}
              name='NameoftheOrganization'
              className='form-control'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Date of Sharing:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='date'
              id='date'
              onChange={formik.handleChange}
              name='DateofSharing'
              className='form-control'
            />
          </div>
        </div>
        <div className='row' style={{ marginTop: '15px' }}>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Particular of Info Shared:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              onChange={formik.handleChange}
              name='ParticularofInfoShared'
              className='form-control'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Purpose of Sharing:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              onChange={formik.handleChange}
              name='PurposeofSharing'
              className='form-control'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='text' className='form-label'>
              Mode of Sharing:
            </label>
          </div>
          <div className='col-md-6'>
            <select
              className='form-select'
              onChange={formik.handleChange}
              name='ModeofSharing'
              aria-label='.form-select-lg example'
            >
              <option defaultValue='None'>--- Select ---</option>
              <option value='Email'>Email</option>
              <option value='Physical'>Physical</option>
              <option value='Pendrive'>Pendrive</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label htmlFor='time' className='form-label'>
              Time of Sharing:
            </label>
          </div>
          <div className='col-md-6'>
            <input
              type='time'
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
              name='TimeofSharing'
              className='form-control'
            />
          </div>
        </div>
      </div>
      <div className='row' style={{ marginTop: '20px' }}></div>

      <div className='row'>
        <div className='col-md-6'>
          <button type='submit'>SUBMIT</button>
        </div>
      </div>

      <div className='row' style={{ marginTop: '20px' }}></div>
    </form>
  );
}

export default DetailsList;
