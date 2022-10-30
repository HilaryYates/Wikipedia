const Register = ({ onRouteChange }) => {
  return (
    <div>
      <form>
        <div>Name</div>
        <input type='text' />
        <div>Email</div>
        <input type='email' />
        <div type='password'>Password</div>
        <input type='password' />
        <input type='submit' onClick={() => onRouteChange("home")} />
      </form>
    </div>
  );
};

export default Register;
