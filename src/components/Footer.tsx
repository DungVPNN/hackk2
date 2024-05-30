import React from 'react'
import './Footer.scss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (    
    <div className='footer'>
      <div className='main-footer'>
        <h3>Chăm sóc khách hàng</h3>
        <p>Trung tâm trợ giúp</p>
        <p>Hướng dẫn mua hàng</p>
      </div>
      <div className='main-footer'>
        <h3>Giới thiệu</h3>
        <p>Điều khoản</p>
        <p>Chính sách bảo mật</p>
        <p>Tuyển dụng</p>
      </div>
      <div className='main-footer'>
        <h3>Danh mục sản phẩm</h3>
        <p>Thời trang</p>
        <p>Đồ tiêu dùng</p>
        <p>Thiết bị điện tử</p>
        <p>Sách</p>
      </div>
      <div className='main-footer'>
        <h3>Theo dõi chúng tôi</h3>
        <p> <FaFacebook />Facebook</p>
        <p> <FaInstagram />Instagram</p>
        <p> <FaTwitter />Twitter</p>
      </div>
    </div>
  )
}
