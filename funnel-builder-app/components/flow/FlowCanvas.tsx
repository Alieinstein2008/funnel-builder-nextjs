"use client"

import { useCallback } from "react"

import ReactFlow, {
    applyNodeChanges,
    applyEdgeChanges,
    Background,
    Controls,
    MiniMap,
    NodeChange,
    EdgeChange,
    Node,
} from "reactflow"

import AdNode from "./nodes/AdNode"
import LandingNode from "./nodes/LandingNode"
import FormNode from "./nodes/FormNode"
import CheckoutNode from "./nodes/CheckoutNode"
import CustomNode from "./nodes/CustomNode"
import DefaultEdge from "./edges/DefaultEdge"
import NodeEditor from "@/components/sidebar/NodeEditor"
import { useFlowStore } from "@/store/useFlowStore"
import { FlowNode } from "@/types/flow"

const nodeTypes = {
    ad: AdNode,
    landing: LandingNode,
    form: FormNode,
    checkout: CheckoutNode,
    custom: CustomNode
}

const edgeTypes = {
    default: DefaultEdge
}

export default function FlowCanvas() {
    const { nodes, edges, setNodes, setEdges, addEdge, updateNode, removeNode, selectedNode, setSelectedNode } = useFlowStore()

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes(applyNodeChanges(changes, nodes as any) as any),
        [nodes, setNodes],
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges(applyEdgeChanges(changes, edges)),
        [edges, setEdges],
    );

    const onConnect = useCallback(
        (params: any) => {
            const newEdge = {
                ...params,
                id: `edge-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
            }
            addEdge(newEdge)
        },
        [addEdge],
    );

    const onNodeClick = useCallback((_: any, node: Node) => {
        setSelectedNode(node as FlowNode)
    }, [])

    const closeEditor = () => setSelectedNode(null)

    const handleCloseEditor = () => setSelectedNode(null)

    const handleSave = (nodeId: string, data: any) => {
        updateNode(nodeId, { data })
        setSelectedNode(null)
    }

    const handleDelete = (nodeId: string) => {
        removeNode(nodeId)
        setSelectedNode(null)
    }

    return (
        <div className="w-full h-full flex">
            <div className="flex-1 h-full relative">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={onNodeClick}
                >
                    <Background />
                    <Controls />
                    <MiniMap />
                </ReactFlow>
            </div>

            <div className="w-80 p-2 absolute right-0 top-0 ">
                <NodeEditor
                    selectedNode={selectedNode}
                    onClose={handleCloseEditor}
                    onSave={handleSave}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    )
}