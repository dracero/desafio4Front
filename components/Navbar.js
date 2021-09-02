import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Desafio 4 Coder House</h1>
      </div>
      <p></p>
      <Link href="/insert">
        <a>Insertar</a>
      </Link>
      <p></p>
      <Link href="/read">
        <a>Read</a>
      </Link>
      <p></p>
      <Link href="/readid">
        <a>Read by id</a>
      </Link>
      <p></p>
      <Link href="/modifica">
        <a>Modifica by ID</a>
      </Link>
      <p></p>
      <Link href="/deleteid">
        <a>Delete</a>
      </Link>
    </nav>
  );
};

export default Navbar;
