import React from "react"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

import { Button } from "@/shared/ui/button"

type PaginationProps = {}

function Pagination({}: PaginationProps) {
    return (
        <div className="flex h-10 w-full items-center justify-center gap-4">
            <Button variant="ghost" size="icon">
                <IconChevronLeft strokeWidth={3} className="size-6" />
            </Button>

            <div className="text-[1.25rem] font-medium">1</div>

            <Button variant="ghost" size="icon">
                <IconChevronRight strokeWidth={3} className="size-6" />
            </Button>
        </div>
    )
}

export default Pagination
