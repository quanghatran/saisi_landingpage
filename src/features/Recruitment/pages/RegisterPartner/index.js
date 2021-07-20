import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Wrapper } from '../../../../assets/styles';
import checked from '../../../../assets/images/checked.png';

const RegisterPartner = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [presenter, setPresenter] = useState('');
  const [phonePresenter, setPhonePresenter] = useState('');
  const [codeCompany, setCodeCompany] = useState('');
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState(false);
  const [ShowPopup, setShowPopup] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inforCustomer = {
      Name: name,
      PhoneNumber: phoneNumber,
      Email: email,
      Adress: address,
      Company: company,
      Presenter: presenter,
      PhonePresenter: phonePresenter,
      CodeCompany: codeCompany,
    };

    fetch(`${process.env.REACT_APP_API_URL_ANA}CTV`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inforCustomer),
      follow: 'redirect',
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Đăng ký thất bại');
        }
        return res.json();
      })
      .then((data) => {
        setResult(data);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setCompany('');
        setPresenter('');
        setPhonePresenter('');
        setCodeCompany('');

        if (data.status === 1) {
          setPopup(true);
          setError(false);
        } else if (data.status === 0) {
          setError(true);
        }

        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      })
      .catch((e) => {
        setResult(e);
        setError(true);
      });
  };

  return (
    <StyledWrapper>
      <Title>
        <h1>ĐĂNG KÝ THAM GIA CỘNG TÁC VIÊN</h1>
      </Title>
      <form id='contactForm' onSubmit={(e) => handleSubmit(e)}>
        {error ? (
          <div className='form-row .error'>
            <div className='input-data alert alert-danger' role='alert'>
              {result.result}
            </div>
          </div>
        ) : (
          ''
        )}
        <div className='form-row'>
          <div className='input-data'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Họ và Tên</label>
          </div>
          <div className='input-data'>
            <input
              type='number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <label>Số điện thoại</label>
          </div>
          <div className='input-data'>
            <input
              type='text'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
        </div>
        <div className='form-row'>
          <div className='input-data'>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label>Địa chỉ liên lạc</label>
          </div>
        </div>
        <div className='form-row'>
          <div className='input-data'>
            <input
              type='text'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <label>Đơn vị công tác hiện tại</label>
          </div>
        </div>
        <div className='form-row'>
          <div className='input-data'>
            <input
              type='text'
              value={presenter}
              onChange={(e) => setPresenter(e.target.value)}
              required
            />
            <label>Họ và Tên người giới thiệu</label>
          </div>
          <div className='input-data'>
            <input
              type='number'
              value={phonePresenter}
              onChange={(e) => setPhonePresenter(e.target.value)}
              required
            />
            <label>Số điện thoại người giới thiệu</label>
          </div>
          <div className='input-data'>
            <input
              type='text'
              value={codeCompany}
              onChange={(e) => setCodeCompany(e.target.value)}
              required
            />
            <label>Mã số chi nhánh</label>
          </div>
        </div>
        <div className='form-row'>
          <div className='input-data description'>
            <h3>Lưu ý: </h3>
            <h4>
              <i>
                * Vui lòng nhập đúng họ tên và số điện thoại người giới thiệu.
              </i>
            </h4>
            <h4>
              <i>* Mã cộng tác viên chỉ hiển thị 1 lần.</i>
            </h4>
            <h4>
              <i>
                {' '}
                * Trong trường hợp bạn chưa có mã số chi nhánh hoặc mất mã cộng
                tác viên, vui lòng liên hệ với chúng tôi tại{' '}
                <Link to='/lien-he'>đây</Link> để được hỗ trợ tốt nhất.
              </i>
            </h4>
          </div>
        </div>
        <div className='form-row submit-btn'>
          <div className='input-data'>
            {ShowPopup ? (
              <input type='submit' value='Loading...' disabled />
            ) : (
              <input type='submit' value='ĐĂNG KÝ NGAY' />
            )}
          </div>
        </div>
        {popup ? (
          <>
            <div id='overlay' onClick={() => setPopup(false)}></div>
            <div id='popup'>
              <div className='cookiesContent' id='cookiesPopup'>
                <span className='close' onClick={() => setPopup(false)}>
                  ✖
                </span>
                <img src={checked} alt='success' />
                <p>Bạn đã đăng ký trở thành cộng tác viên thành công</p>
                <h2>Mã cộng tác viên của bạn là:</h2>
                <span className='accept'>{result.Code}</span>
                <h4 className='description'>
                  <i>* Mã cộng tác viên chỉ hiển thị 1 lần.</i>
                </h4>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Wrapper)`
  padding-bottom: 7rem;
  margin: 4rem auto 6rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);

  form {
    position: relative;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 7px;

    #overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 7px;
      background: rgba(245, 245, 245, 0.7);
      border: 2px solid rgb(245, 245, 245);
    }

    #popup {
      position: absolute;
      max-width: 400px;
      width: 100%;
      top: 10%;
      right: 0;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;

      .cookiesContent {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        color: #000;
        text-align: center;
        border-radius: 20px;
        border: 1px solid #e9ecef;
        padding: 30px 30px 70px;
        span.close {
          cursor: pointer;
          width: 30px;
          font-size: 20px;
          color: #c0c5cb;
          align-self: flex-end;
          background-color: transparent;
          border: none;
          margin-bottom: 10px;
        }
        img {
          width: 82px;
          margin-bottom: 15px;
        }
        p {
          margin-bottom: 40px;
          font-size: 18px;
        }
        h2 {
          font-weight: 300;
        }
        h4 {
          margin-top: 2rem;
        }
        span.accept {
          margin-top: 1rem;
          background-color: rgb(50, 186, 124);
          border: none;
          border-radius: 5px;
          width: 200px;
          padding: 14px;
          font-size: 16px;
          color: white;
          box-shadow: 0px 6px 18px -5px #7c7c7c;
        }
      }
    }

    .form-row {
      display: flex;
      margin: 2rem 0;
      @media screen and (max-width: 700px) {
        display: block;
      }
    }

    .error {
      margin: 0;
    }

    .alert {
      width: 100%;
      padding: 8px 16px;
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      margin: 0 2rem !important;
      /* margin-bottom: 12px; */
      font-size: 16px;
    }
    .alert-danger {
      background-color: rgba(248, 215, 218, 1);
      border-color: rgba(220, 53, 69, 1);
      color: rgba(114, 28, 36, 1);
    }

    .input-data {
      width: 100%;
      height: 4rem;
      margin: 1rem 2rem 1rem;
      position: relative;

      @media screen and (max-width: 700px) {
        width: auto;
        margin: 2rem;
      }

      input:focus ~ label,
      input:valid ~ label {
        transform: translateY(-2.4rem);
        color: ${(props) => props.theme.colors.main};
        opacity: 0.8;
        font-size: 1.4rem;
        transition: all 0.3s ease;
      }

      input,
      select {
        display: block;
        height: 100%;
        width: 100%;
        border: none;
        font-size: 1.6rem;
        border-bottom: 2px solid rgba(0, 0, 0, 0.12);
        outline: none;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        /* margin: 0; */
      }

      /* Firefox */
      input[type='number'] {
        -moz-appearance: textfield;
      }

      label {
        position: absolute;
        bottom: 1rem;
        font-size: 1.6rem;
        pointer-events: none;
      }

      select option {
        padding: 0 auto;
      }

      #success {
        background-color: #198754;
        z-index: 3;
      }
    }

    .input-alone {
      width: calc(50% - 4rem);
      @media screen and (max-width: 700px) {
        width: auto;
        margin: 2rem;
      }
    }

    .description {
      color: ${(props) => props.theme.colors.main} !important;
      /* margin-top: 2rem; */
      height: 100%;
      margin-bottom: 0;
      font-size: 1.2rem;
      h3 {
        margin-bottom: 1rem;
      }
      h4 {
        margin: 0.5rem 0;
      }
      a {
        color: blue;
      }
    }

    & > .submit-btn {
      height: 4.5rem !important;
      width: 25%;
      margin: 2rem auto 4rem;

      @media screen and (max-width: 700px) {
        width: 100%;
      }

      input {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.main};
        opacity: 0.9;
        color: ${(props) => props.theme.colors.text};
        border: 1px solid gray;
        border-radius: 6px;
      }

      input:hover {
        opacity: 0.7;
      }
    }
  }
`;

const Title = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.main};

  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
    margin: 2rem 2rem 3rem;
    @media screen and (max-width: 700px) {
      font-size: 2.5rem;
    }
  }
  /* p {
    font-size: ${(props) => props.theme.fontSize.p};
    color: #000 !important;
    margin: 2rem 2rem 3rem;
    @media screen and (max-width: 700px) {
      font-size: 1.4rem;
    }
  } */

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 2.8rem;
    }
  }

  @media screen and (max-width: 615px) {
    h1 {
      font-size: 1.8rem;
      margin: 0 1rem;
    }
  }
`;

export default RegisterPartner;
