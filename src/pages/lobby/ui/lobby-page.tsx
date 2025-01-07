import { useAnimatedText } from "@/shared/lib/hooks/use-animated-text"

import GamesList from "./games-list"
import LobbyPreview from "./lobby-preview"

function LobbyPage() {
    return (
        <div className="flex h-full flex-col items-center gap-10 p-8 pt-[100px]">
            <LobbyPreview />

            <GamesList />
        </div>
    )
}

export default LobbyPage
