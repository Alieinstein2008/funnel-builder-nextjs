"use client"

import { AdNodeData } from "@/types/flow"
import { HANDLE_DEFAULT_HEX_COLORS } from "@/lib/constants"
import GenericNode from "./GenericNode"

export default function AdNode({ data }: { data: AdNodeData }) {
    return (
        <GenericNode
            label={data.label}
            icon="Megaphone"
            color="blue"
            handleColor={HANDLE_DEFAULT_HEX_COLORS.ad}
            firstMetricName="Impressões"
            firstMetricValue={data.impressions}
            secondMetricName="Cliques"
            secondMetricValue={data.clicks}
        />
    )
}