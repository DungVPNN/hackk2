import React from 'react'
import './Shop.scss'
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

export default function Shop() {
  return (
    <div className='header'>
        <div className='main-header'>
            <h1>Rikkei_Shop</h1>
        </div>
        <div className='input-header'>
            <input type="text" placeholder='Nhập để tìm kiếm' />
            <button>
            <IoSearch />
            </button>
        </div>
        <div className='cart-header'>
            <div className='item-header'>
        <FaShoppingCart />
            </div>
            Giỏ hàng
        </div>
        <div className='login-header'>
            Đăng Nhập
        </div>
        <div className='register-header'>
            Đăng kí
        </div>
    </div>
  )
}
