"use client"

import { LandingNodeData } from "@/types/flow"
import { HANDLE_DEFAULT_HEX_COLORS } from "@/lib/constants"
import GenericNode from "./GenericNode"

export default function LandingNode({ data }: { data: LandingNodeData }) {
    return (
        <GenericNode
            label={data.label}
            icon="PanelTop"
            color="green"
            handleColor={HANDLE_DEFAULT_HEX_COLORS.landing}
            firstMetricName="Visitas"
            firstMetricValue={data.visits}
            secondMetricName="Leads"
            secondMetricValue={data.leads}
        />
    )
}