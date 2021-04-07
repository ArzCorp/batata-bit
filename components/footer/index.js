const Footer = () => {
  return (
    <footer className="bg-orange-bitcoin flex justify-center md:justify-around items-center py-10">
      <div className="mr-12">
        <ul className="text-sm font-dm-sans font-medium leading-4 text-white">
          <li className="mb-2">
            <a href="/#">Linkedin</a>
          </li>
          <li className="mb-2">
            <a href="/#">Crunchbase</a>
          </li>
          <li className="mb-2">
            <a href="/#">Hackernews</a>
          </li>
        </ul>
      </div>
      <div>
        <figure>
          <img src="/assets/icons/brand-copy.svg" alt="logo 2021" />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
