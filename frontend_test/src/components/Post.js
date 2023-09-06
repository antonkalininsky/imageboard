import { useEffect, useState } from "react"

export default function PostElement({ data }) {

    // states
    const [answers, setAnswers] = useState([])
    const [isAnswersShown, setIsAnswersShown] = useState(false)

    // hooks
    useEffect(() => {
        answersCreator(data.answers)
    },
        [JSON.stringify(data.answers)])

    // funs
    function answersCreator(answersList) {
        const result = []
        answersList.forEach((link) => {
            result.push(
                <span
                    className="link"
                    key={link}
                >
                    &gt;&gt;{link}
                </span>
            )
        })
        setAnswers(result)
    }

    function handleLinkClick() {
        console.log('hello world')
    }

    return (
        <div className="post">
            {/* header */}
            <div className="post__header">
                <span>{data.name}</span>
                <span>{data.dateTime}</span>
                <span onClick={handleLinkClick} className="link">№{data.id}</span>
                {/* <span>{data.number}</span> */}
                {/* <button>опции</button> */}
            </div>
            {/* body */}
            <div className="post__body">
                {data.text}
            </div>
            {/* footer */}
            <div className="post__footer">
                {answers}
            </div>
        </div>
    )
}