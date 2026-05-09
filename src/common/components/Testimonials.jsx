export function Testimonials() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded shadow">
                        <p className="text-gray-700 mb-4">"Lingua Station has transformed the way I learn languages. The interactive lessons and personalized feedback have made a huge difference!"</p>
                        <h3 className="text-lg font-semibold">Maria S.</h3>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <p className="text-gray-700 mb-4">"I love the community aspect of Lingua Station. Connecting with other learners and native speakers has been invaluable."</p>
                        <h3 className="text-lg font-semibold">John D.</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}