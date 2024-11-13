import { useState } from "react";

const NavBar = ({
  loggedIn,
  setLoggedIn,
}: {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="navbar flex h-20 w-full justify-between bg-neutral px-10 text-slate-200">
      <div>
        <a href="/" className="text-xl">
          Tid För Tvätt
        </a>
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
                <a className="cursor-pointer">Profil</a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => setLoggedIn(false)}
                  href="/"
                >
                  Logga ut
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
