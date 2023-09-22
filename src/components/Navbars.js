import {Link} from 'react-router-dom'
import React, { useState } from 'react'; 
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbars.css";
import Image from 'react-bootstrap/Image';
import logo from '../img/Logo14.png';
import ImageSlider from './Slider';
import { useEffect } from 'react';

const Navbars = () => {
    // สร้าง state ใหม่โดยใช้ useState
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
      setClicked(!clicked);
    }
      // ใช้ state เพื่อเปิด/ปิดเมนู dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  }

  // สร้างฟังก์ชันเพิ่มเพื่อปิดเมนู dropdown เมื่อคลิกที่ตำแหน่งอื่น ๆ
  const handleOutsideClick = (e) => {
    if (dropdownOpen && !e.target.closest('.dropdown-menu')) {
      setDropdownOpen(false);
    }
  }

  // เพิ่ม event listener เมื่อคลิกที่ตำแหน่งอื่น ๆ
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [dropdownOpen]);

  return (
    <>
      <nav>
        <div id="logo"><Link to='/'> <Image src={logo} style={{width:150, marginTop:-70,marginBottom:-55}} /></Link></div>
        
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li><Link to='/' className='active'>MU Life pass</Link></li>
            <li><Link to='/Event'>ประกาศความเป็นส่วนตัว</Link></li>
            <li><a href="#" onClick={handleDropdownClick}>
            ลิงค์ที่เกี่ยวข้อง <i className={`fas ${dropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </a>
            <ul className="dropdown-menu">
            <li><Link to='/FAQ' style={{fontSize:12}}>ช่องทางด้านการติดต่อประสานงานและการลงทะเบียนของนักศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/'style={{fontSize:12}}>กรอกทะเบียนประวัตินักศึกษา (E-Profile)</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/'style={{fontSize:12}}>พิมพ์แบบฟอร์มการบริการสุขภาพ</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/'style={{fontSize:12}}>ตรวจสอบสถานะการชำระเงิน</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/'style={{fontSize:12}}>ตรวจสอบรหัสประจำตัวนักศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/'style={{fontSize:12}}>ตารางสอน/กลุ่มการเรียนวิชาหมวดศึกษาทั่วไป</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/'style={{fontSize:12}}>ลงทะเบียนนักศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/'style={{fontSize:12}}>การจองหอพัก</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/'style={{fontSize:12}}>ข่าวสาร กยศ.</Link></li>
            </ul>
            </li>
            <li><a href="#" onClick={handleDropdownClick}>
            ดาวน์โหลดเอกสาร <i className={`fas ${dropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </a>
            <ul className="dropdown-menu">
            <li><Link to='/FAQ' style={{fontSize:12}}>คู่มือนักศึกษา 2566</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/' style={{fontSize:12}}>คู่มือแนะนำนักศึกษาใหม่ 2566</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/' style={{fontSize:12}}>ใบคำร้องทั่วไป</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/' style={{fontSize:12}}>ใบคำร้องสำหรับผู้ที่กำลังศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/' style={{fontSize:12}}>ใบคำร้องสำหรับผู้ที่สำเร็จศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/' style={{fontSize:12}}>หนังสือมอบอำนาจ</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/' style={{fontSize:12}}>ใบมอบอำนาจรับรหัสทำสัญญา e-contact</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/' style={{fontSize:12}}>ใบรับรองการชำระเงินนักศึกษาใหม่</Link></li>
            <NavDropdown.Divider />
            <li><Link to='/' style={{fontSize:12}}>แบบฟอร์มใบลา</Link></li>
            </ul>
            </li>
            <li><a href='http://www.student.mahidol.ac.th/portal/index.html' target='_blank'>Student Protal</a></li>
          </ul>
        </div>

        <div id="moblie" onClick={handleClick}> 
        <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      </nav>
      {/* <ImageSlider id="ImageSlider" /> */}
      {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">MULIFEPASS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link> <Link to='/' style={{textDecoration : 'none', color:'blue'}}>MU Life pass</Link></Nav.Link>
            <Nav.Link><Link to='/Event'>Event</Link></Nav.Link>
            <Nav.Link><Link to='/FAQ'>FAQ</Link></Nav.Link>
            <NavDropdown title="TEST" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">TEST</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

      
        </Navbar.Collapse>
      </Container>
    </Navbar>    */}
    </>
  )
}

export default Navbars