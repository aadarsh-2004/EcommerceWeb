import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
  } from "@heroicons/react/24/outline";
  import { Button } from "@mui/material";
  
  export default function Navigation() {
    return (
      <div className="bg-white pb-10">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
  
        <div className=" border-gray-200">
          <div className="flex h-16 items-center px-11">
            <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
  
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <span className="sr-only">Your Company</span>
              <img
                src="https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png"
                alt="Shopwithzosh"
                className="h-8 w-8 mr-2"
              />
            </div>
  
            {/* SignIn */}
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Button className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Signin
                </Button>
              </div>
  
              {/* Search */}
              <div className="flex items-center lg:ml-6 cursor-pointer">
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </div>
  
              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Button className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  