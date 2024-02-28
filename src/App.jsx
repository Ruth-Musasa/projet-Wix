import { useEffect, useState } from "react"
import NavBar from "./Component/navBar";
import Header from "./Component/Header";
import { FAQs } from "./Component/Faqs";
import WixOption from "./Component/WixOption";
function App() {
  const [menu, setMenu] = useState(false)
  const handleClick = () => {
    setMenu(!menu);
  }
  if (menu) {
    return (
      <NavBar>
        <Header>
          <button onClick={handleClick} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-6 w-6 self-center " ><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button>
        </Header>
      </NavBar>
    )
  }
  return (
    <>
      <Header>
        <button onClick={handleClick} ><img src="src/assets/bars-solid.svg" alt="open menu" className="h-6 w-6 self-center " /></button>
      </Header>
      <div className="grid place-content-center">
        <div className="bg-gradient-to-r from-[#2F40AD] via-[#2A3BA9] to-[#354AB5] h-auto text-white">
          <h1 className="mt-32 mb-5 text-4xl text-center leading-snug">Create a website without limits</h1>
          <p className="text-base leading-6 text-center mb-8">Build and scale with confidence. From a powerful website builder to advanced business solutions—we’ve got you covered.</p>
          <input type="text" className="mx-8 w-80 rounded-full h-12 text-center bg-blue-950" placeholder="Enter your Email adress" />
          <div className="mx-8 w-80 rounded-full h-12 bg-white mt-4 text-[#354AB5] flex justify-center items-stretch">
            <span className="self-center">Get started</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center animate-pulse"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
          <img src="src/assets/Capture_d_écran_du_2024-02-26_12-20-40-removebg-preview.png" alt="" />
        </div>
        <div className="mx-8 pb-6">
          <div className="border-b border-black">
            <h2 className=" text-4xl mt-11 mb-7 ">One platform, infinite possibilities</h2>
          </div>
          <div className="border-b border-black py-8 leading-7 text-base ">
            <h3><strong>Unlimited creation</strong></h3>
            <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
          </div>
          <div className="border-b border-black py-8 leading-7 text-base">
            <h3><strong>Unlimited creation</strong></h3>
            <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
          </div>
          <div className=" py-8 leading-7 text-base">
            <h3><strong>Unlimited creation</strong></h3>
            <p>Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
          </div>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 ">Get started</button>
        </div>
        <div className="bg-black text-white px-8 py-6">
          <h2 className=" text-4xl mt-12 "> Website templates that set you up for success</h2>
          <p className=" py-8 leading-7 text-base">Website templates that set you up for success Get a headstart on your journey with 900+ free, customizable website templates, strategically researched and tailored for every industry — or start from a blank canvas on our website builder.</p>
          <button className="self-center bg-white rounded-full text-black text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
          <div className=" pb-10">
            <div className="flex ">
              <div className="overflow-y-scroll h-52 ">
                <div className=" h-46">
                  <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" className="w-full" />
                  <div className="flex items-stretch underline underline-offset-2">
                    <a href="">store </a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                  </div>
                </div>
                <div className=" ">
                  <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" />
                </div>
                <div className=" ">
                  <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" />
                </div>
                <div className=" ">
                  <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" />
                </div>
                <div className=" ">
                  <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" />
                </div>
                <div className=" ">
                  <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8 pb-6">
          <h2 className=" text-4xl mt-12 "> Build more than a website</h2>
          <p className=" py-8 leading-7 text-base">
            From selling online, starting a blog or organizing events to promoting your business and building your community, create a website that can grow with you.
          </p>
          <div className="flex items-stretch underline underline-offset-8 mb-12">
            <a href="">Get started </a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
        </div>
        <div className="bg-[#dac4fb] text-black px-8 py-6">
          <h2 className=" text-4xl mt-12 "> And create it your way</h2>
          <div className=" py-8 leading-7 text-base">
            <li>Smart drag and drop editor</li>
            <li>1000’s of advanced design capabilities</li>
            <li>Custom domain, logo and more brand tools</li>
            <li>Full-stack web dev tools for custom functionality </li>
            <li>AI technology that creates a site for you</li>
          </div>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
        </div>
        <img src="src/assets/640x636hh.webp" alt="" />
        <div className="px-8 py-16 bg-[#f3efe5] ">
          <div className="border-b border-black">
            <h2 className=" text-4xl mb-7 ">A website builder engineered for growth</h2>
          </div>
          <div className="border-b border-black py-8 leading-7 text-base ">
            <h3><strong>Unlimited creation</strong></h3>
            <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
          </div>
          <div className="border-b border-black py-8 leading-7 text-base">
            <h3><strong>Unlimited creation</strong></h3>
            <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
          </div>
          <div className=" py-8 leading-7 text-base">
            <h3><strong>Unlimited creation</strong></h3>
            <p>Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
          </div>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 ">Get started</button>
        </div>
        <div className="px-8 py-16 text-base">
          <h2 className=" text-4xl mt-11 mb-7 text-black">Take your business where it needs to go</h2>
          <img src="src/assets/Online shop_1128x1134.webp" alt="eCommerce" />
          <h3 className="text-xl pt-10">eCommerce</h3>
          <p className="py-4">Sell online and manage your business with powerful eCommerce solutions.</p>
          <div className="flex items-stretch underline underline-offset-8">
            <a href="">Creat your eCommerce site </a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
          <div className="flex items-stretch underline underline-offset-8 mb-12">
            <a href="">Learn how</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
          <img src="src/assets/f-1.webp" alt="Blog" />
          <h3 className="text-xl  pt-10">Blog</h3>
          <p className="py-4">Create a free blog, grow a loyal audience and monetize your content.</p>
          <div className="flex items-stretch underline underline-offset-8">
            <a href="">Creat your eCommerce site </a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
          <div className="flex items-stretch underline underline-offset-8 mb-12">
            <a href="">Learn how</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
          <img src="src/assets/scheduling.webp" alt="cheduling software" />
          <h3 className="text-xl  pt-10">Scheduling software</h3>
          <p className="py-4">Offer your services and deliver a seamless booking experience for your clients.</p>
          <div className="flex items-stretch underline underline-offset-8 mb-12">
            <a href="">Add Your Service</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
          <img src="src/assets/f-3.webp" alt="Portfolio" />
          <h3 className="text-xl  pt-10">Portfolio</h3>
          <p className="py-4">Increase your visibility and attract new clients with your work.</p>
          <div className="flex items-stretch underline underline-offset-8 mb-12">
            <a href="">Create Your Portfolio</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
          <img src="src/assets/f-5.webp" alt="Domain and hosting" />
          <h3 className="text-xl  pt-10">Domain and hosting</h3>
          <p className="py-4">Get scalable, free web hosting when you create your own website, and connect a professional domain name.</p>
          <div className="flex items-stretch underline underline-offset-8 mb-12">
            <a href="">Create a Site</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
          <img src="src/assets/f-4.webp" alt="Domain and hosting" />
          <h3 className="text-xl  pt-10">Domain and hosting</h3>
          <p className="py-4">Get scalable, free web hosting when you create your own website, and connect a professional domain name.</p>
          <div className="flex items-stretch underline underline-offset-8 mb-12">
            <a href="">Create a Site</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
        </div>
        <div className="bg-[#dac4fb] text-black px-8 py-6">
          <h2 className=" text-4xl mt-12 "> Drive traffic that converts</h2>
          <div className=" py-8 leading-7 text-base">
            <p>Promote your business and reach the right audience:</p>
            <li>Complete SEO solution</li>
            <li>AI-driven FB & IG Ads</li>
            <li>Email campaigns</li>
            <li>Social posts and more</li>
          </div>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
        </div>
        <img src="src/assets/960x1087.webp" alt="" />
        <div className="px-8 py-6">
          <h2 className=" text-4xl mt-12 ">Manage your business like a pro</h2>
          <p className=" py-8 leading-7 text-base">Capture leads, get reports and insights, automate your business, and more from desktop or on the go from your phone with the Wix Owner app. Everything is synced for seamless management experience.</p>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
        </div>
        <img src="src/assets/dfb81e_49b8b588d4f14821af45d22b4a78b81f~mv2.webp" alt="" />
        <div className="bg-[#dac4fb] text-black px-8 py-6 leading-relaxed">
          <h2 className=" text-4xl mt-12 ">How to create a website for free</h2>
          <div className=" py-8 leading-7 text-base space-y-6">
            <p><strong>Follow these 6 simple steps to create a website today.</strong></p>
            <ol className="list-decimal space-y-6 pl-6">
              <li>​Sign up for a free website builder. Choose what kind of website you want to create.</li>
              <li>Drag and drop 1000s of design features. Add text, galleries, videos, vector art and more.</li>
              <li>Drag and drop 1000s of design features. Add text, galleries, videos, vector art and more.</li>
              <li>​Get ready for business. Add an online store, booking system, members area and blog.</li>
              <li>Publish your website and go live. Start building your professional online presence.</li>
              <li>Drive traffic to your site. Use advanced SEO tools and integrated marketing solutions.</li>
            </ol>
          </div>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
        </div>
        <div className="bg-black text-white px-8 py-6">
          <h2 className=" text-4xl mt-12 ">Get inspired, gain new skills and see what’s trending</h2>
          <div className="flex items-stretch underline underline-offset-8 mb-12">
            <a href="">Explore the blog</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
        </div>
        <div className=" text-black px-8 py-6">
          <h2 className=" text-4xl mt-12 ">Why the Wix website builder is the best choice for you</h2>
          <div className=" py-8 leading-7 text-base space-y-8 ">
            <p>When you create a website using our website builder, everything is there to build your business the way you want. Run it with total peace of mind knowing that there’s enterprise-grade infrastructure built into every site with free reliable web hosting, around-the-clock maintenance and fully managed security.</p>
            <p>Use our tailor-made, customizable templates and 1000s of design features to help bring your vision to life. You can also add your own code for total design control.</p>
            <p>Bring more people to your site and convert visitors with a wide range of built-in eCommerce and business solutions like SEO and marketing tools. Plus, you’ll always have the support you need with 24/7 customer care.</p>
            <p>You can start by creating a free website with Wix. Over 250 million people worldwide have chosen us to grow online. You can, too. </p>
          </div>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
        </div>
        <div className="px-8 py-16 bg-[#f3efe5] ">
          <div className="border-b border-black">
            <h2 className=" text-4xl mb-7 ">We're here for you</h2>
          </div>
          <div className="border-b border-black py-8 leading-7 text-base ">
            <h3><strong>Get answers</strong></h3>
            <p >Watch tutorials and read detailed articles in the Wix Help Center.</p>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Go to Help Center</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
          <div className="border-b border-black py-8 leading-7 text-base">
            <h3><strong>Contact us</strong></h3>
            <p >Get support by chat or schedule a call with a Customer Care Expert.</p>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Chat with Us</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
          <div className=" py-8 leading-7 text-base">
            <h3><strong>Hire a pro</strong></h3>
            <p>Get help at any stage—from site creation to online growth.</p>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Browse All Services</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black animate-bounce"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 ">Get started</button>
        </div>
        <div className="py-16 bg-white">
          <div className="border-b border-black">
            <h2 className="px-8 text-4xl mb-7 ">FAQs</h2>
          </div>
          <FAQs title='Is it easy to build a website?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='What types of websites can you build on Wix?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='How do I create a website?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='Can I create a website without knowing how to code?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='Should I use a website builder or hire a web developer?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='How do I build and host my site for free?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='How can I make sure my data and my visitors’ data is secure?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='How do I create a free website with a custom domain?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='How can I optimize my site for SEO on Wix?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='Is my site optimized for Core Web Vitals (CWV)?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='Can I use a website builder to create a landing page?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
          <FAQs title='How can I design a logo for my website for free?' text='Watch tutorials and read detailed articles in the Wix Help Center.' />
        </div>
        <div className="bg-[#dac4fb] text-black px-8 px-16 text-center">
          <h2 className=" text-4xl mt-12 pb-6"> Tomorrow’s success starts today.</h2>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
        </div>
        <div className="px-8 py-16 bg-white">
          <img src="src/assets/Capture_d_écran_du_2024-02-28_15-21-51-removebg-preview.png" alt="logo" />
          <p className="mb-12">The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</p>
          <WixOption option='Product' />
          <WixOption option='Solutions' />
          <WixOption option='Learn' />
          <WixOption option='Support' />
          <WixOption option='Company' />
        </div>
      </div>
      <div className="pb-16">
        <img src="src/assets/Capture_d_écran_du_2024-02-28_14-41-39-removebg-preview.png" className="pl-4" alt="" />
        <div className="flex flex-wrap leading-loose px-8 ">
          <span className="pr-6">Terms of Use</span>
          <span className="pr-6">Privacy Policy</span>
          <span>© 2006-2024 Wix.com, Inc</span>
        </div>
      </div>
    </>
  )
}

export default App
