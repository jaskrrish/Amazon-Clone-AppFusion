import React from "react";
import Navbar from "./components/Navbar";
import ProductImage from "./components/ProductImage";
import Carasouel from "./components/Carasouel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-800">
        <Navbar />
      </div>
      <Carasouel />
      <div className=" flex justify-center text-center">
        <h1 className="font-bold text-3xl">
          Electronic Appliances <br /> Up to 60%off{" "}
        </h1>
      </div>
      <div className="flex flex-wrap p-2 m-4">
        <ProductImage
          source="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg"
          className="m-4 p-3"
        />
        <ProductImage
          source="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"
          className="m-4 p-3"
        />
        <ProductImage
          source="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg"
          className="m-4 p-3"
        />
      </div>
      <div className=" flex justify-center text-center">
        <h1 className="font-bold text-3xl">
          Fashion <br /> Up to 60%off{" "}
        </h1>
      </div>
      <div className="flex flex-wrap p-2 m-4">
        <ProductImage
          source="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-372-232._SY232_CB636110853_.jpg"
          className="m-4 p-3"
        />
        <ProductImage
          source="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-372-232._SY232_CB636110853_.jpg"
          className="m-4 p-3"
        />
        <ProductImage
          source="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg"
          className="m-4 p-3"
        />
      </div>
      <div className="bg-gray-800">
        <Footer />
      </div>
    </div>
  );
};

export default App;
