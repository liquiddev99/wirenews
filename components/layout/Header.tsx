import { useState, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const onSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?title=${input}`);
  };
  return (
    <div className="mt-8 flex justify-between items-center">
      <Link href="/">
        <a className="text-2xl md:text-3xl font-dancing">NewsWire</a>
      </Link>
      <form
        className="items-center hidden ml-8 bg-white rounded md:flex"
        onSubmit={onSubmit}
      >
        <input
          placeholder="Search"
          className="px-7 py-3 rounded-full border-b-2 outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type="submit"
          className="bg-black rounded-full text-slate-100 font-bold py-3 px-5 ml-4"
        >
          <MagnifyingGlassIcon className="font-bold w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default Header;
