'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdEmail, MdPhone } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { NavLinks } from '@/lib/constants';

function Navbar() {
  const pathName = usePathname();
  return (
    <div className="sticky top-0 right-0 z-20 left-0 bg-white shadow-md">
      <div className="px-12 md:px-44 py-2 text-xs font-[500] tracking-wider flex items-center justify-center md:justify-start flex-col md:flex-row md:gap-2 bg-blue text-slate-100">
        <div className="flex items-center  justify-center gap-1">
          <MdPhone size={17} />
          <p>+923216035703</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <MdEmail size={17} />
          <p>abcdef@gmail.com</p>
        </div>
      </div>
      <div className="px-2 md:px-10 flex items-center justify-between">
        <div className="relative w-14 h-14 md:w-24 md:h-24 ">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/logo.jpg"
            alt="Hero image error"
            priority
            fill
          />
        </div>
        <div className="hidden md:flex items-center font-semibold text-[15px]  justify-center gap-[22px]">
          {NavLinks.map((val, ind) => (
            <a
              className={`${
                pathName === val.href
                  ? 'text-blue-500'
                  : 'text-slate-500 hover:text-slate-400 duration-200'
              }`}
              key={ind}
              href={val.href}
            >
              {val.name}
            </a>
          ))}
        </div>
        <div className=" md:hidden mr-2 ">
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu size={20} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="pt-10">
                <div className="flex flex-col items-center font-semibold text-[15px]  justify-center gap-[22px]">
                  {NavLinks.map((val, ind) => (
                    <SheetClose asChild key={ind}>
                      <Link
                        className={`${
                          pathName === val.href
                            ? 'text-blue-500'
                            : 'text-slate-500'
                        }`}
                        href={val.href}
                      >
                        {val.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
