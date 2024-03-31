function Component() {
  return (
    <body>
      <h2 style={{ fontWeight: "bold", color: "black" }}>My Application</h2>
      <div className="Component">
        <label htmlFor="Uname" style={{ color: "darkblue" }}>
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="Uname" required />
        <br />
        <br />
        <label htmlFor="pwd" style={{ color: "darkblue" }}>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="Pwd"
          required
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={() => {
            alert("submitted");
          }}
        >
          Submit
        </button>
        <label>
          <input type="checkbox" checked="checked" name="Remember" />
          Remember me
        </label>
        <br />
        <a href="#">Forget Password</a>
      </div>
    </body>
  );
}
export default Component;
