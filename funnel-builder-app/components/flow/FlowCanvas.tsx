"use client"

import React from "react"

import ReactFlow, {
    Background,
    Controls,
    MiniMap,
} from "reactflow"

import AdNode from "./nodes/AdNode"
import LandingNode from "./nodes/LandingNode"
import FormNode from "./nodes/FormNode"
import CheckoutNode from "./nodes/CheckoutNode"

const nodeTypes = {
    ad: AdNode,
    land: LandingNode,
    form: FormNode,
    check: CheckoutNode
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
    },
    {
        id: "2",
        type: "land",
        position: { x: 350, y: 100 },
        data: {
            label: "Landing Page",
            visits: 800,
            leads: 320
        }
    },
    {
        id: "3",
        type: "form",
        position: { x: 600, y: 100 },
        data: {
            label: "Formulário",
            registrations: 150,
            submissions: 320
        }
    },
    {
        id: "4",
        type: "check",
        position: { x: 850, y: 100 },
        data: {
            label: "Checkout",
            started: 150,
            purchases: 320
        }
    },



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