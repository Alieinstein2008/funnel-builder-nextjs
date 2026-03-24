"use client"

import { CustomNodeData } from "@/types/flow"
import GenericNode from "./GenericNode"
import { CUSTOM_COLOR_MAP } from "@/lib/constants"

export default function CustomNode({ data }: { data: CustomNodeData }) {
    const color = data.color || "blue"
    const handleColor = CUSTOM_COLOR_MAP[color]?.handle || "#3b82f6"

    return (
        <GenericNode
            label={data.label}
            icon={data.icon}
            color={color}
            handleColor={handleColor}
            firstMetricName={data.firstStatName}
            firstMetricValue={data.firstStatValue}
            secondMetricName={data.secondStatName}
            secondMetricValue={data.secondStatValue}
        />
    )
}