export default function PostElement({data}) {
    return (
        <div className="m-2 p-4 bg-white max-w">
            {/* header */}
            <div className="text-gray-500">
                <span>{data.name}</span>
                <span className="ml-3">{data.dateTime}</span>
                <span className="ml-3 text-green-600">{data.number}</span>
                <button className="bg-gray-200 p-1 ml-3">опции</button>
            </div>
            {/* body */}
            <div className="ml-4">
                {data.text}
            </div>
            {/* footer */}
            <div className="ml-4">
                {data.links}
            </div>
            
        </div>
    )
}