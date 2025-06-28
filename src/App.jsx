import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main className="flex flex-nowrap gap-1 justify-around mx-2">
        <div className="w-[50%]">
          <div className="flex flex-wrap">
            <h1 className="text-[min(20vw,96px)] text-shadow-lg"><span className="text-accent-b underline">Julia</span> Carrington</h1>
          </div>
          <div>
            <p>
              Southern California girl, born and raised. Passion for storytelling
              and the power of clothing to shine personality. Aspiring costume
              designer who loves sharing life stories and little inspirations. Check
              out my portfolio to see some of my design projects or my blog to read
              some things I thought were fun.
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <img src="/public/flower.jpg" className="h-[600px] w-[600px] max-sm:hidden"/>
        </div>
      </main>
    </>
  );
};

export default App;
