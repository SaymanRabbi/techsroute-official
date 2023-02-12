import LoginForm from "./LoginForm";
const LoginCompo = () => {
    return (     
      <section className="h-screen container mx-auto">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="w-8/12 lg:w-5/12 lg:ml-20 py-10 ">
            <LoginForm/>
          </div>
        </div>
      </div>
    </section>
    );
};

export default LoginCompo;