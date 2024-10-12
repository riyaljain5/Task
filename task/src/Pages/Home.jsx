import Footer from "../Components/Footer";
import Explore from "./Explore";
import Services from "./Services";

const Home = () => {
    return (
      <section className=" py-6 px-4">
        <div className=" flex items-center justify-center w-full h-screen py-6 px-4 border bg-lightblue flex-col md:flex-row ">
  
          <h1 className="font-bold text-5xl md:text-9xl text-center md:text-left w-full md:w-1/2 mb-4 md:mb-0">
          Find perfect partner for the night
          </h1>
        
          <img 
            src="https://i.pinimg.com/enabled/564x/6e/f3/f8/6ef3f8520592752e47f811ac8f330a3d.jpg" 
            className="w-full md:w-1/3 border rounded-lg" 
            alt="App Visual" // Adding alt for accessibility
          />
        </div>
        <Explore/>
        <Services/>
        <Footer/>
      </section>
    );
  };
  
  export default Home;
  