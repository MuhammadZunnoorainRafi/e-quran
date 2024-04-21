'use client';
import {
  aboutBullets,
  accordionData,
  cardData,
  carouselItem,
  points,
} from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { GiCheckMark } from 'react-icons/gi';
import { MdArrowRightAlt, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import AOS from 'aos';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 10, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 10, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

export default function Home() {
  return (
    <div>
      {/* Section hero */}
      <div id="home" className="relative min-h-[80vh] md:min-h-[130vh] w-full">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
          className="absolute top-14 md:top-24 left-10 md:left-32 text-white "
        >
          <div className="font-[600] mb-8 leading-[1.2] text-3xl md:text-6xl">
            <h1>Welcome to</h1>
            <div>
              <span className="text-blue">EQuran </span>
              <span>Teaching</span>
            </div>
            <h1>Academy</h1>
          </div>
          <button
            id="btn-img"
            className="group px-7 md:px-[40px] py-[16px] flex cursor-pointer items-center justify-center mb-6"
          >
            <p> GET 3-DAY FREE TRIAL</p>
            <div className=" -ml-2 group-hover:ml-2 duration-200 opacity-0 group-hover:opacity-100">
              <MdArrowRightAlt size={20} />
            </div>
          </button>
          <div>
            <h1 className="text-lg md:text-2xl font-bold ">
              Or <span className="text-[#7cce30]">Whatsapp</span> :
              <span className="font-medium"> (+92)3216035703</span>
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 bg-gray-400/10" />
      </div>

      {/* Section Why Choose Us */}

      <div className="relative max-w-7xl mx-auto my-6 px-5 md:px-20 py-10 gap-20 flex md:flex-row flex-col items-start justify-start ">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
          className=",md:w-1/2 bg-gradient-to-r from-gray-100 to-white px-8 py-14 space-y-6"
        >
          <h1 className="font-semibold text-lg md:text-2xl text-slate-400 tracking-wide">
            Quality first
          </h1>
          <h1 className="font-semibold text-2xl md:text-5xl text-blue">
            Why Choose Us
          </h1>
          <ul className=" text-slate-600 text-sm space-y-4">
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
        <div className="md:w-1/2 -mt-8">
          {cardData.map((val) => (
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
              key={val.id}
              className="p-4 md:p-8 flex md:flex-row flex-col text-center md:text-left items-center justify-center md:items-start md:justify-start gap-4  md:gap-7 hover:relative transition duration-300 hover:scale-[1.05] md:hover:translate-x-3 z-2 cardWithShadow"
            >
              <div className="w-20 h-20 md:w-[325px] md:h-[70px] relative md:flex-[0.32] ">
                <Image
                  src={val.img}
                  alt="card image error"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="space-y-2 tracking-wide md:flex-[1.68]">
                <h1 className="font-semibold">{val.title}</h1>
                <p className="text-sm text-slate-600">{val.content}</p>
                <Link
                  href={'#contactUs'}
                  className="group flex items-center justify-center md:justify-start "
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
      <div
        id="about"
        className="flex md:flex-row flex-col items-center justify-center md:items-start md:justify-start gap-2 max-w-7xl mx-auto"
      >
        <div className="md:flex-[0.9]">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
            className="h-52 w-52 md:h-[312px] md:w-[312px] relative md:ml-20 "
          >
            <Image src="/istanbul.png" fill alt="image error" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
          className="md:flex-[1.1] p-3 md:p-0 mt-7 space-y-6"
        >
          <h2 className="font-semibold text-lg md:text-2xl text-slate-400 tracking-wide">
            ABOUT US
          </h2>
          <h1 className="font-semibold text-2xl md:text-[45px] leading-[1.2] text-blue">
            Committed to Quality Since 2015
          </h1>
          <div className=" md:ml-16 max-w-xl ">
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
      <div className="mt-4 md:mt-12 p-3 md:p-0 space-y-6 max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
          className="font-semibold text-lg md:text-2xl text-slate-400 tracking-wide"
        >
          OUR VISION
        </h2>
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
          className="font-semibold text-2xl md:text-[45px] leading-[1.2] text-blue"
        >
          The Right Path For Your Children
        </h1>
        <div className="flex flex-col gap-7 md:gap-0 md:flex-row items-center justify-center md:items-start md:justify-evenly pt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src="/child-1.png"
              height={250}
              width={250}
              alt="child image error"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src="/qibla-1.png"
              className="md:mt-16"
              height={250}
              width={250}
              alt="child image error"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src="/child-2.png"
              className="md:mt-32"
              height={250}
              width={250}
              alt="child image error"
            />
          </div>
        </div>
      </div>

      {/* Carousel Section */}

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        className="mt-24 space-y-6 max-w-6xl mx-auto"
      >
        <h2 className="font-semibold text-2xl text-slate-400 text-center tracking-wide">
          Duas That Strengthen Your Iman
        </h2>
        <Carousel className="md:w-full w-[270px] max-w-3xl mx-auto">
          <CarouselContent>
            {carouselItem.map((val, index) => (
              <CarouselItem key={index}>
                <div className="p-1 w-80 h-36 mx-auto md:w-[770px] md:h-[400px] relative">
                  <Image
                    src={val}
                    fill
                    priority
                    alt="carousel image error"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* FAQ Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        id="faq"
        className="mt-12 p-3 md:p-0 space-y-6 max-w-6xl mx-auto"
      >
        <h2 className="font-semibold text-lg md:text-2xl text-slate-400 tracking-wide">
          FAQ
        </h2>
        <h1 className="font-semibold text-2xl md:text-[45px] leading-[1.2] text-blue">
          Frequently Asked Questions
        </h1>
        <Accordion
          type="multiple"
          className="w-full max-w-5xl mx-auto space-y-2"
        >
          {accordionData.map((val, ind) => (
            <AccordionItem key={ind + 1} value={`item ${ind + 1}`}>
              <AccordionTrigger className="text-sm md:text-base">
                {val.title}
              </AccordionTrigger>
              <AccordionContent className="p-2 text-xs md:text-sm">
                {val.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact Us Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        id="contactUs"
        className="min-h-[70vh] relative p-16 text-center mt-16"
      >
        <h1 className="font-semibold tracking-wide md:text-xl leading-[1.2] text-blue">
          Get In Touch For More Information
        </h1>
        <div className="absolute inset-0 bg-gray-900/10 z-[1]" />
        <p className="text-white font-bold text-xl md:text-3xl mt-5">
          We will try our best to provide a viable solution to your query.
        </p>
        <div>
          <h1 className="text-lg md:text-2xl font-bold text-white mt-7">
            <span className="text-[#7cce30]">Whatsapp</span> :
            <span className="font-medium"> (+92)3216035703</span>
          </h1>
        </div>
        <div>
          <h1 className="text-lg md:text-2xl font-bold text-white ">
            <span className="text-blue">Email</span> :
            <span className="font-medium"> abcde@gmail.com</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
