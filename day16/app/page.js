import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 bg-[#003E39] text-white">
      <header className="flex flex-row justify-between items-center mb-8 border p-5 rounded-2xl ">
        <div>
          <h1>Logo</h1>
        </div>
        <nav className="flex flex-row items-center space-x-8">
          <ul className="flex flex-row space-x-8">
            <li>For Companies</li>
            <li>For Talents</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          <button className="bg-[#C9C4F3] p-2 rounded-2xl text-lg">Book a call</button>
        </nav>
      </header>
      <section className="flex flex-col ">
      <div className="w-full h-[400px] relative rounded-2xl overflow-hidden mb-5">
        <Image src="/unsplash.jpg" layout="fill" objectFit="cover" objectPosition="center" alt="Unsplash Image" />
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8">
          <h1 className="text-7xl font-bold">We care who you spend your work life with</h1>
        </div>
        <div className="col-span-4">
         
            <h3 className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis
              at erat pellentesque adipiscing.
            </h3>
            <div className="flex space-x-4">
              <button className="bg-[#C9C4F3] text-white p-3 rounded-lg">Book call</button>
              <button className="border p-2 rounded-lg">Discover option</button>
            </div>
         
        </div>
      </div>
      </section>
    </main>
  );
}
