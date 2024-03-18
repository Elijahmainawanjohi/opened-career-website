import React, { useState } from 'react'

function Contact() {

    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when the form is submitted
        const fullNameValue = event.target.elements.fullName.value;
        const messageValue = event.target.elements.message.value;
        const emailValue = event.target.elements.email.value;

        fetch(import.meta.env.VITE_API_CONTACTUS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name: fullNameValue,
                email: emailValue,
                message: messageValue,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    // Assuming the presence of an 'id' property indicates a successful submission
                    setSuccessMessage('Message submitted successfully');
                    setFullName('');
                    setEmail('');
                    setMessage('');
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 4000); // 4 seconds
                } else {
                    // Handle error, e.g., show an error message
                    setSuccessMessage('Failed to submit message');
                }
            })
            .catch(error => {
                console.error('Error submitting comment:', error);
                setSuccessMessage('An error occurred while submitting the comment');
                setFullName('');
                setEmail('');
                setMessage('');
            })
            .finally(() => {
                setLoading(false); // Set loading back to false after the submission process is complete
            });
    };

  return (
    <section className="py-8 scroll-m-12" id="contact-us">
            <div className="bg-whity rounded-3xl shadow-2xl px-8 py-8 md:py-12">
            {successMessage &&
                <div className="toast toast-bottom toast-end text-sm font-semibold italic z-50">
                    <div className="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>You have a new Notification</span>
                    </div>
                    <div className="alert alert-success text-whity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{successMessage}</span>
                    </div>
                </div>
            }
                <div className="max-w-xl mx-auto text-center py-4">
                    <h3 className="text-secondary font-semibold text-2xl lg:text-3xl">Get In Touch</h3>
                    <p className="py-2 text-secondary font-light text-sm lg:text-base">
                        We are available to offer our support and respond 
                        to inquiries that you may have. We are excitedly 
                        anticipating hearing from you.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="flex flex-col text-secondary px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                        <h4 className="text-secondary font-semibold text-xl text-center">Reach Out to <span className="text-primary">Opened Career</span></h4>
                        <p className="py-4 text-secondary font-light text-sm text-justify">
                            Looking for something specific? See below for contacts 
                            related to your inquiry. If you don’t find what you need, 
                            fill out our contact form.
                        </p>
                        <p className="py-2 text-primary font-semibold text-sm">GENERAL INQUIRIES</p>
                        <p className="text-secondary font-light text-sm">(+254) 700 000 897</p>
                        <p className="text-secondary font-light text-sm">openedcareer@gmail.com</p>
                    </div>
                    <div className="px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="form-control w-full max-w-2xl py-2">
                                    <div className="label">
                                        <span className="label-text text-secondary">Name</span>
                                    </div>
                                    <input type="text" name="fullName" placeholder="You can call me..." className="input input-bordered w-full italic shadow-md text-secondary text-sm bg-whity" required value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                                </label>

                                <label className="form-control w-full max-w-2xl py-2">
                                    <div className="label">
                                        <span className="label-text text-secondary">Email</span>
                                    </div>
                                    <input type="email" name="email" placeholder="You can reach me at..." className="input input-bordered w-full italic shadow-md text-secondary text-sm bg-whity" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>

                                <label className="form-control w-full max-w-2xl py-2">
                                    <div className="label">
                                        <span className="label-text text-secondary">Message</span>
                                    </div>
                                    <textarea name="message" className="textarea textarea-bordered h-24 italic shadow-md text-secondary text-sm bg-whity" placeholder="I would like to say that..." required value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                                </label>

                                {loading && <p className='text-xs italic '>Sending Message...</p>}
                                <label className="form-control w-full max-w-2xl py-6">
                                    <div className="text-whity font-semibold text-end">
                                        <button type='submit' value="submit" className="grad-to-br focus:outline-none focus:ring focus:ring-cyan-300 py-2 px-6 rounded-3xl transition duration-200 transform hover:scale-110">Submit</button>
                                    </div>
                                </label>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact