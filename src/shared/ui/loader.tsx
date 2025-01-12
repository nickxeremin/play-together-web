import React from "react"
import { IconLoader2 } from "@tabler/icons-react"
import { motion, MotionConfig, useAnimation } from "motion/react"

import { sleep } from "../lib/utils"

type IconLoaderProps = {
    isLoading: boolean
}

function Loader({ isLoading }: IconLoaderProps) {
    if (!isLoading) {
        return null
    }

    return <IconLoader2 className="size-4 animate-spin" />
}

type GeometricLoaderProps = {
    isLoading: boolean
    length?: number
    borderRadius?: number
}

function GeometricLoader({
    isLoading,
    length = 16,
    borderRadius = 4,
}: GeometricLoaderProps) {
    const LENGTH = length
    const BORDER_RADIUS = borderRadius

    const crossControls = useAnimation()
    React.useEffect(() => {
        async function runCrossAnimation() {
            while (true) {
                await crossControls.start({
                    scale: 0.8,
                })

                await crossControls.start({
                    rotate: "90deg",
                })

                await crossControls.start({
                    scale: 1,
                })

                await sleep(150)

                crossControls.set({
                    scale: 1,
                    rotate: "0deg",
                })

                await sleep(150)
            }
        }

        runCrossAnimation()
    }, [crossControls])

    const square1Controls = useAnimation()
    React.useEffect(() => {
        async function runSequence() {
            while (true) {
                await square1Controls.start({
                    x: -LENGTH,
                    y: -LENGTH,
                    scale: 0.8,
                })

                await square1Controls.start({
                    x: LENGTH * 3,
                })

                await square1Controls.start({
                    x: LENGTH * 2,
                    y: 0,
                    scale: 1,
                })

                await sleep(150)

                square1Controls.set({
                    x: 0,
                    y: 0,
                })

                await sleep(150)
            }
        }

        runSequence()
    }, [square1Controls])

    const square2Controls = useAnimation()
    React.useEffect(() => {
        async function runSequence() {
            while (true) {
                await square2Controls.start({
                    x: LENGTH,
                    y: -LENGTH,
                    scale: 0.8,
                })

                await square2Controls.start({
                    y: LENGTH * 3,
                })

                await square2Controls.start({
                    y: LENGTH * 2,
                    x: 0,
                    scale: 1,
                })

                await sleep(150)

                square2Controls.set({
                    x: 0,
                    y: 0,
                })

                await sleep(150)
            }
        }

        runSequence()
    }, [square2Controls])

    const square3Controls = useAnimation()
    React.useEffect(() => {
        async function runSequence() {
            while (true) {
                await square3Controls.start({
                    x: LENGTH,
                    y: LENGTH,
                    scale: 0.8,
                })

                await square3Controls.start({
                    x: -LENGTH * 3,
                })

                await square3Controls.start({
                    x: -LENGTH * 2,
                    y: 0,
                    scale: 1,
                })

                await sleep(150)

                square3Controls.set({
                    x: 0,
                    y: 0,
                })

                await sleep(150)
            }
        }

        runSequence()
    }, [square3Controls])

    const square4Controls = useAnimation()
    React.useEffect(() => {
        async function runSequence() {
            while (true) {
                await square4Controls.start({
                    x: -LENGTH,
                    y: LENGTH,
                    scale: 0.8,
                })

                await square4Controls.start({
                    y: -LENGTH * 3,
                })

                await square4Controls.start({
                    y: -LENGTH * 2,
                    x: 0,
                    scale: 1,
                })

                await sleep(150)

                square4Controls.set({
                    x: 0,
                    y: 0,
                })

                await sleep(150)
            }
        }

        runSequence()
    }, [square4Controls])

    if (!isLoading) return null

    return (
        <div
            style={{
                position: "relative",
                width: `${LENGTH * 5}px`,
                height: `${LENGTH * 5}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Крест */}
            <MotionConfig
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
            >
                <motion.div
                    animate={crossControls}
                    style={{
                        position: "relative",
                        width: `${LENGTH * 3}px`,
                        height: `${LENGTH * 3}px`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        className="bg-brand"
                        style={{
                            position: "absolute",
                            width: `${LENGTH * 3}px`,
                            height: `${LENGTH}px`,
                            borderRadius: `${BORDER_RADIUS}px`,
                        }}
                    />
                    <div
                        className="bg-brand"
                        style={{
                            position: "absolute",
                            width: `${LENGTH}px`,
                            height: `${LENGTH * 3}px`,
                            borderRadius: `${BORDER_RADIUS}px`,
                        }}
                    />
                </motion.div>
            </MotionConfig>

            {/* Квадраты */}
            <MotionConfig
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
            >
                <motion.div
                    className="bg-brand"
                    style={{
                        position: "absolute",
                        width: `${LENGTH}px`,
                        height: `${LENGTH}px`,
                        left: `${LENGTH}px`,
                        top: `${LENGTH}px`,
                        borderRadius: `${BORDER_RADIUS}px`,
                    }}
                    animate={square1Controls}
                />

                <motion.div
                    className="bg-brand"
                    style={{
                        position: "absolute",
                        width: `${LENGTH}px`,
                        height: `${LENGTH}px`,
                        right: `${LENGTH}px`,
                        top: `${LENGTH}px`,
                        borderRadius: `${BORDER_RADIUS}px`,
                    }}
                    animate={square2Controls}
                />

                <motion.div
                    className="bg-brand"
                    style={{
                        position: "absolute",
                        width: `${LENGTH}px`,
                        height: `${LENGTH}px`,
                        right: `${LENGTH}px`,
                        bottom: `${LENGTH}px`,
                        borderRadius: `${BORDER_RADIUS}px`,
                    }}
                    animate={square3Controls}
                />

                <motion.div
                    className="bg-brand"
                    style={{
                        position: "absolute",
                        width: `${LENGTH}px`,
                        height: `${LENGTH}px`,
                        left: `${LENGTH}px`,
                        bottom: `${LENGTH}px`,
                        borderRadius: `${BORDER_RADIUS}px`,
                    }}
                    animate={square4Controls}
                />
            </MotionConfig>
        </div>
    )
}

export { Loader, GeometricLoader }
