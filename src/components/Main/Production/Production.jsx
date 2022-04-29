import "./production.css";
import ProductionCard from "./ProductionCard";
import pro1 from "../../../images/pro1.svg";
import pro2 from "../../../images/pro2.svg";
import pro3 from "../../../images/pro3.svg";
import pro4 from "../../../images/pro4.svg";
import pro5 from "../../../images/pro5.svg";
import pro6 from "../../../images/pro6.svg";

export default function Production() {
  return (
    <section className="production">
      <h2 className="production__title">our production</h2>
      <p className="production__text">
        "Your work is going to fill a large part of your life, and the only way
        to be truly satisfied is to do what you believe is great work]
      </p>

      <div className="production__wrapper">
        <ProductionCard
          imgSrc={pro1}
          title="Asosiy Plyonka Turlari"
          text = "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <ProductionCard
          imgSrc={pro2}
          title="Asosiy Zajim turlari"
          text = "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <ProductionCard
          imgSrc={pro3}
          title="Tomchilab sug’orish tizimi"
          text = "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <ProductionCard
          imgSrc={pro4}
          title="ISSIQXONANING sovutish TIZIMI"
          text = "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <ProductionCard
          imgSrc={pro5}
          title="ISSIQXONANING ISITISH TIZIMI"
          text = "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <ProductionCard
          imgSrc={pro6}
          title="QO’shimcha aksessuarlar"
          text = "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
      </div>
    </section>
  );
}
