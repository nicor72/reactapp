import React, { useEffect, useState } from 'react'

const Star = () => {

    const [starProps, setStarProps] = useState({
        top: 0,
        left: 0,
        curve: 0,
        duration: 0
    })

    const makeRandomStar = () => {
        const top = Math.random() * window.innerHeight
        const left = Math.random() * window.innerWidth
        const curve = (Math.random() * 5 + 5)
        const duration = (Math.random() * 1 + 1)

        setStarProps({
            top,
            left,
            curve,
            duration,
        })
    }

    useEffect(() => {
        makeRandomStar()
    }, [])

    return (
        <div
            className="star m-0"
            style={{
                animation: `twinkle ${starProps.curve}s linear ${starProps.duration}s infinite`,
                top: `${starProps.top}px`,
                left: `${starProps.left}px`
            }}
        ></div >
    )
}

export default Star
