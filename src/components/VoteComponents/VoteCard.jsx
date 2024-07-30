export default function VoteCard() {
    return (
        <div className="bg-gray-900 flex flex-col justify-center items-center p-8 rounded-lg">
            <form className="form-horizontal">
                <div className="input-group">
                    <input type="text" className="input input-bordered" placeholder="Nom"/>
                </div>
                <button type="submit" className="btn bg-blue-500 text-neutral-300 hover:bg-blue-700 hover:border-blue-700 border border-blue-500 mt-4 w-full">Voter</button>
            </form>
        </div>
    )
}