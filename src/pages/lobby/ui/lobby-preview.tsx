import { useAnimatedText } from "@/shared/lib/hooks/use-animated-text"

function LobbyPreview() {
    const title = useAnimatedText({ text: "Play Together", duration: 1 })
    const description = useAnimatedText({
        text: "Платформа для игр с друзьями, где каждый найдет что-то для себя.",
        duration: 3,
        delay: 1,
    })

    return (
        <div className="flex flex-col">
            <h1 className="text-center font-orbitron text-[4rem] font-extrabold text-blue-400">
                {title}
            </h1>
            <p className="text-center text-[1.5rem] font-medium text-blue-200">
                {description}
            </p>
        </div>
    )
}

export default LobbyPreview
