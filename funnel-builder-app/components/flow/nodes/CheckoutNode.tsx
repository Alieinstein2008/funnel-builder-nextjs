"use client"

import { CheckoutNodeData } from "@/types/flow"
import { HANDLE_DEFAULT_HEX_COLORS } from "@/lib/constants"
import GenericNode from "./GenericNode"

export default function CheckoutNode({ data }: { data: CheckoutNodeData }) {
    return (
        <GenericNode
            label={data.label}
            icon="ShoppingCart"
            color="red"
            handleColor={HANDLE_DEFAULT_HEX_COLORS.checkout}
            firstMetricName="Iniciaram"
            firstMetricValue={data.started}
            secondMetricName="Compras"
            secondMetricValue={data.purchases}
        />
    )
}