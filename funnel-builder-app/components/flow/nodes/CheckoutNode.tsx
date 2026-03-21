"use client"

import { Handle, Position } from "reactflow"
import { ShoppingCart  } from "lucide-react"
import { CheckoutNodeData } from "@/types/flow"

export default function CheckoutNode({ data }: { data: CheckoutNodeData }) {
    return (
        <div className="font-family-poppins w-60 rounded-sm overflow-hidden shadow-md border border-red-300 bg-white">

            <div className="bg-red-500 text-white px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShoppingCart  size={25} />
                    <span className="text-sm font-semibold">{data.label}</span>
                </div>
                <div className="w-3.5 h-3.5 bg-white rounded-full opacity-90 border-2 border-red-600" />
            </div>

            <div className="px-3 py-3 text-sm space-y-2 bg-red-800">
                <div className="flex justify-center gap-3 border-b border-red-400">
                    <span className="font-semibold text-white text-sm">
                        {data.started.toLocaleString()}
                    </span>
                    <span className="text-white text-sm capitalize">Iniciaram</span>
                </div>

                <div className="flex justify-center gap-3">
                    <span className="font-semibold text-white text-sm">{data.purchases}</span>
                    <span className="text-white text-sm capitalize">Compras</span>
                </div>
            </div>

            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 bg-red-500 border-2 border-white"
            />

            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 bg-red-500 border-2 border-white"
            />
        </div>
    )
}