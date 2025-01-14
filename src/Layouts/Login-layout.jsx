import LoginForm from "../Pages/Login";
import Logo from "../components/Logo";

const LoginPage = () => {
  return (
    <>
      <div>
        <Logo />
      </div>
      <div className="min-h-screen bg-yellow-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 mx-auto sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Masuk ke akun
              </h2>
              <p className="mb-7">Yuk, lanjutin belajarmu di vidiobelajar </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
