import { Link } from "react-router";

const NavBar = ({
  loggedIn,
  setLoggedIn,
}: {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="navbar flex h-20 w-full justify-between bg-neutral px-6 text-slate-200 md:px-10">
      <div>
        <Link to="/" className="text-xl">
          Tid För Tvätt
        </Link>
      </div>
      <div>
        {loggedIn && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="xs:relative avatar btn-circle"
            >
              <div className="w-14 rounded-full">
                <img
                  alt="Inloggad användare"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={1}
              className="dropdown-content menu-md z-[1] mt-4 w-max bg-base-100 p-2 text-slate-600 shadow"
            >
              <li>
                <Link to="/profile" className="cursor-pointer">
                  Profil
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  onClick={() => setLoggedIn(false)}
                  to="/"
                >
                  Logga ut
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
