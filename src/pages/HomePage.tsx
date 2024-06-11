import { useState } from "react";
import { Header, Body, Footer } from "../components";

const HomePage = () => {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <>
      <Header
        onSave={() => {
          setIsSaved(true);
        }}
      />
      <Body isSaved={isSaved} />
      <Footer />
    </>
  );
};

export default HomePage;
