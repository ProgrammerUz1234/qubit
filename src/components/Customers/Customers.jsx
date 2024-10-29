import React from 'react';import './Customers.css'import customer1 from './img/customer1.png'import customer2 from './img/customer2.png'import customer3 from './img/customer3.png'import customer4 from './img/customer4.png'import customer5 from './img/customer5.png'import customer6 from './img/customer6.png'import customer7 from './img/customer7.png'import customer8 from './img/customer8.png'const Customers = () => {    return (        <div className="Customers">            <span className={'heading'}>Trusted by world-class brands.</span>            <div className={'customers-container'}>                <img src={customer1} alt="png" className={'customer'}/>                <img src={customer2} alt="png" className={'customer'}/>                <img src={customer3} alt="png" className={'customer'}/>                <img src={customer4} alt="png" className={'customer'}/>                <img src={customer5} alt="png" className={'customer'}/>                <img src={customer6} alt="png" className={'customer'}/>                <img src={customer7} alt="png" className={'customer'}/>                <img src={customer8} alt="png" className={'customer'}/>            </div>            <a href="#" className={'ending'}>Meet our customers ></a>        </div>    )}export default Customers;