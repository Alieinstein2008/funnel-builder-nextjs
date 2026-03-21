"use client"

import { Handle, Position } from "reactflow"
import { SquareUserRound  } from "lucide-react"
import { FormNodeData } from "@/types/flow"

export default function FormNode({ data }: { data: FormNodeData }) {
    return (
        <div className="font-family-poppins w-60 rounded-sm overflow-hidden shadow-md border border-yellow-300 bg-white">

            <div className="bg-yellow-500 text-white px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <SquareUserRound  size={25} />
                    <span className="text-sm font-semibold">{data.label}</span>
                </div>
                <div className="w-3.5 h-3.5 bg-white rounded-full opacity-90 border-2 border-yellow-600" />
            </div>

            <div className="px-3 py-3 text-sm space-y-2 bg-yellow-800">
                <div className="flex justify-center gap-3 border-b border-yellow-400">
                    <span className="font-semibold text-white text-sm">
                        {data.submissions.toLocaleString()}
                    </span>
                    <span className="text-white text-sm capitalize">Envios</span>
                </div>

                <div className="flex justify-center gap-3">
                    <span className="font-semibold text-white text-sm">{data.registrations}</span>
                    <span className="text-white text-sm capitalize">Cadastros</span>
                </div>
            </div>

            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 bg-yellow-500 border-2 border-white"
            />

            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 bg-yellow-500 border-2 border-white"
            />
        </div>
    )
}