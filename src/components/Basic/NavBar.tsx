const NavBar = () => {
  return (
    <div className="navbar bg-neutral flex justify-between text-slate-200">
      <div>
        <a href="/" className="text-xl">
          Tid För Tvätt
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Inloggad användare"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-max p-2 text-slate-600 shadow"
          >
            <li>
              <a className="justify-between">Profil</a>
            </li>
            <li>
              <a>Logga ut</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
