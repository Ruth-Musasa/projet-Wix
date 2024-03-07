import { useEffect, useState } from "react"
import NavBar from "./Component/navBar";
import Header from "./Component/Header";
import { FAQs } from "./Component/Faqs";
import WixOption from "./Component/WixOption";
import ButtonAction from "./Component/Button";
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
        <div className="bg-gradient-to-r from-[#2F40AD] via-[#2A3BA9] to-[#354AB5] h-auto text-white ">
          <h1 className="mt-32 mb-5 text-4xl text-center leading-snug md:text-8xl">Create a website <br /> without limits</h1>
          <p className="text-base leading-6 text-center mb-8 px-8 md:hidden ">Build and scale with confidence. From a powerful website builder to advanced business solutions—we’ve got you covered.</p>
          <p className="md:visible invisible h-2 text-center  md:text-2xl">What kind of website would you like to create?</p>
          <div className="items-stretch ">
            <input type="text" className="mx-8 w-80 rounded-full h-14 text-center bg-blue-950 md:hidden" placeholder="Enter your Email adress" />
            <div className="invisible h-0 md:grid md:grid-cols-4 md:gap-6 md:visible md:h-auto md:w-5/12 md:m-auto md:my-12">
              <ButtonAction name='Online store' ><svg data-bbox="0.953 0.702 20.401 18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19" height="19" width="22" data-type="color"><g><path fill="#ffffff" d="M2.597.702h17.171a.6.6 0 0 1 .593.509l.992 5.491a2.939 2.939 0 0 1-2.4 2.944v6.656a2.4 2.4 0 0 1-2.4 2.4h-10.8a2.4 2.4 0 0 1-2.4-2.4v-6.66a2.988 2.988 0 0 1-2.4-2.94c0-.056 1.066-5.56 1.066-5.56a.6.6 0 0 1 .578-.44Zm.018 7.338a1.624 1.624 0 0 0 1.338.462c1.306 0 2.4-1.8 2.4-1.8a2.46 2.46 0 0 0 2.393 1.8 2.495 2.495 0 0 0 2.407-1.8 2.928 2.928 0 0 0 2.4 1.8 2.928 2.928 0 0 0 2.4-1.8s1.2 1.8 2.4 1.8a1.678 1.678 0 0 0 1.8-1.8l-.9-4.8h-16.2l-.9 4.8c-.06.493.11.987.462 1.338Zm12.738 7.062h-8.4v-5.93a3.431 3.431 0 0 1-.6-.67 3.038 3.038 0 0 1-1.8 1.139v6.661a1.2 1.2 0 0 0 1.2 1.2h10.8a1.2 1.2 0 0 0 1.2-1.2v-6.67a3.158 3.158 0 0 1-1.8-1.13c-.167.253-.368.48-.6.676v5.924Zm-4.2-6.6a2.777 2.777 0 0 1-3 1.08v4.32h6v-4.32a2.769 2.769 0 0 1-3-1.08Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path></g></svg></ButtonAction>
              <ButtonAction name='Portofolio' ><svg data-bbox="0.195 0.695 20.575 18.003" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" height="19" width="21" data-type="color"><g><path fill="#ffffff" d="M14.34 10.982a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572Z" data-color="1"></path><path fill="#ffffff" d="M5.339 4.552V3.266A2.572 2.572 0 0 1 7.911.695h5.144a2.572 2.572 0 0 1 2.571 2.571v1.286h3.858c.71 0 1.286.576 1.286 1.286v11.574c0 .71-.576 1.286-1.286 1.286H1.481c-.71 0-1.286-.576-1.286-1.286V5.838c0-.71.576-1.286 1.286-1.286H5.34Zm2.572-2.571c-.71 0-1.286.575-1.286 1.285v1.286h7.716V3.266c0-.71-.576-1.286-1.286-1.286H7.91ZM1.48 5.838v9.259l4.455-5.569A.9.9 0 0 1 7.3 9.48l7.322 7.932h4.862V5.838H1.481Zm0 11.574h11.39l-6.211-6.73-5.179 6.473v.257Z" data-color="1"></path></g></svg></ButtonAction>
              <ButtonAction name='Blog' ><svg data-bbox="0.285 0.819 11.911 17.736" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 19" height="19" width="13" data-type="ugc"><g><path stroke-width=".24" stroke="#ffffff" fill="#ffffff" d="m11.226 9.776-3.998 7.6a.457.457 0 0 1-.404.245h-.125v-6.133a1.86 1.86 0 0 0 1.374-1.8c0-1.03-.821-1.868-1.832-1.868-1.01 0-1.833.838-1.833 1.867 0 .867.586 1.592 1.375 1.8v6.134h-.126a.455.455 0 0 1-.404-.245l-3.998-7.6a.475.475 0 0 1-.014-.414l2.152-4.809h5.695l2.151 4.81a.473.473 0 0 1-.013.413Zm-4.985.845a.925.925 0 0 1-.916-.934c0-.514.41-.933.916-.933.505 0 .916.419.916.933a.926.926 0 0 1-.916.934ZM2.117 3.385v-1.4c0-.128.103-.233.23-.233h7.788c.126 0 .23.105.23.233v1.4a.232.232 0 0 1-.23.234H2.347a.231.231 0 0 1-.23-.234Zm9.956 5.59-1.977-4.423h.04c.63 0 1.145-.522 1.145-1.167v-1.4c0-.643-.514-1.166-1.146-1.166H2.347A1.159 1.159 0 0 0 1.2 1.986v1.4c0 .645.513 1.167 1.146 1.167h.039L.409 8.975c-.178.394-.163.859.038 1.242l3.999 7.6c.239.456.704.738 1.211.738h1.167a1.37 1.37 0 0 0 1.212-.739l3.998-7.599a1.43 1.43 0 0 0 .04-1.241Z" clip-rule="evenodd" fill-rule="evenodd"></path></g></svg></ButtonAction>
              <ButtonAction name='Consultant' ><svg data-bbox="0.862 0.212 20.547 17.977" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19" height="19" width="22" data-type="color"><g><path fill="#ffffff" d="M6 4.064V2.78A2.568 2.568 0 0 1 8.568.212h5.136a2.568 2.568 0 0 1 2.568 2.568v1.284h3.853c.709 0 1.284.575 1.284 1.284v11.557c0 .71-.575 1.284-1.284 1.284H2.146a1.284 1.284 0 0 1-1.284-1.284V5.348c0-.709.575-1.284 1.284-1.284H6Zm1.284 0h7.704V2.78c0-.71-.575-1.284-1.284-1.284H8.568c-.71 0-1.284.575-1.284 1.284v1.284Zm12.84 1.284H2.148V9.2H6V7.916h1.284V9.2h7.704V7.916h1.284V9.2h3.853V5.348ZM2.148 10.485v6.42h17.978v-6.42h-3.853v1.284h-1.284v-1.284H7.284v1.284H6v-1.284H2.147Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path></g></svg></ButtonAction>
              <ButtonAction name='Service busness' ><svg data-bbox="4.281 4 16 16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" height="24" width="25" data-type="color"><g><path fill="#ffffff" d="M15.281 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" data-color="1"></path><path fill="#ffffff" d="M11.281 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" data-color="1"></path><path fill="#ffffff" d="M9.281 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" data-color="1"></path><path fill="#ffffff" d="M14.281 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" data-color="1"></path><path fill="#ffffff" d="M12.281 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" data-color="1"></path><path fill="#ffffff" d="M19.281 5h-2V4h-1v1h-8V4h-1v1h-2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm-2 1h2v3h-14V6h2v1h1V6h8v1h1V6Zm-12 4h14v9h-14v-9Z" data-color="1"></path> </g></svg></ButtonAction>
              <ButtonAction name='Restaurant' ><svg data-bbox="0.07 0.3 13.133 17.909" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 19" height="19" width="14" data-type="color"><g><path fill="#ffffff" d="M4.846 3.882V.3H6.04v7.164c0 .659-.535 1.194-1.194 1.194v8.357c0 .66-.535 1.194-1.194 1.194H2.458c-.66 0-1.194-.535-1.194-1.194V8.658C.604 8.658.07 8.123.07 7.464V.3h1.194v3.582h1.194V.3h1.194v3.582h1.194Zm0 1.194H1.264v2.388h1.194v9.55h1.194v-9.55h1.194V5.076Zm4.775 7.172c-.02-.717-.175-1.181-.426-1.417-.522-.49-.767-1.227-.767-2.173v-5.97A2.388 2.388 0 0 1 10.815.3h1.194c.66 0 1.194.535 1.194 1.194v15.52c0 .66-.534 1.195-1.194 1.195h-1.194a1.195 1.195 0 0 1-1.194-1.194v-4.768Zm1.194 4.767h1.194V1.495h-1.194c-.659 0-1.194.534-1.194 1.193v5.97c0 .645.142 1.068.392 1.303.521.49.775 1.277.802 2.287v4.767Z" data-color="1"></path></g></svg></ButtonAction>
              <ButtonAction name='Event' ><svg data-bbox="1 0.603 18.308 18.11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" data-type="ugc"><g><path fill="#ffffff" d="m17.852 5.934-.152.042a2.914 2.914 0 0 1-3.554-3.703l.049-.15-1.456-1.52L1 11.866l1.456 1.517.152-.042a2.914 2.914 0 0 1 3.554 3.704l-.049.15 1.456 1.518L19.308 7.452l-1.456-1.518Zm-11.14 11.12a3.444 3.444 0 0 0-4.09-4.263l-.871-.91 7.394-7.094.955.995.383-.367-.955-.995 3.195-3.066.873.91a3.444 3.444 0 0 0 4.09 4.263l.872.91-3.195 3.065-.954-.995-.383.367.954.995-7.394 7.094-.873-.91Z"></path><path fill="#ffffff" d="m11.778 6.805-.383.367 1.224 1.275.383-.367-1.224-1.275Z"></path><path stroke-width=".589" stroke="#ffffff" d="m17.852 5.934-.152.042a2.914 2.914 0 0 1-3.554-3.703l.049-.15-1.456-1.52L1 11.866l1.456 1.517.152-.042a2.914 2.914 0 0 1 3.554 3.704l-.049.15 1.456 1.518L19.308 7.452l-1.456-1.518Zm-11.14 11.12a3.444 3.444 0 0 0-4.09-4.263l-.871-.91 7.394-7.094.955.995.383-.367-.955-.995 3.195-3.066.873.91a3.444 3.444 0 0 0 4.09 4.263l.872.91-3.195 3.065-.954-.995-.383.367.954.995-7.394 7.094-.873-.91Z" fill="none"></path><path stroke-width=".589" stroke="#ffffff" d="m11.778 6.805-.383.367 1.224 1.275.383-.367-1.224-1.275Z" fill="none"></path></g></svg></ButtonAction>
              <ButtonAction name='Other' ><svg data-bbox="0.883 0.359 15.508 3.877" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 5" height="5" width="17" data-type="color"><g><path fill="#ffffff" d="M2.821.359a1.938 1.938 0 1 1 0 3.877 1.938 1.938 0 0 1 0-3.877Zm5.816 0a1.938 1.938 0 1 1 0 3.877 1.938 1.938 0 0 1 0-3.877Zm5.815 0a1.938 1.938 0 1 1 0 3.877 1.938 1.938 0 0 1 0-3.877Zm-11.63.97a.97.97 0 1 0 0 1.938.97.97 0 0 0 0-1.939Zm5.815 0a.97.97 0 1 0 0 1.938.97.97 0 0 0 0-1.939Zm5.815 0a.97.97 0 1 0 0 1.938.97.97 0 0 0 0-1.939Z" data-color="1"></path></g></svg></ButtonAction>
            </div>
            <div className="md:w-2/12 md:m-auto">
              <div className="text-xl mx-8 w-80 rounded-full h-14 bg-white mt-4 text-black flex justify-center items-stretch m-auto md:w-48 md:mb-4">
                <span className="self-center m-auto">Get started</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center animate-pulse md:hidden"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
              </div>
              <span className="invisible md:visible h-auto md:mt-96">Trusted by 250M+ users worldwide.</span>
            </div>
            <img src="src/assets/Capture_d_écran_du_2024-02-26_12-20-40-removebg-preview.png" className="md:hidden  visible" alt="" />
            <img src="src/assets/Capture_d_écran_du_2024-02-28_15-36-33-removebg-preview.png" alt="" className="invisible h-0 md:h-auto  md:self-center md:bg-cover md:bg-center md:visible  md:w-9/12 md:m-auto" />
          </div>
        </div>
        <div className="mx-8 pb-6 md:w-7/12 md:m-auto md:my-24">
          <div className=" border-black ">
            <h2 className=" text-5xl mt-11 mb-7  md:text-6xl">One platform,<br /> infinite possibilities</h2>
          </div>
          <div className="md:flex md:gap-12">
            <div className="border-t border-black py-8 leading-7 text-base ">
              <h3><strong>Unlimited creation</strong></h3>
              <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
            <div className="border-t border-black py-8 leading-7 text-base ">
              <h3><strong>Unlimited creation</strong></h3>
              <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
            <div className=" border-t border-black py-8 leading-7 text-base">
              <h3><strong>Unlimited creation</strong></h3>
              <p>Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
          </div>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 ">Get started</button>
        </div>
        <div className="bg-black text-white px-8 py-6 w-full h-auto ">
          <div className="md:w-7/12 md:m-auto">
            <h2 className=" text-4xl mt-12  md:text-6xl md:text-center "> Website templates that set you up for success</h2>
            <p className=" py-8 leading-7 text-base md:text-xl md:text-center">Website templates that set you up for success Get a headstart on your journey with 900+ free, customizable website templates, strategically researched and tailored for every industry — or start from a blank canvas on our website builder.</p>
            <button className="self-center bg-white rounded-full text-base text-black text-lg font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 mb-12 md:w-1/6 md:text-xl md:ml-96">Get started</button>
          </div>
          <div className="flex w-full md:w-11/12 m-auto pb-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-0 md:w-8 md:h-auto self-center fill-white rotate-180 "><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            <div className=" w-full md:p-10 m-auto">
              <div className="flex h-auto overflow-x-scroll gap-6 md:gap-12">
                <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" className="h-full " />
                <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" className="h-full " />
                <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" className="h-full " />
                <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" className="h-full " />
                <img src="src/assets/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp" className="h-full " />
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-0 md:w-8 md:h-auto  self-center fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
        </div>
        <div className="mx-8 pb-6 md:flex md:w-7/12 md:m-auto md:py-20">
          <h2 className=" text-4xl mt-12  md:text-6xl "> Build more than a website</h2>
          <div className="md:w-1/2">
            <p className=" py-8 leading-7 text-base ">
              From selling online, starting a blog or organizing events to promoting your business and building your community, create  a website that can grow with you.
            </p>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Get started </a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
        </div>
        <div className="md:flex bg-[#dac4fb]">
          <div className="bg-[#dac4fb] text-black px-8 py-6 md:order-last md:w-7/12 md:m-auto md:px-32">
            <h2 className=" text-4xl mt-12  md:text-6xl "> And create it your way</h2>
            <div className=" py-8 leading-7 text-base">
              <li>Smart drag and drop editor</li>
              <li>1000’s of advanced design capabilities</li>
              <li>Custom domain, logo and more brand tools</li>
              <li>Full-stack web dev tools for custom functionality </li>
              <li>AI technology that creates a site for you</li>
            </div>
            <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
          </div>
          <div className="md:w-full md:bg-[#6B5DCF] ">
            <img className=' md:h-screen m-auto' src="src/assets/640x636hh.webp" alt="" />
          </div>
        </div>
        <div className="px-8 py-16 bg-[#f3efe5] ">
          <div className="md:w-7/12 md:m-auto md:grid md:grid-cols-3 md:gap-6">
            <div className=" md:border-none md:col-span-2">
              <h2 className=" text-4xl mb-7 md:text-6xl">A website builder engineered for growth</h2>
            </div>
            <div></div>
            <div className="border-t border-black py-8 leading-7 text-base md:border-none md:text-xl">
              <h3><strong>Unlimited creation</strong></h3>
              <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
            <div className="border-t border-black py-8 leading-7 text-base md:border-none md:text-xl">
              <h3><strong>Unlimited creation</strong></h3>
              <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
            <div className="border-t border-black py-8 leading-7 text-base md:border-none md:text-xl">
              <h3><strong>Unlimited creation</strong></h3>
              <p>Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
            <div className="border-t border-black py-8 leading-7 text-base md:border-none md:text-xl">
              <h3><strong>Unlimited creation</strong></h3>
              <p >Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
            <div className="border-t border-black py-8 leading-7 text-base md:text-xl md:border-none">
              <h3><strong>Unlimited creation</strong></h3>
              <p>Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
            <div></div>
            <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 ">Get started</button>
          </div>
        </div>
        <div className="px-8 py-16 text-base md:w-7/12 md:m-auto md:grid md:grid-cols-2 md:gap-20 ">
          <h2 className=" text-4xl mt-11 mb-7 text-black md:text-6xl md:text-center md:col-span-2">Take your business where it needs to go</h2>
          <div>
            <img src="src/assets/Online shop_1128x1134.webp" alt="eCommerce" />
            <strong> <h3 className="text-xl pt-10">eCommerce</h3></strong>
            <p className="py-4">Sell online and manage your business with powerful eCommerce solutions.</p>
            <div className="flex items-stretch underline underline-offset-8">
              <a href="">Creat your eCommerce site </a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Learn how</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
          <div>
            <img src="src/assets/f-1.webp" alt="Blog" />
            <strong> <h3 className="text-xl  pt-10">Blog</h3></strong>
            <p className="py-4">Create a free blog, grow a loyal audience and monetize your content.</p>
            <div className="flex items-stretch underline underline-offset-8">
              <a href="">Creat your eCommerce site </a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Learn how</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
          <div>
            <img src="src/assets/scheduling.webp" alt="cheduling software" />
            <strong><h3 className="text-xl  pt-10">Scheduling software</h3></strong>
            <p className="py-4">Offer your services and deliver a seamless booking experience for your clients.</p>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Add Your Service</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
          <div>
            <img src="src/assets/f-3.webp" alt="Portfolio" />
            <strong><h3 className="text-xl  pt-10">Portfolio</h3> </strong>
            <p className="py-4">Increase your visibility and attract new clients with your work.</p>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Create Your Portfolio</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
          <div>
            <img src="src/assets/f-5.webp" alt="Domain and hosting" />
            <strong> <h3 className="text-xl  pt-10">Domain and hosting</h3></strong>
            <p className="py-4">Get scalable, free web hosting when you create your own website, and connect a professional domain name.</p>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Create a Site</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
          <div>
            <img src="src/assets/f-4.webp" alt="Domain and hosting" />
            <strong> <h3 className="text-xl  pt-10">Domain and hosting</h3></strong>
            <p className="py-4">Get scalable, free web hosting when you create your own website, and connect a professional domain name.</p>
            <div className="flex items-stretch underline underline-offset-8 mb-12">
              <a href="">Create a Site</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
          </div>
        </div>
        <div className="md:flex md:bg-black ">
          <div className="bg-[#dac4fb] text-black px-8 py-6 md:bg-black md:text-white md:w-7/12 md:m-auto md:px-32">
            <h2 className=" text-4xl mt-12 md:text-6xl "> Drive traffic that converts</h2>
            <div className=" py-8 leading-7 text-base md:text-xl">
              <p>Promote your business and reach the right audience:</p>
              <li>Complete SEO solution</li>
              <li>AI-driven FB & IG Ads</li>
              <li>Email campaigns</li>
              <li>Social posts and more</li>
            </div>
            <button className="self-center bg-black rounded-full text-white text-lg font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12 md:bg-white md:text-black">Get started</button>
          </div>
          <img className="md:w-screen" src="src/assets/960x1087.webp" alt="" />
        </div>
        <div className="md:flex md:m-36">
          <div className="px-8 py-6 md:order-last md:w-7/12 md:m-auto md:px-32">
            <h2 className=" text-4xl mt-12 md:m-auto md:text-6xl ">Manage your business like a pro</h2>
            <p className=" py-8 leading-7 text-base">Capture leads, get reports and insights, automate your business, and more from desktop or on the go from your phone with the Wix Owner app. Everything is synced for seamless management experience.</p>
            <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
          </div>
          <img src="src/assets/dfb81e_49b8b588d4f14821af45d22b4a78b81f~mv2.webp" className="md:h-10/12" alt="" />
        </div>
        <div className="bg-[#f3efe5] text-black px-8 py-6 leading-relaxed md:py-32">
          <h2 className=" text-4xl mt-12 md:w-7/12 md:m-auto md:text-6xl  ">How to create a website for free</h2>
          <div className=" py-8 leading-7 text-base space-y-6 md:text-xl  md:w-7/12 md:m-auto">
            <p className="md:text-center"><strong>Follow these 6 simple steps to create a website today.</strong></p>
            <ol className="list-decimal space-y-6 pl-6">
              <li><strong>​Sign up for a free website builder.</strong> Choose what kind of website you want to create.</li>
              <li><strong>Drag and drop 1000s of design features.</strong> Add text, galleries, videos, vector art and more.</li>
              <li><strong>Drag and drop 1000s of design features. </strong>Add text, galleries, videos, vector art and more.</li>
              <li><strong>​Get ready for business.</strong> Add an online store, booking system, members area and blog.</li>
              <li><strong>Publish your website and go live. </strong>Start building your professional online presence.</li>
              <li><strong>Drive traffic to your site.</strong> Use advanced SEO tools and integrated marketing solutions.</li>
            </ol>
          </div>
          <div className=" md:w-7/12 md:m-auto"><button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button></div>
        </div>
        <div className="md:flex md:bg-black">
          <div className="bg-black text-white px-8 py-6 md:flex md:py-32 md:w-10/12 md:m-auto">
            <div className="md:border-r md:mr-32"><h2 className=" text-4xl mt-12  md:text-6xl ">Get inspired, gain new skills and see what’s trending</h2>
              <div className="flex items-stretch underline underline-offset-8 mb-12">
                <a href="">Explore the blog</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
              </div></div>
            <img src="src/assets/image002.png" className="mb-12" alt="" />
            <img src="src/assets/image001.png" className="mb-12" alt="" />
          </div>
        </div>
        <div className=" text-black px-8 py-6 md:flex  md:w-10/12 md:m-auto md:py-32">
          <h2 className=" text-4xl mt-12  md:text-6xl ">Why the Wix website builder is the best choice for you</h2>
          <div className="md:px-32 "><div className=" py-8 leading-7 text-base space-y-8 md:text-xl">
            <p>When you create a website using our website builder, everything is there to build your business the way you want. Run it with total peace of mind knowing that there’s enterprise-grade infrastructure built into every site with free reliable web hosting, around-the-clock maintenance and fully managed security.</p>
            <p>Use our tailor-made, customizable templates and 1000s of design features to help bring your vision to life. You can also add your own code for total design control.</p>
            <p>Bring more people to your site and convert visitors with a wide range of built-in eCommerce and business solutions like SEO and marketing tools. Plus, you’ll always have the support you need with 24/7 customer care.</p>
            <p>You can start by creating a free website with Wix. Over 250 million people worldwide have chosen us to grow online. You can, too. </p>
          </div>
            <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
          </div>
        </div>
        <div className="bg-[#f3efe5] ">
          <div className="px-8 py-16 bg-[#f3efe5] md:w-7/12 md:m-auto ">
            <div className="">
              <h2 className=" text-4xl mb-7 md:text-6xl ">We're here for you</h2>
            </div>
            <div className="md:flex md:gap-10">
              <div className="border-t border-black py-8 leading-7 text-base ">
                <h3><strong>Get answers</strong></h3>
                <p >Watch tutorials and read detailed articles in the Wix Help Center.</p>
                <div className="flex items-stretch underline underline-offset-8 mb-12">
                  <a href="">Go to Help Center</a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
              </div>
              <div className="border-t border-black py-8 leading-7 text-base">
                <h3><strong>Contact us</strong></h3>
                <p >Get support by chat or schedule a call with a Customer Care Expert.</p>
                <div className="flex items-stretch underline underline-offset-8 mb-12">
                  <a href="">Chat with Us</a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
              </div>
              <div className="border-t border-black py-8 leading-7 text-base">
                <h3><strong>Hire a pro</strong></h3>
                <p>Get help at any stage—from site creation to online growth.</p>
                <div className="flex items-stretch underline underline-offset-8 mb-12">
                  <a href="">Browse All Services</a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black animate-bounce"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
              </div>
            </div>
            <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 md:hidden">Get started</button>
          </div>
        </div>
        <div className="py-16 bg-white md:w-7/12 md:m-auto md:py-32">
          <div className="border-b border-black">
            <h2 className="px-8 text-4xl mb-7 md:text-6xl">FAQs</h2>
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
        <div className="bg-[#C19BF8] text-black px-8 px-16 text-center md:py-32">
          <h2 className=" text-4xl mt-12 md:w-7/12 md:m-auto md:text-6xl pb-6 md:text-6xl "> Tomorrow’s success starts today.</h2>
          <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12  left-5 mb-12">Get started</button>
        </div>
        <div className="px-8 py-16 bg-white md:w-7/12 md:m-auto md:py-16">
          <img src="src/assets/Capture_d_écran_du_2024-02-28_15-21-51-removebg-preview.png" alt="logo" />
          <p className="mb-12">The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</p>
          <WixOption option='Product' />
          <WixOption option='Solutions' />
          <WixOption option='Learn' />
          <WixOption option='Support' />
          <WixOption option='Company' />
        </div>
      </div>
      <div className="md:border">
        <div className="pb-16 md:w-7/12 md:m-auto md:flex md:justify-between md:pb-2">
          <img src="src/assets/Capture_d_écran_du_2024-02-28_14-41-39-removebg-preview.png" className="pl-4" alt="" />
          <div className="flex flex-wrap leading-loose px-8 md:pt-6">
            <span className="pr-6">Terms of Use</span>
            <span className="pr-6">Privacy Policy</span>
            <span>© 2006-2024 Wix.com, Inc</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
