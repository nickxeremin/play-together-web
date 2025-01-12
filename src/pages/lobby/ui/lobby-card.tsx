import React from "react"

import { Button } from "@/shared/ui/button"

import { LobbyModel } from "../model/lobby-schema"

type LobbyCardProps = {
    lobby: LobbyModel
}

function LobbyCard({ lobby }: LobbyCardProps) {
    return (
        <div className="grid h-40 grid-cols-2 overflow-hidden rounded-md border-2">
            <div className="flex flex-col justify-between border-r-2 p-3">
                <div className="flex flex-col">
                    <div className="text-[1.5rem] font-semibold text-primary">
                        {lobby.name}
                    </div>
                    <p className="text-secondary">{lobby.description}</p>
                </div>

                <div className="flex">
                    <Button>Join</Button>
                </div>
            </div>

            <div className="relative bg-teal-600/10">
                <div className="absolute bottom-3 left-3 text-[1.5rem] font-bold">
                    Codenames
                </div>
            </div>
        </div>
    )
}

export default LobbyCard
