import "./Header.scss";

const Header = (): React.ReactElement => {
  return (
    <header className="main-header">
      <div>
        <img
          className="main-header__image"
          src="https://distritooficina.com/wp-content/uploads/2023/08/image-1080x757.jpg"
          alt="Imagen de la oficina de The Office"
          width="415"
          height="78"
        />
      </div>
      <h1 className="main-title">The Office App</h1>
    </header>
  );
};

export default Header;
