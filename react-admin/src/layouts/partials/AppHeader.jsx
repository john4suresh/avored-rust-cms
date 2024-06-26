import logo from "../../assets/logo_only.svg";
import {Menu} from "@headlessui/react";
import _ from 'lodash'
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import { useTranslation } from "react-i18next";

function AppHeader() {
    const adminUser = JSON.parse(localStorage.getItem("AUTH_ADMIN_USER"))
    const navigate = useNavigate()
    const [t] = useTranslation("global");

    useEffect(() => {
        if (!_.get(adminUser, 'id')) {
            localStorage.clear()
            navigate('/admin/login')
        }
    })

    return (
      <header className="h-16 py-2 flex shadow-lg px-4 fixed inset-y-0 md:sticky bg-gray-800 z-40">
        <div className="flex w-full">
          <a
            href="/admin"
            className="text-white flex items-center space-x-2 group hover:text-white"
          >
            <div>
              <img src={logo} alt="AvoRed Rust Cms Logo" className="h-12" />
            </div>

            <div>
              <span className="text-2xl font-semibold">AvoRed</span>
              <span className="text-xs block">Rust CMS</span>
            </div>
          </a>
          <div className="ml-auto flex items-center">
            <Menu as="div" className="ml-3 inline-block relative">
              <Menu.Button className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 relative">
                  <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://placehold.it/250x250"
                      alt=""
                    />
                  </div>
                </div>
                <div className="p-2 text-left">
                  <h2 className="text-sm font-semibold text-white">
                    {_.get(adminUser, "full_name")}
                  </h2>
                  <p className="text-xs text-gray-400">
                    {_.get(adminUser, "email")}
                  </p>
                </div>
              </Menu.Button>
              <Menu.Items
                as="div"
                className="absolute shadow-md  z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full"
              >
                <Menu.Item as="div">
                  <Link
                    to={`/admin/admin-user-edit/${_(adminUser, "id")}`}
                    className="flex items-center text-sm py-1.5 px-4 text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                  >
                    {t("profile")}
                  </Link>
                </Menu.Item>
                <Menu.Item as="div">
                  <Link
                    to="/admin/logout"
                    className="flex items-center text-sm py-1.5 px-4 text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                  >
                    {t("logout")}
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </header>
    );
}

export default AppHeader;
