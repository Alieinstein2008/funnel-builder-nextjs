"use client"

import { useState, useCallback } from "react"

import ReactFlow, {
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    Background,
    Controls,
    MiniMap,
    NodeChange,
    EdgeChange,
    Edge
} from "reactflow"

import AdNode from "./nodes/AdNode"
import LandingNode from "./nodes/LandingNode"
import FormNode from "./nodes/FormNode"
import CheckoutNode from "./nodes/CheckoutNode"
import { FlowNode } from "@/types/flow"

const nodeTypes = {
    ad: AdNode,
    land: LandingNode,
    form: FormNode,
    check: CheckoutNode,
}


const initialNodes: FlowNode[] = [
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

const initialEdges: Edge[] = []


export default function FlowCanvas() {

    const [nodes, setNodes] = useState<FlowNode[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot as any) as FlowNode[]),
        [],
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );

    const onConnect = useCallback(
        (params: any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div className="w-full h-screen">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    )
}