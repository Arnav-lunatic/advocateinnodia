import emailjs from "@emailjs/browser";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useRef, FormEvent } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";


export const ContactUs = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target as HTMLFormElement,
                import.meta.env.VITE_API_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message.");
                }
            );
    };

    return (

        <div className="flex justify-center items-center max-w-[1000px] mx-auto gap-12 flex-wrap md:flex-nowrap">

            <div className="flex-1">
                <h1 className="text-3xl font-bold my-4 text-center">
                    Contact Us
                </h1>

                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <MdContactSupport />
                        Get in Touch
                    </h2>
                    <p>
                        -  Feel free to reach out to us for any inquiries or legal assistance. We're here to help!
                    </p>
                    <p className="my-4">
                        - Our team is dedicated to providing you with the best legal solutions tailored to your needs. Whether you have questions about our services or need immediate assistance, don't hesitate to contact us. We value your trust and look forward to assisting you.
                    </p>
                    <div className="flex items-center text-lg">
                        <IoLocation />
                        <strong>Address:</strong>
                    </div>
                    <p>
                        123 Advocate Street, Noida, UP, India
                    </p>
                    <p className="flex items-center gap-2 my-2">
                        <FaPhoneAlt /> <strong>Phone:</strong>
                        <a
							href="tel:+9627829808"
							className="text-blue-600 hover:underline"
						>+91 9627829808</a>
                    </p>
                    <p className=" flex items-center gap-2 text-text mb-8">
                        <IoMdMail />
                        <strong>Email:</strong>
						<a
							href="mailto:jasvirsingh488@gmail.com"
							className="text-blue-600 hover:underline w-[70%] truncate"
						>
							jasvirsingh488@gmail.com
						</a>
					</p>
                </div>

            </div>
            <form
                ref={form}
                className="w-full md:w-1/2 max-w-xl grid gap-8 p-4 rounded-2xl flex-1"
                onSubmit={sendEmail}
            >
                <div>
                    <div className="mb-2 block">
                        <Label className="text-text" htmlFor="name">
                            Your name
                        </Label>
                    </div>
                    <TextInput
                        id="name"
                        name="name"
                        placeholder="jasvir Singh"
                        required
                    />
                </div>

                <div>
                    <div className="block mb-2">
                        <Label htmlFor="email" className="text-text">
                            Your email
                        </Label>
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        icon={HiMail}
                        rightIcon={HiMail}
                        placeholder="your-email@gmail.com"
                        required
                    />
                </div>

                <div>
                    <div className="block mb-2">
                        <Label htmlFor="phone" className="text-text">
                            Your Number
                        </Label>
                    </div>
                    <TextInput
                        id="phone"
                        name="phone"
                        icon={FaPhoneAlt}
                        rightIcon={FaPhoneAlt}
                        placeholder="0000000000"
                    />
                </div>

                <div>
                    <div className="block mb-2">
                        <Label htmlFor="comment" className="text-text">
                            Your message
                        </Label>
                    </div>
                    <Textarea
                        id="comment"
                        name="message"
                        placeholder="write your message.."
                        required
                        rows={8}
                    />
                </div>

                <Button
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </div>
    );
};
