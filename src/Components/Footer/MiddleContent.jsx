import { Link } from 'react-router-dom';
import './Footer.css'
export default function MiddleContent() {
  let content = [
    {
      title: "Company",
      second: "About",
      third: "Careers",
      fourth: "Affiliates",
      fifth: "Blog",
      sixth: "Contact Us",
    },
    {
      title: "Shop",
      second: "New Arrivals",
      third: "Accessories",
      fourth: "Men",
      fifth: "Women",
      sixth: "Shop All",
    },
    {
      title: "Help",
      second: "Customer Service",
      third: "My Account",
      fourth: "Find a Store",
      fifth: "Legal & Privacy",
      sixth: "Contact",
      seventh: "Gift Card",
    },
  ];

  return (
    <>
      {content.map((item, index) => (
        <div key={index} className="col-xl col-lg-3 col-md-4">
          <div className="card">
            <div className="card-head">
              <h3>{item.title}</h3>
            </div>
            <div className="card-body">
              <ul>
                <li><Link className='footerLink' to=''>{item.second}</Link></li>
                <li><Link className='footerLink' to=''>{item.third}</Link></li>
                <li><Link className='footerLink' to=''>{item.fourth}</Link></li>
                <li><Link className='footerLink' to=''>{item.fifth}</Link></li>
                <li><Link className='footerLink' to=''>{item.sixth}</Link></li>
                {item.seventh && <li><Link className='footerLink' to=''>{item.seventh}</Link></li>}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
