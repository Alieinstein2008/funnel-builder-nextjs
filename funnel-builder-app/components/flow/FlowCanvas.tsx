"use client"

import React from "react"
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
} from "reactflow"

const initialNodes = [
    {
        id: "1",
        position: { x: 100, y: 100 },
        data: { label: "Anúncio" },
        type: "default",
    },
]

const initialEdges: any[] = []

export default function FlowCanvas() {
    return (
        <div className="w-full h-screen">
            <ReactFlow nodes={initialNodes} edges={initialEdges}>
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    )
}