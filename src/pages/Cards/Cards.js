import Card from "~/components/Card/Card";
import images from "~/assets/images";
import { useState } from "react";

function Cards() {

    const [tabs, setTabs] = useState('about');

    const handleTabsChanges = (tab) => {
        setTabs(tab);
    }

    return (<>
        <h1 className="font-bold leading-tight text-4xl mt-0 mb-2">Cards</h1>
        <h3 className="font-normal leading-tight text-xl mt-0 pb-2 mb-2 border-b-2 border-slate-100">Get started with a large variety of React card examples for your web project</h3>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="default-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                Default Card
            </h2>
            <div>
                <Card className={`max-w-sm`} hoverEffect>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                </Card>
            </div>
        </section>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="button-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                Card With Button
            </h2>
            <div>
                <Card className={`max-w-sm`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-300 dark:hover:bg-slate-200 dark:text-white mt-2 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </Card>
            </div>
        </section>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="link-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                Card With Link
            </h2>
            <div>
                <Card className={`max-w-sm`}>
                    <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.884 3.717h.002l47.39 58.27-47.39 58.286-47.377-58.287 47.375-58.27zm96.5 125.287h7.963l63.121 160.834c2.536 6.498 7.727 9.748 15.573 9.748h5.468v8.916h-70.134v-8.916h5.587c7.291 0 12.442-.792 15.454-2.377 2.06-1.11 3.09-2.815 3.09-5.113 0-1.347-.278-2.774-.833-4.28l-14.62-37.324h-69.423l-8.2 21.397c-2.14 5.706-3.21 10.222-3.21 13.55 0 3.884 1.782 7.213 5.348 9.987 3.645 2.774 8.916 4.16 15.81 4.16h5.944v8.916h-63.715v-8.916c6.815 0 12.204-1.466 16.166-4.399 3.962-3.011 7.61-8.676 10.937-16.998l59.674-149.185zm-3.447 33.879l-31.502 78.336h62.17l-30.668-78.336zm126.29 153.64l47.392 58.27-47.393 58.287-47.375-58.287 47.375-58.27z"></path></svg>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                    <a href="/" className="mt-2 inline-flex items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </Card>
            </div>
        </section>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="image-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                Card With Image
            </h2>
            <div>
                <Card className={`max-w-sm`} imageCard="https://i.ibb.co/cwYYbVh/2.jpg">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                    <a href="/" className="mt-2 inline-flex items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </Card>
            </div>
        </section>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="horizontal-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                Horizontal Card
            </h2>
            <div>
                <Card className={`max-w-sm`} imageCard="https://i.ibb.co/cwYYbVh/2.jpg" horizontalCard>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                    <a href="/" className="mt-2 inline-flex items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </Card>
            </div>
        </section>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="profile-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                Profile Card
            </h2>
            <div>
                <Card className={`max-w-sm`}>
                    <div className="flex justify-end">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.ibb.co/cwYYbVh/2.jpg" alt="Avatar" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Prox</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-skate-100 dark:hover:bg-slate-100 dark:focus:ring-blue-800">Add friend</a>
                            <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-slate-100 dark:text-white dark:border-gray-600 dark:hover:bg-slate-50 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                        </div>
                    </div>

                </Card>
            </div>
        </section>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="form-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                Form Card
            </h2>
            <div>
                <Card className={`max-w-sm`}>
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className=" bg-transparent border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className=" bg-transparent border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="/" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-slate-50 dark:focus:ring-blue-800">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="/" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                        </div>
                    </form>
                </Card>
            </div>
        </section>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="e-commerce-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                E-commerce Card
            </h2>
            <div>
                <Card className={`max-w-sm`}>
                    <a href="/">
                        <img className="p-8 rounded-t-lg" src={images.shoes} alt="product" />
                    </a>
                    <div className="">
                        <a href="/">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Sport Shoes</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-slate-50 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
        <section className="mb-4 pb-4 border-b-2 border-slate-100" id="nav-card">
            <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
                <span className="text-gray-400"> # </span>
                Card With Navigation Tabs
            </h2>
            <div>
                <Card withoutPadding >
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-slate-100 rounded-t-lg bg-gray-50 dark:border-slate-100 dark:text-gray-400 dark:bg-slate-50">
                        <li className="mr-2">
                            <button onClick={() => handleTabsChanges('about')} type="button" className={`
                                inline-block
                                p-4
                                ${tabs === 'about' ? 'text-blue-500' : 'text-gray-500'}
                                hover:bg-gray-100
                                ${tabs === 'about' ? '' : 'hover:text-gray-600'}
                                
                                dark:hover:bg-gray-700
                                ${tabs === 'about' ? '' : 'dark:hover:text-gray-300'}
                                
                            `}>About</button>
                        </li>
                        <li className="mr-2">
                            <button onClick={() => handleTabsChanges('services')}  type="button" className={`
                                inline-block
                                p-4
                                ${tabs === 'services' ? 'text-blue-500' : 'text-gray-500'}
                                hover:bg-gray-100
                                ${tabs === 'services' ? '' : 'hover:text-gray-600'}
                                
                                dark:hover:bg-gray-700
                                ${tabs === 'services' ? '' : 'dark:hover:text-gray-300'}
                                
                            `}>Services</button>
                        </li>
                        <li className="mr-2">
                            <button onClick={() => handleTabsChanges('facts')}  type="button" className={`
                                inline-block
                                p-4
                                ${tabs === 'facts' ? 'text-blue-500' : 'text-gray-500'}
                                hover:bg-gray-100
                                ${tabs === 'facts' ? '' : 'hover:text-gray-600'}
                                dark:hover:bg-gray-700
                                ${tabs === 'facts' ? '' : 'dark:hover:text-gray-300'}
                                
                            `}>Facts</button>
                        </li>
                    </ul>
                    <div id="defaultTabContent">
                        <div className={`${tabs === 'about' ? 'block' : 'hidden'} p-4 bg-white rounded-lg md:p-8 `} id="about" role="tabpanel" aria-labelledby="about-tab">
                            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
                            <a href="/" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                                Learn more
                                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                        <div className={` ${tabs === 'services' ? 'block' : 'hidden'} p-4 bg-white rounded-lg md:p-8 " id="services" role="tabpanel" aria-labelledby="services-tab`}>
                            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>

                            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                                <li className="flex space-x-2">

                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Dynamic reports and dashboards</span>
                                </li>
                                <li className="flex space-x-2">

                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Templates for everyone</span>
                                </li>
                                <li className="flex space-x-2">

                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Development workflow</span>
                                </li>
                                <li className="flex space-x-2">

                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Limitless business automation</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`${tabs === 'facts' ? 'block' : 'hidden'} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab`}>
                            <dl className="grid max-w-screen-xl grid-cols-3 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold text-center">73M+</dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400 text-center">Developers</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold text-center">100M+</dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400 text-center">Public repositories</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold text-center">1000s</dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400 text-center">Open source projects</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    </>);
}

export default Cards;