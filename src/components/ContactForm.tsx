export default function ContactForm() {
    return (
        <section id="contact" className="bg-gray-900 text-white px-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Lets collaborate!</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Do you have a project you need a partner for? Or just any questions in general? Email me!
                </p>
                <form
                    className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-4"
                    action="https://formspree.io/f/your-email"
                    method="POST"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
