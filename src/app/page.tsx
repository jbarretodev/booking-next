import PreviewBooking from "@/components/PreviewBooking";

const HomePage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to GetBooking.com
      </h1>

      <PreviewBooking />
      
      <hr />
      
      <h2 className="text-4xl font-bold text-center mt-10">
        Our hotels are located in the following countries:
      </h2>
    </>
  );
};

export default HomePage;
