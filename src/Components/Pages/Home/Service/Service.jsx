import "./Service.css";
import "../HomeResponsive.css";
export default function Service() {
  const services = [
    {
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      title: "Fast And Free Delivery",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <i className="fa-solid fa-headset"></i>,
      title: "24/7 Customer Support",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <i className="fa-solid fa-shield-halved"></i>,
      title: "Money Back Guarantee",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="Service">
      <div className="container">
        <div className="row">
          {services.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
