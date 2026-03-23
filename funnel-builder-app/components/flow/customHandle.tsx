"use client"

import { CustomHandleProps } from "@/types/flow"
import { Handle } from "reactflow"

export default function CustomHandle({ type, position, color }: CustomHandleProps) {
  return (
    <Handle
      type={type}
      position={position}
      className="w-3 h-3 rounded-full border border-white shadow-md transition-all"
      style={{
        backgroundColor: color,
        boxShadow: `0 0 0 2px white, 0 0 6px ${color}`,
      }}
    />
  )
}