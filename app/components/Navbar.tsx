import Link from "next/link";
import { MyTokenPayload } from "../lib/auth/jwt";
import { logoutAction } from "../features/login/actions/logoutAction";

interface NavbarProps {
  user: MyTokenPayload | null;
}

export default function Navbar({ user }: NavbarProps) {

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          Logistics
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/products"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Products
          </Link>

          <Link
            href="/photos"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Photos
          </Link>

          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Login
          </Link>

          {
            user && user.age > 18 && <Link
              href="/login"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Restricted by aget
            </Link>
          }

          {
            user && <form action={logoutAction}>
              <button type="submit">
                Logout
              </button>
            </form>
          }
        </div>
      </div>
    </nav>
  );
}
