"use client"

import { FormNodeData } from "@/types/flow"
import { HANDLE_DEFAULT_HEX_COLORS } from "@/lib/constants"
import GenericNode from "./GenericNode"

export default function FormNode({ data }: { data: FormNodeData }) {
    return (
        <GenericNode
            label={data.label}
            icon="SquareUserRound"
            color="yellow"
            handleColor={HANDLE_DEFAULT_HEX_COLORS.form}
            firstMetricName="Envios"
            firstMetricValue={data.submissions}
            secondMetricName="Cadastros"
            secondMetricValue={data.registrations}
        />
    )
}