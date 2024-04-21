'use client';
import { aboutBullets, cardData, points } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { GiCheckMark } from 'react-icons/gi';
import { MdArrowRightAlt, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import AOS from 'aos';

// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 10, // the delay on throttle used while scrolling the page (advanced)

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 10, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 1000, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: true, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });

export default function Home() {
  return (
    <div className="mt-32">
      {/* Section hero */}
      <div id="hero" className="relative min-h-[130vh] w-full">
        <div className="absolute top-24 left-32 text-white ">
          <div className="font-[600] mb-8 leading-[1.2] text-6xl">
            <h1>Welcome to</h1>
            <div>
              <span className="text-blue">EQuran </span>
              <span>Teaching</span>
            </div>
            <h1>Academy</h1>
          </div>
          <button
            id="btn-img"
            className="group flex cursor-pointer items-center justify-center mb-6"
          >
            <p> GET 3-DAY FREE TRIAL</p>
            <div className=" -ml-2 group-hover:ml-2 duration-200 opacity-0 group-hover:opacity-100">
              <MdArrowRightAlt size={20} />
            </div>
          </button>
          <div>
            <h1 className="text-2xl font-bold ">
              Or <span className="text-[#7cce30]">Whatsapp</span> :
              <span className="font-medium"> (+92)3216035703</span>
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 bg-gray-400/10"></div>
      </div>

      {/* Section Why Choose Us */}

      <div className="relative max-w-7xl mx-auto my-6 px-20 py-10 gap-20 flex items-start justify-start ">
        <div className="w-1/2 bg-gradient-to-r from-gray-100 to-white px-8 py-14 space-y-6">
          <h1 className="font-semibold text-2xl text-slate-400 tracking-wide">
            Quality first
          </h1>
          <h1 className="font-semibold text-5xl text-blue">Why Choose Us</h1>
          <ul className=" text-slate-600 space-y-4">
            {points.map((val, ind) => (
              <div key={ind} className="flex items-start justify-start gap-4">
                <div className="mt-1">
                  <GiCheckMark size={15} color="#019cdf" />
                </div>
                <p className="text-slate-600">{val.text}</p>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-1/2 -mt-8">
          {cardData.map((val) => (
            <div
              // data-aos="fade-up"
              // data-aos-duration="800"
              // data-aos-easing="ease-in-out"
              // data-aos-anchor-placement="top-center"
              key={val.id}
              className="p-8 flex items-start justify-start gap-7 hover:relative transition duration-300 hover:translate-x-3 z-2 cardWithShadow"
            >
              <div className="w-[325px] h-[70px] relative flex-[0.32] ">
                <Image
                  src={val.img}
                  alt="card image error"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="space-y-2 tracking-wide flex-[1.68]">
                <h1 className="font-semibold">{val.title}</h1>
                <p className="text-sm text-slate-600">{val.content}</p>
                <Link
                  href={'/contact'}
                  className="group flex items-center justify-start "
                >
                  <p className="text-blue text-sm font-semibold">
                    GET AN ONLINE ESTIMATE
                  </p>
                  <div className=" -ml-2 group-hover:ml-2 duration-200 opacity-0 group-hover:opacity-100">
                    <MdKeyboardDoubleArrowRight size={13} color="#019cdf" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section About us */}
      <div className="flex items-start justify-start gap-2 max-w-7xl mx-auto">
        <div className="flex-[0.9]">
          <div className="h-[312px] w-[312px] relative ml-20 ">
            <Image src="/istanbul.png" fill alt="image error" />
          </div>
        </div>
        <div className="flex-[1.1] mt-7 space-y-6">
          <h2 className="font-semibold text-2xl text-slate-400 tracking-wide">
            ABOUT US
          </h2>
          <h1 className="font-semibold text-[45px] leading-[1.2] text-blue">
            Committed to Quality Since 2015
          </h1>
          <div className="ml-16 max-w-xl">
            <p className="text-slate-600 mb-3 ">
              We offer our customers more value than they expect and more than
              others can offer. We achieve this by delivering superior
              credibility and trust.
            </p>
            <p className="text-slate-600">
              Therefore, You can always expect great outcomes. Our Commitment
              and Quality Speaks For Itself. Since :
            </p>
            <ul className="list-disc ml-4">
              {aboutBullets.map((val, ind) => (
                <li className="text-slate-600" key={ind}>
                  {val}
                </li>
              ))}
            </ul>
            <div className="text-center pt-10">
              <button
                style={{ boxShadow: '0px 5px 18px -6px rgba(0,0,0,0.3)' }}
                className="group mx-auto text-sm text-blue px-10 py-4 flex cursor-pointer items-center font-semibold justify-center mb-6"
              >
                <p> LEARN MORE</p>
                <div className=" -ml-2 group-hover:ml-2 duration-200 opacity-0 group-hover:opacity-100">
                  <MdArrowRightAlt size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="mt-12 space-y-6 max-w-6xl mx-auto">
        <h2 className="font-semibold text-2xl text-slate-400 tracking-wide">
          OUR VISION
        </h2>
        <h1 className="font-semibold text-[45px] leading-[1.2] text-blue">
          The Right Path For Your Children
        </h1>
        <div className="flex items-start justify-evenly pt-10">
          <Image
            src="/child-1.png"
            height={250}
            width={250}
            alt="child image error"
          />
          <Image
            src="/qibla-1.png"
            className="mt-16"
            height={250}
            width={250}
            alt="child image error"
          />
          <Image
            src="/child-2.png"
            className="mt-32"
            height={250}
            width={250}
            alt="child image error"
          />
        </div>
      </div>
    </div>
  );
}
