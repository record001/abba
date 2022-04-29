import "./production.css";
import ProductionCard from "./ProductionCard";

/*
products: "https://alibaraka.pythonanywhere.com/api/products/"
questions: "https://alibaraka.pythonanywhere.com/api/questions/"
stories: "https://alibaraka.pythonanywhere.com/api/stories/"
*/

export default function Production() {
  return (
    <section className="production">
      <h2 className="production__title">our production</h2>
      <p className="production__text">
        "Your work is going to fill a large part of your life, and the only way
        to be truly satisfied is to do what you believe is great work]
      </p>

      <div className="production__wrapper">
        
       <ProductionCard />
        
      </div>
    </section>
  );
}
