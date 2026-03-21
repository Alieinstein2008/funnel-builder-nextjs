"use client"

import React from "react"

import ReactFlow, {
    Background,
    Controls,
    MiniMap,
} from "reactflow"

import AdNode from "./nodes/AdNode"

const nodeTypes = {
    ad: AdNode,
}
const nodes = [
    {
        id: "1",
        type: "ad",
        position: { x: 100, y: 100 },
        data: {
            label: "Anúncio",
            impressions: 5000,
            clicks: 800
        }
    }
]

const edges: any[] = []


export default function FlowCanvas() {
    return (
        <div className="w-full h-screen">
            <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    )
}