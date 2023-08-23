export default function PostElement({data}) {
    return (
        <div className="m-2 p-6 bg-white max-w">
            {data.text}
        </div>
    )
}