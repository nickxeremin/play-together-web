import React from "react"
import { motion } from "motion/react"
import { Link } from "react-router"

import { HomeSectionModel } from "../model/home-sections"

const CARD_HEIGHT = 400

type HomeSectionProps = {
    homeSection: HomeSectionModel
}

function HomeSection({ homeSection }: HomeSectionProps) {
    const [isGroupHovered, setIsGroupHovered] = React.useState(false)

    const descriptionRef = React.useRef<HTMLParagraphElement | null>(null)

    const descriptionHeight =
        descriptionRef.current?.getBoundingClientRect().height || 0
    const bgHeight = CARD_HEIGHT + descriptionHeight + 40
    const contentHeight = 20 + 16 + 48 + descriptionHeight

    return (
        <Link to={homeSection.url} className="w-full max-w-xl">
            <div
                className="group relative h-[400px] w-full"
                onMouseEnter={() => setIsGroupHovered(true)}
                onMouseLeave={() => setIsGroupHovered(false)}
            >
                <div className="relative box-content flex size-full flex-col overflow-hidden rounded border-4 border-double">
                    <motion.img
                        animate={
                            isGroupHovered ? { scale: 1.25 } : { scale: 1.05 }
                        }
                        src={homeSection.imgSrc}
                        alt=""
                        className="absolute inset-0 size-full object-cover"
                    />

                    <div className="absolute inset-0 size-full bg-[url('/src/assets/images/bg-dots.png')] opacity-5" />

                    <motion.div
                        animate={
                            isGroupHovered
                                ? { translateY: `${-descriptionHeight - 8}px` }
                                : {}
                        }
                        style={{
                            height: `${bgHeight}px`,
                        }}
                        className="absolute -inset-y-5 inset-x-0 w-full"
                    >
                        <div
                            style={{ height: `${bgHeight - contentHeight}px` }}
                            className="w-full translate-y-px bg-gradient-to-b from-transparent to-background"
                        />
                        <div
                            style={{ height: `${contentHeight}px` }}
                            className="flex w-full flex-col gap-2 bg-background p-2"
                        >
                            <h3 className="text-[3rem] font-bold leading-none text-brand-title">
                                {homeSection.name}
                            </h3>
                            <p
                                ref={descriptionRef}
                                className="text-sm text-secondary"
                            >
                                {homeSection.decription}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Link>
    )
}

export default HomeSection
