import Input from "~/components/Input";
import Card from "~/components/Card";
import TableOfContents from "~/components/TableOfContents";
import Checkbox from "~/components/Checkbox";
import FloatingLabelsInput from "~/components/FloatingLabelsInput";
import GoogleInput from "~/components/GoogleInput";

function Form() {
    return (<>
        <div>
            <div >
                <h1 className="font-bold leading-tight text-4xl mt-0 mb-2">From</h1>
                <h3 className="font-normal leading-tight text-xl mt-0 pb-2 mb-2 border-b-2 border-slate-100">Get started with a large variety of React form examples for your web project</h3>
                <main>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="default-input">
                            <span className="text-gray-400"> # </span>
                            Default form
                        </h2>
                        <div>
                            <Card className={`max-w-sm`}>
                                <form>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <Input type="email" id="email" placeholder="name@prox.com" required />
                                    </div>
                                    <div className="mb-6">
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                        <Input type="password" id="password" placeholder="********" required />
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <Checkbox id="remember" type="checkbox" value="" className="" required/>
                                        </div>
                                        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="floating-label-input">
                            <span className="text-gray-400"> # </span>
                            Floating Labels Input
                        </h2>
                        <div>
                            <Card className={`max-w-sm`}>
                                <form>
                                    <div className="mb-6">
                                        <FloatingLabelsInput type="email" Label="Email" id="Email" required/>
                                    </div>
                                    <div className="mb-6">
                                        <FloatingLabelsInput type="password" Label="Password" id="Password" required/>
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <Checkbox id="remember" type="checkbox" value="" className="" required/>
                                        </div>
                                        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="google-input">
                            <span className="text-gray-400"> # </span>
                            Google Input
                        </h2>
                        <div>
                            <Card className={`max-w-sm`}>
                                <form>
                                    <div className="mb-6">
                                        <GoogleInput type="email" Label="Email" id="Email"/>
                                    </div>
                                    <div className="mb-6">
                                        <GoogleInput type="password" Label="Password" id="Password" required/>
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <Checkbox id="remember" type="checkbox" value="" className="" required/>
                                        </div>
                                        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="helper-text">
                            <span className="text-gray-400"> # </span>
                            Helper text
                        </h2>
                        <div>
                            <Card className={`max-w-sm`}>
                                <form>
                                    <div className="mb-6">
                                        <GoogleInput type="email" Label="Email" id="Email" disabled/>
                                    </div>
                                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="/" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </form>
                            </Card>
                        </div>
                    </section>
                </main>
            </div>
            <TableOfContents />
        </div>
    </>);
}

export default Form;