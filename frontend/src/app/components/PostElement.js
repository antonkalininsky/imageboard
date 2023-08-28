import { useEffect, useState } from "react"

export default function PostElement({ data }) {

    // states
    const [links, setLinks] = useState([])
    const [isLinkShown, setIsLinkShown] = useState(false)

    // hooks
    useEffect(() => {
        linksCreator(data.links)
    },
        [data.links, isLinkShown])

    // funs
    function linksCreator(linksList) {
        const result = []
        linksList.forEach((link) => {
            result.push(
                <span 
                    key={link.id}
                    className="text-green-600 hover:text-green-400 hover:underline cursor-pointer relative"
                    onMouseEnter={() => setIsLinkShown(true)}
                    onMouseLeave={() => setIsLinkShown(false)}
                >
                    &gt;&gt;{link.targetNumber}
                    {
                        isLinkShown && (
                            <div className="p-3 bg-gray-500 absolute top-full left-0">
                                hello world
                            </div>
                        )
                    }
                </span>
            )
        })
        setLinks(result)
    }

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
                {links}
            </div>
        </div>
    )
}