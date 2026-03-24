"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useFlowStore } from "@/store/useFlowStore"
import * as LucideIcons from "lucide-react"
import CustomNodeDialog from "../flow/controls/CustomNodeDialog"
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_INITIAL_STEPS } from "@/lib/constants"
import { FlowNode } from "@/types/flow"

const initialSteps = DEFAULT_INITIAL_STEPS

export default function AddNodePanel() {
    const { nodes, addNode } = useFlowStore()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const iconMap: Record<string, string> = {
        ad: "Megaphone",
        land: "PanelTop",
        form: "SquareUserRound",
        check: "ShoppingCart",
        custom: "Circle",
    }

    const handleAddNode = (step: typeof initialSteps[0]) => {
        const newNode = {
            id: `${uuidv4()}`,
            type: step.type,
            position: {
                x: Math.random() * 400 + 100,
                y: Math.random() * 300 + 100
            },
            data: step.defaultData,
        } as FlowNode
        addNode(newNode)
    }

    const handleDuplicateNode = (node: FlowNode) => {
        const newNode = {
            ...node,
            id: `${uuidv4()}`,
            position: {
                x: node.position.x + 50,
                y: node.position.y + 50
            }
        }
        addNode(newNode)
    }

    const handleAddStep = () => {
        setIsDialogOpen(true)
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false)
    }

    const uniqueCustomNodes = Array.from(
        new Map(
            nodes
                .filter((node) => node.type === "custom")
                .map((node) => [(node.data as any).label || node.type, node])
        ).values()
    )

    return (
        <div className="font-family-poppins capitalize w-64 h-full right-0 top-0 p-4 bg-white rounded-sm shadow-md border overflow-y-auto">
            {uniqueCustomNodes.map((node) => {
                const icon = iconMap[node.type as string] || "Circle"
                const NodeIcon = (LucideIcons as any)[icon] || LucideIcons.Circle
                const label = (node.data as any).label || node.type
                return (
                    <Card
                        key={`${node.type}-${label}`}
                        onClick={() => handleDuplicateNode(node)}
                        className="mb-3 cursor-pointer hover:bg-blue-50 transition-colors border-blue-200"
                    >
                        <div className="flex items-center gap-3 p-3">
                            <NodeIcon size={20} />
                            <span className="text-sm">{label}</span>
                        </div>
                    </Card>
                )
            })}

            {initialSteps.map((step) => {
                const StepIcon = (LucideIcons as any)[step.icon] || LucideIcons.Circle
                return (
                    <Card
                        key={step.id}
                        onClick={() => handleAddNode(step)}
                        className="mb-3 cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        <div className="flex items-center gap-3 p-3">
                            <StepIcon size={20} />
                            <span>{step.label}</span>
                        </div>
                    </Card>
                )
            })}

            <Card
                onClick={handleAddStep}
                className="mb-3 cursor-pointer hover:bg-gray-100 transition-colors"
            >
                <div className="flex items-center gap-3 p-3">
                    <LucideIcons.Plus size={20} />
                    <span>Adicionar etapa</span>
                </div>
            </Card>

            <CustomNodeDialog
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
            />
        </div>
    )
}