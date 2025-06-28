

const NavBar = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex m-4 text-2xl text-main">
        <ul className="flex gap-4">
          <a className="hover:text-accent-b hover:underline" href="/">HOME</a>
          <a className="hover:text-accent-b hover:underline" href="/portfolio">PORTFOLIO</a>
          <a className="hover:text-accent-g hover:underline" href="/blog">BLOG</a>
          <a className="hover:text-accent-p hover:underline" href="/about-me">ABOUT</a>
        </ul>
      </div>

      <div className="flex m-4">
        <img src='public/JC.svg' alt='Logo' className="h-[20px] w-[20px]"/>
      </div>
    </div>
  );
};

export default NavBar;
