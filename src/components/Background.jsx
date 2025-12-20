import React from 'react'

const Background = () => {
    return (
        <>          
        <div
            className="absolute inset-0
        bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
        bg-[size:80px_80px]"
        />

        <div
                className="absolute inset-0
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_40%)]"
            />

        <div
                className="absolute top-[-20%] right-[-10%]
        h-[600px] w-[600px] rounded-full
        bg-[radial-gradient(circle,rgba(168,85,247,0.35),transparent_70%)]
        blur-3xl"
            />

        <div
                className="absolute bottom-[-25%] left-[-15%]
        h-[700px] w-[700px] rounded-full
        bg-[radial-gradient(circle,rgba(236,72,153,0.25),transparent_70%)]
        blur-3xl"
            />
        </>
    )
}

export default Background