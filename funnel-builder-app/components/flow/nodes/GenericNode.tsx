"use client"

import { Position } from "reactflow"
import * as LucideIcons from "lucide-react"
import CustomHandle from "../customHandle"
import { CUSTOM_COLOR_MAP } from "@/lib/constants"

type GenericNodeProps = {
  label: string
  icon: string
  color: keyof typeof CUSTOM_COLOR_MAP
  handleColor: string
  firstMetricName: string
  firstMetricValue: number
  secondMetricName: string
  secondMetricValue: number
}

export default function GenericNode({
  label,
  icon,
  color,
  handleColor,
  firstMetricName,
  firstMetricValue,
  secondMetricName,
  secondMetricValue,
}: GenericNodeProps) {
  const colors = CUSTOM_COLOR_MAP[color] || CUSTOM_COLOR_MAP.blue
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Circle

  return (
    <div className={`font-family-poppins w-60 rounded-sm overflow-hidden shadow-md border ${colors.border} bg-white`}>
      <div className={`${colors.header} text-white px-3 py-2 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <IconComponent size={25} />
          <span className="text-sm font-semibold">{label}</span>
        </div>
        <div className={`w-3.5 h-3.5 bg-white rounded-full opacity-90 border-2 ${colors.indicator}`} />
      </div>

      <div className={`px-3 py-3 text-sm space-y-2 ${colors.body}`}>
        <div className={`flex justify-center gap-3 border-b ${colors.separator}`}>
          <span className="font-semibold text-white text-sm">{firstMetricValue.toLocaleString()}</span>
          <span className="text-white text-sm capitalize">{firstMetricName}</span>
        </div>

        <div className="flex justify-center gap-3">
          <span className="font-semibold text-white text-sm">{secondMetricValue.toLocaleString()}</span>
          <span className="text-white text-sm capitalize">{secondMetricName}</span>
        </div>
      </div>

      <CustomHandle type="target" position={Position.Left} color={handleColor} />
      <CustomHandle type="source" position={Position.Right} color={handleColor} />
    </div>
  )
}
