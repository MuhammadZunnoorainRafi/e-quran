import { points } from '@/lib/constants';
import { MdArrowRightAlt } from 'react-icons/md';

export default function Home() {
  return (
    <div>
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

      <div className="relative max-w-6xl mx-auto my-6 px-20 py-10 ">
        <div className="w-1/2">
          <h1 className="font-semibold text-5xl text-blue">Why Choose Us</h1>
          <ul className="space-y-1 text-lg">
            {points.map((val, ind) => (
              <li className="list-disc " key={ind}>
                {val.text}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
