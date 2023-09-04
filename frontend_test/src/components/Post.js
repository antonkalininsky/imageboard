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
        <div className="m-2 p-4 bg-white max-w post">
            {/* header */}
            <div className="text-gray-500 post__header">
                <span>{data.name}</span>
                <span>{data.dateTime}</span>
                <span>{data.number}</span>
                <button>опции</button>
            </div>
            {/* body */}
            <div className="post__body">
                {data.text}
            </div>
            {/* footer */}
            <div className="post__footer">
                {links}
            </div>
        </div>
    )
}