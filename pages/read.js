import Link from "next/link";

const Productos = ({ productos }) => {
  if (Array.isArray(productos)) {
    return (
      <div>
        <h1>Desafio 4 Lectura general</h1>
        <table>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
          </tr>
          {productos.map((prod) => (
            <tr>
              <td>{prod.title}</td>
              <td>{prod.price}</td>
              <td>{prod.thumbnail}</td>
            </tr>
          ))}
        </table>
        <Link href="/">
          <a>Volver al menú</a>
        </Link>
      </div>
    );
  } else
    return (
      <Link href="/">
        <a>Volver al menú</a>
      </Link>
    );
};

export default Productos;

//acá leo, llamo a getStaticProps para que en producción se pueda cachear
export const getServerSideProps = async () => {
  const res = await fetch("https://ds4-cdrhouse.herokuapp.com/api/productos/");
  const data = await res.json();

  return {
    props: { productos: data }
  };
};
