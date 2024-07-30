export default function Stats() {
    return (
        <section className="bg-gray-800 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white">1200</h2>
                        <p className="text-white">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white">500</h2>
                        <p className="text-white">Projects Completed</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white">100</h2>
                        <p className="text-white">Awards Won</p>
                    </div>
                </div>
            </div>
        </section>
    )
}