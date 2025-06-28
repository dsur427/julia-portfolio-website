import NavBar from "./Components/NavBar";
import Button from "./Components/Button";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <div className="grid grid-cols-8 grid-rows-4 m-4 h-[100vh]">

          <div className="flex flex-col justify-center gap-2 row-start-2 col-start-2">

            <div className="flex text-8xl text-shadow-lg">
              <h1><span className="text-accent-b underline">Julia</span></h1>
            </div>

            <div className="text-8xl">
              <h1>Carrington</h1>
            </div>

            <div className="row-start-3 col-start-1">
              <p>
                Southern California girl, born and raised. Passion for
                storytelling and the power of clothing to shine personality.
                Aspiring costume designer who loves sharing life stories and
                little inspirations. Check out my portfolio to see some of my
                design projects or my blog to read some things I thought were
                fun.
              </p>
            </div>

          </div>

          <div className="row-span-4 col-start-5 col-span-3">
            <img
              src="/public/flower.jpg"
              className="h-[600px] w-[600px] max-sm:hidden"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
