export default function Leaderboard() {
    return (
        <div className="overflow-x-auto">
            <h2 className="text-blue-500 text-center text-2xl font-bold mb-8">Classement</h2>
            <table className="table w-full mx-auto">
                <thead>
                <tr className="text-blue-500 text-center">
                    <th className="w-1/4">#</th>
                    <th className="w-1/2">Nom</th>
                    <th className="w-1/4">Vote</th>
                </tr>
                </thead>
                <tbody>
                <tr className="text-center">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>130</td>
                </tr>
                <tr className="text-center">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>67</td>
                </tr>
                <tr className="text-center">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>30</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
