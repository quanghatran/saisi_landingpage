import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Wrapper, TurnIn, FadeIn } from '../../assets/styles';
import logo from '../../assets/images/logo.png';
import Search from '../Search';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [dropDown, setDropDown] = useState(null);

  const handleClickMenuBar = () => {
    setShowLinks(!showLinks);
  };

  const handleClickLink = () => {
    setShowLinks(false);
  };

  const HandleMouseEnter = (id) => {
    setDropDown(id);
  };

  const HandleMouseLeave = () => {
    setDropDown(null);
  };

  return (
    <Container>
      {showLinks ? (
        <Overlay onClick={handleClickMenuBar}>
          <i className='fas fa-times'></i>
        </Overlay>
      ) : (
        ''
      )}
      <StyledWrapper>
        <Nav>
          <LeftSide>
            <div id={showLinks ? 'hidden' : ''}>
              <Dropdown>
                <Header>
                  <Link onClick={() => handleClickLink()} to='/'>
                    TRANG CHỦ
                  </Link>
                </Header>
              </Dropdown>
              <Dropdown>
                <Header>
                  <Link
                    to='#'
                    onMouseEnter={() => HandleMouseEnter(1)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    GIỚI THIỆU <i className='fas fa-angle-down'></i>
                  </Link>
                </Header>
                {dropDown === 1 ? (
                  <DropdownMenu
                    onMouseEnter={() => HandleMouseEnter(1)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    <DropdownItem>
                      <Link onClick={handleClickLink} to='/ve-satsi'>
                        GIỚI THIỆU VỀ SATSI
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        onClick={handleClickLink}
                        to='/gioi-thieu-minh-triet-nhan-sinh'
                      >
                        MINH TRIẾT NHÂN SINH
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  ''
                )}
              </Dropdown>
              <Dropdown>
                <Header>
                  <Link
                    to='#'
                    onMouseEnter={() => HandleMouseEnter(2)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    DU HỌC<i className='fas fa-angle-down'></i>
                  </Link>
                </Header>
                {dropDown === 2 || dropDown === 6 || dropDown === 7 ? (
                  <DropdownMenu
                    onMouseEnter={() => HandleMouseEnter(2)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    <DropdownItem>
                      <Link
                        to='#'
                        onMouseEnter={() => HandleMouseEnter(6)}
                        onMouseLeave={() => HandleMouseLeave()}
                      >
                        DU HỌC NGHỀ ĐỨC
                        <i
                          className='fas fa-angle-right'
                          style={{ marginLeft: '10px' }}
                        ></i>
                      </Link>
                      {dropDown === 6 ? (
                        <DropRightMenu
                          // style={{ marginTop: "-5rem" }}
                          onMouseEnter={() => HandleMouseEnter(6)}
                          onMouseLeave={() => HandleMouseLeave()}
                        >
                          <DropRightItem>
                            <Link
                              onClick={handleClickLink}
                              to='/cac-nganh-tuyen-sinh'
                            >
                              CÁC NGÀNH TUYỂN SINH
                            </Link>
                          </DropRightItem>
                          <DropRightItem>
                            <Link onClick={handleClickLink} to='/lo-trinh'>
                              LỘ TRÌNH DU HỌC
                            </Link>
                          </DropRightItem>
                          <DropRightItem>
                            <Link
                              onClick={handleClickLink}
                              to='/hoat-dong-hoc-vien'
                            >
                              HOẠT ĐỘNG HỌC VIÊN
                            </Link>
                          </DropRightItem>
                        </DropRightMenu>
                      ) : (
                        ''
                      )}
                    </DropdownItem>
                    <DropdownItem>
                      {/* <Link onClick={handleClickLink} to='#'>
												DU HỌC NGHỀ ÚC
											</Link> */}
                      <Link
                        to='#'
                        onMouseEnter={() => HandleMouseEnter(7)}
                        onMouseLeave={() => HandleMouseLeave()}
                      >
                        DU HỌC ÚC
                        <i
                          className='fas fa-angle-right'
                          style={{ marginLeft: '10px' }}
                        ></i>
                      </Link>
                      {dropDown === 7 ? (
                        <DropRightMenu
                          // style={{ marginTop: "-5rem" }}
                          onMouseEnter={() => HandleMouseEnter(7)}
                          onMouseLeave={() => HandleMouseLeave()}
                        >
                          <DropRightItem>
                            <Link
                              onClick={handleClickLink}
                              to='/chuong-tring-visa-462'
                            >
                              CHƯƠNG TRÌNH VISA 462
                            </Link>
                          </DropRightItem>
                          <DropRightItem>
                            <Link onClick={handleClickLink} to='#'>
                              DU HỌC ĐẠI HỌC
                            </Link>
                          </DropRightItem>
                          <DropRightItem>
                            <Link onClick={handleClickLink} to='#'>
                              DU HỌC THẠC SĨ
                            </Link>
                          </DropRightItem>
                        </DropRightMenu>
                      ) : (
                        ''
                      )}
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  ''
                )}
              </Dropdown>
              {/* <Dropdown>
								<Header>
									<Link
										to='#'
										onMouseEnter={() => HandleMouseEnter(3)}
										onMouseLeave={() => HandleMouseLeave()}>
										HỌC NGHỀ - KHỞI NGHIỆP
										<i className='fas fa-angle-down'></i>
									</Link>
								</Header>
								{dropDown === 3 ? (
									<DropdownMenu
										onMouseEnter={() => HandleMouseEnter(3)}
										onMouseLeave={() => HandleMouseLeave()}>
										<DropdownItem>
											<Link
												onClick={handleClickLink}
												to='/du-hoc-nganh-hang-khong'>
												NGÀNH HÀNG KHÔNG
											</Link>
										</DropdownItem>
									</DropdownMenu>
								) : (
									""
								)}
							</Dropdown> */}
              <Dropdown>
                <Header>
                  <Link onClick={handleClickLink} to='/du-hoc-nganh-hang-khong'>
                    NGÀNH HÀNG KHÔNG
                  </Link>
                </Header>
              </Dropdown>
              <Dropdown>
                <Header>
                  <Link
                    to='#'
                    onMouseEnter={() => HandleMouseEnter(4)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    ĐÀO TẠO<i className='fas fa-angle-down'></i>
                  </Link>
                </Header>
                {dropDown === 4 || dropDown === 8 ? (
                  <DropdownMenu
                    onMouseEnter={() => HandleMouseEnter(4)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    <DropdownItem>
                      <Link onClick={handleClickLink} to='/dao-tao-tieng-anh'>
                        ĐÀO TẠO TIẾNG ANH
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link onClick={handleClickLink} to='/dao-tao-tieng-duc'>
                        ĐÀO TẠO TIẾNG ĐỨC
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link onClick={handleClickLink} to='/dao-tao-truc-tuyen'>
                        ĐÀO TẠO TRỰC TUYẾN
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        onClick={handleClickLink}
                        to='/tt-phat-trien-nang-luc'
                      >
                        TT PHÁT TRIỂN NĂNG LỰC
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  ''
                )}
              </Dropdown>
              <Dropdown>
                <Header>
                  <Link
                    to='#'
                    onMouseEnter={() => HandleMouseEnter(9)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    KHOA HỌC & CÔNG NGHỆ<i className='fas fa-angle-down'></i>
                  </Link>
                </Header>
                {dropDown === 9 ? (
                  <DropdownMenu
                    onMouseEnter={() => HandleMouseEnter(9)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    <DropdownItem>
                      <Link
                        onClick={handleClickLink}
                        to='/phong-học-thong-minh'
                      >
                        PHÒNG HỌC THÔNG MINH
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  ''
                )}
              </Dropdown>
              <Dropdown>
                <Header>
                  {/* <Link onClick={handleClickLink} to='/tin-tuc'>
										TIN TỨC
									</Link> */}

                  <Dropdown>
                    <Header>
                      <Link
                        to='#'
                        onMouseEnter={() => HandleMouseEnter(10)}
                        onMouseLeave={() => HandleMouseLeave()}
                      >
                        TIN TỨC<i className='fas fa-angle-down'></i>
                      </Link>
                    </Header>
                    {dropDown === 10 ? (
                      <DropdownMenu
                        onMouseEnter={() => HandleMouseEnter(10)}
                        onMouseLeave={() => HandleMouseLeave()}
                      >
                        <DropdownItem>
                          <Link onClick={handleClickLink} to='/tin-tuc'>
                            TIN TỨC - SỰ KIỆN
                          </Link>
                        </DropdownItem>

                        <DropdownItem>
                          <Link onClick={handleClickLink} to='#'>
                            LỘ TRÌNH DU HỌC
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link onClick={handleClickLink} to='#'>
                            HOẠT ĐỘNG HỌC VIÊN
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link
                            onClick={handleClickLink}
                            to='du-hoc-Uc-2021-cung-Satsi'
                          >
                            DU HỌC ÚC CÙNG SATSI
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link
                            onClick={handleClickLink}
                            to='/van-phong-dai-dien-satsi-tai-Uc'
                            style={{ lineHeight: '1.7' }}
                          >
                            VĂN PHÒNG ĐẠI DIỆN SATSI TẠI ÚC
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    ) : (
                      ''
                    )}
                  </Dropdown>
                </Header>
              </Dropdown>
              <Dropdown>
                <Header>
                  <Link
                    to='#'
                    onMouseEnter={() => HandleMouseEnter(5)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    TUYỂN DỤNG<i className='fas fa-angle-down'></i>
                  </Link>
                </Header>
                {dropDown === 5 ? (
                  <DropdownMenu
                    onMouseEnter={() => HandleMouseEnter(5)}
                    onMouseLeave={() => HandleMouseLeave()}
                  >
                    <DropdownItem>
                      <Link onClick={handleClickLink} to='/tuyen-nhan-su'>
                        TUYỂN NHÂN SỰ
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        onClick={handleClickLink}
                        to='/tuyen-nhan-su/dang-ky-ctv'
                      >
                        ĐĂNG KÝ CỘNG TÁC VIÊN
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  ''
                )}
              </Dropdown>
              <Dropdown>
                <Header>
                  <Link onClick={handleClickLink} to='/lien-he'>
                    LIÊN HỆ
                  </Link>
                </Header>
              </Dropdown>
            </div>
            <button onClick={handleClickMenuBar}>
              <i className='fas fa-bars'></i>
            </button>
          </LeftSide>
          <StyledLogo>
            <Link to='/'>
              <img src={logo} alt='Logo Satsi' />
            </Link>
          </StyledLogo>
          <Search />
        </Nav>
      </StyledWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  position: sticky;
  top: -1px;
  z-index: 2;
  box-shadow: 0 1px 4px black;
  @media screen and (max-width: 1129px) {
    background-color: ${(props) => props.theme.colors.text};
    top: 0;
  }
`;

const StyledWrapper = styled(Wrapper)`
  @media screen and (max-width: 1129px) {
    width: 97%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  @media screen and (max-width: 1264px) {
    height: 5.8rem;
  }
`;

const LeftSide = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 1129px) {
      display: none;
    }
  }

  & #hidden {
    display: flex;
    animation: ${TurnIn} 0.8s ease-in;

    @media screen and (max-width: 1129px) {
      overflow: auto;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 28rem;
      background-color: ${(props) => props.theme.colors.main};
      opacity: 0.9;
      z-index: 100;
      a {
        letter-spacing: 0.1rem;
        font-size: 1.5rem;
        padding: 2rem 2rem;
      }
    }
  }

  & div a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }

  & div a:hover {
    background-color: #952b0b;
  }

  & button {
    cursor: pointer;
    border: none;
    display: none;
    @media screen and (max-width: 1129px) {
      display: inline-block;
    }

    & i:hover {
      opacity: 0.6;
    }
  }

  & button i {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.main};
  }
`;

const Dropdown = styled.div`
  position: relative;
  @media screen and (max-width: 1129px) {
    width: 100%;
  }
`;

const Header = styled.div`
  margin-right: 1.8rem;
  letter-spacing: 0.1px;
  a {
    display: inline-block;
    padding: 1.8rem 0.2rem 1.8rem;
    font-size: 1.3rem;
    font-weight: 500;
  }

  i {
    margin-left: 1rem;
  }

  @media screen and (max-width: 1216px) {
    margin-right: 1.8rem;
    a {
      padding: 1.8rem 0 1.8rem;
    }
  }

  @media screen and (max-width: 1129px) {
    margin: 0;
    a {
      width: 100%;
    }
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  list-style-type: none;
  background: ${(props) => props.theme.colors.main};
  min-width: 24rem;
  border-radius: 0 0 0.4rem 0.4rem;
  // overflow: hidden;
  @media screen and (max-width: 1129px) {
    position: relative;
    min-width: 100%;
    background-color: #703a12;
  }
`;
const DropdownItem = styled.li`
  a {
    letter-spacing: 0.04rem;
    width: 100%;
    padding: 1.6rem 2rem;
    display: inline-block;
    color: red;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1129px) {
    a {
      width: 100%;
    }
  }
`;

const DropRightMenu = styled.ul`
  position: absolute;
  list-style-type: none;
  background: ${(props) => props.theme.colors.main};
  overflow: hidden;
  min-width: 24rem;
  margin-top: -5rem;
  right: -100%;

  border-radius: 0 0 0.4rem 0.4rem;
  @media screen and (max-width: 1129px) {
    position: relative;
    overflow: visible;
    margin-top: 0;
    right: 0;
    overflow: hidden;

    min-width: 100%;
    background-color: #703a12;
  }
`;

const DropRightItem = styled.li`
  a {
    letter-spacing: 0.04rem;
    width: 100%;
    padding: 1.6rem 2rem;
    display: inline-block;
    color: blue;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1129px) {
    a {
      width: 100%;
    }
  }
`;

const StyledLogo = styled.div`
  display: none;
  position: absolute;
  @media screen and (max-width: 1129px) {
    display: inline-block;
    left: calc(50% - 5.5rem);
  }
`;

const Overlay = styled.div`
  animation: ${FadeIn} 0.8s ease-out;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  i {
    z-index: 100;
    position: fixed;
    color: ${(props) => props.theme.colors.main};
    top: 0.5rem;
    right: 1rem;
    font-size: 3rem;
    opacity: 0.8;
    cursor: pointer;
  }
`;
export default Navbar;
