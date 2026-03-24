import type { Node, Position } from "reactflow"

export type AdNodeData = {
    label: string
    impressions: number
    clicks: number
}

export type LandingNodeData = {
    label: string
    visits: number
    leads: number
}

export type FormNodeData = {
    label: string
    submissions: number
    registrations: number
}

export type CheckoutNodeData = {
    label: string
    started: number
    purchases: number
}

export type CustomNodeData = {
    label: string
    firstStatName: string
    secondStatName: string
    firstStatValue: number
    secondStatValue: number
    color: "blue" | "green" | "red" | "yellow" | "purple" | "pink" | "indigo" | "gray"
    icon: string
}

export interface CustomNodeDialogProps {
    isOpen: boolean
    onClose: () => void
}

export type NodeEditorProps = {
    selectedNode: FlowNode | null
    onClose: () => void
    onSave: (nodeId: string, data: any) => void
    onDelete: (nodeId: string) => void
}

export type CustomHandleProps = {
  type: "source" | "target"
  position: Position
  color: string
}

export type FlowNode = Node<AdNodeData> | Node<LandingNodeData> | Node<FormNodeData> | Node<CheckoutNodeData> | Node<CustomNodeData>

export type NodeType = "ad" | "landing" | "form" | "checkout" | "custom"