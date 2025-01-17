import { useParams } from "react-router"

function AliasPlaygroundPage() {
    const { sessionId } = useParams()

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-2"></div>
    )
}

export default AliasPlaygroundPage
