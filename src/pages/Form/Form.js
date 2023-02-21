import Input from "~/components/Input";
import Card from "~/components/Card";
import TableOfContents from "~/components/TableOfContents";
import Checkbox from "~/components/Checkbox";
import FloatingLabelsInput from "~/components/FloatingLabelsInput";
import GoogleInput from "~/components/GoogleInput";
import TextArea from "~/components/TextArea";
import Select from "~/components/Select";

function Form() {

    const emailIcon = <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>;
    const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4' },
    ]

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
                                            <Checkbox id="remember" Label="Remember me" type="checkbox" value="" className="" required />
                                        </div>
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
                                        <FloatingLabelsInput type="email" Label="Email" id="Email" required />
                                    </div>
                                    <div className="mb-6">
                                        <FloatingLabelsInput type="password" Label="Password" id="Password" required />
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <Checkbox id="remember" Label="Remember me" type="checkbox" value="" className="" required />
                                        </div>
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
                                        <GoogleInput type="email" Label="Email" id="Email" />
                                    </div>
                                    <div className="mb-6">
                                        <GoogleInput type="password" Label="Password" id="Password" required />
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <Checkbox id="remember" Label="Remember me" type="checkbox" value="" className="" required />
                                        </div>
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
                            <Card>
                                <form>
                                    <div className="mb-6">
                                        <GoogleInput type="email" Label="Email" id="Email" required />
                                    </div>
                                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="/" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="icon-input">
                            <span className="text-gray-400"> # </span>
                            Input element with icon
                        </h2>
                        <div>
                            <Card>
                                <form>
                                    <div className="mb-6">
                                        <GoogleInput type="email" Label="Email" id="Email" Icon={emailIcon} placeholder="YourEmail@example.com" required />
                                    </div>
                                    <div className="mb-6">
                                        <FloatingLabelsInput type="email" Label="Email" Icon={emailIcon} id="Email" required />
                                    </div>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <Input type="email" id="email" Icon={emailIcon} placeholder="name@prox.com" required />
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="input-addon">
                            <span className="text-gray-400"> # </span>
                            Input element with addon
                        </h2>
                        <div>
                            <Card>
                                <form>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <Input type="email" id="email" Addon="@" placeholder="name@prox.com" required />
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="validation-text">
                            <span className="text-gray-400"> # </span>
                            Form validation text
                        </h2>
                        <div>
                            <Card>
                                <form>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <Input type="email" id="email" placeholder="name@prox.com" value="example@gmail.com" Success="Successful text" />
                                    </div>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <Input type="email" id="email" placeholder="name@prox.com" value="example@gmail.com" Error="Error text" />
                                    </div>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <Input type="email" id="email" placeholder="name@prox.com" value="example@gmail.com" Info="Information text" />
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="text-area">
                            <span className="text-gray-400"> # </span>
                            Textarea
                        </h2>
                        <div>
                            <Card>
                                <form>
                                    <div className="mb-6">
                                        <TextArea label="Message" placeholder="Leave a comment..." />
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="select-input">
                            <span className="text-gray-400"> # </span>
                            Select input
                        </h2>
                        <div>
                            <Card>
                                <form>
                                    <div className="mb-6">
                                        <Select Label="Select your country" Options={options} Selected={2} />
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </section>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="checkbox">
                            <span className="text-gray-400"> # </span>
                            Checkbox
                        </h2>
                        <div>
                            <Card>
                                <form>
                                    <fieldset>
                                        <legend class="sr-only">Checkbox variants</legend>

                                        <Checkbox Label={<>I agree to the <a href="/" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</>} disabled/>
                                    </fieldset>
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