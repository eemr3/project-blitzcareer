import { Disclosure, Menu, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';
import { Fragment, useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../context/todo.context';
import { getPayload } from '../../shared/auth';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const { signout } = useContext(TodoContext);
  const [name, setName] = useState('');
  useEffect(() => {
    const getNameInToken = () => {
      const token = Cookies.get('access_token');
      if (token) {
        const { name } = getPayload(token);
        setName(name);
      }
    };
    getNameInToken();
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-900 border-b border-b-gray-700 mb-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center text-white font-bold text-2xl">
              Todo List
            </div>
            <div className="hidden sm:ml-6 sm:block"></div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button
                  className="flex w-[36px] h-[36px] text-center justify-center items-center rounded-full bg-gray-800 text-sm 
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                    focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Open user menu</span>
                  <h1 className="text-white text-2xl">{name.substr(0, 1)}</h1>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        )}
                      >
                        Seu perfil
                      </a>
                    )}
                  </Menu.Item>
                  {/* <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item> */}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={signout}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700 w-full text-left',
                        )}
                      >
                        Sair
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
