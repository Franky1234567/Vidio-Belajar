// import { useRouteError } from "react-router";

const ErorPage = () => {
//   const error = useRouteError();
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <h1>Oops! Terjadi Kesalahan</h1>
        <p>Halaman yang kamu cari belum siap guys.</p>
        <p>comming soon yaa!</p>
        <a href="/">Kembali ke Beranda</a>
      </div>
    </>
  );
};

export default ErorPage;
