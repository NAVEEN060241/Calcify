import "./Introduction.css";
import Lottie from "lottie-react";
import calculator from "../../assets/LottieJson/calculator.json";

const Introduction = () => {
  return (
    <div className="container mt-4 global-animate-zoom-in">
      <div className="d-flex justify-content-center gap-3 ">
        <h1 className="global-gradient-heading text-center ">
          Get Started with Calcify!
        </h1>
        <h1 className=" d-flex align-items-start pt-3">✨</h1>
      </div>
      <hr />
      <div className="d-flex justify-content-center flex-column align-items-center gap-5">
        <p className="description">
          Welcome to Calcify 🧮, your ultimate companion for simplifying
          calculations and making data-driven decisions. Calcify is designed
          with an intuitive interface and a robust set of features to streamline
          your workflow. Whether you’re a professional looking for accuracy or a
          student needing clarity, Calcify has you covered. Dive into a world of
          efficiency and precision, and discover how Calcify can transform the
          way you work.
        </p>
        <Lottie
          animationData={calculator}
          loop={true}
          style={{ height: "300px", width: "300px" }}
          className="mt-3"
        />
      </div>
    </div>
  );
};

export default Introduction;
