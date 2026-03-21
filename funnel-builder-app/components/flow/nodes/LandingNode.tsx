"use client"

import { Handle, Position } from "reactflow"
import { PanelTop } from "lucide-react"
import { LandingNodeData } from "@/types/flow"

export default function LandingNode({ data }: { data: LandingNodeData }) {
    return (
        <div className="font-family-poppins w-60 rounded-sm overflow-hidden shadow-md border border-green-300 bg-white">

            <div className="bg-green-500 text-white px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <PanelTop size={25} />
                    <span className="text-sm font-semibold">{data.label}</span>
                </div>
                <div className="w-3.5 h-3.5 bg-white rounded-full opacity-90 border-2 border-green-600" />
            </div>

            <div className="px-3 py-3 text-sm space-y-2 bg-green-800">
                <div className="flex justify-center gap-3 border-b border-green-400">
                    <span className="font-semibold text-white text-sm">
                        {data.visits.toLocaleString()}
                    </span>
                    <span className="text-white text-sm capitalize">Visitas</span>
                </div>

                <div className="flex justify-center gap-3">
                    <span className="font-semibold text-white text-sm">{data.leads}</span>
                    <span className="text-white text-sm capitalize">Leads</span>
                </div>
            </div>

            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 bg-green-500 border-2 border-white"
            />

            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 bg-green-500 border-2 border-white"
            />
        </div>
    )
}