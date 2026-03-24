"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { NodeEditorProps } from "@/types/flow"

export default function NodeEditor({ selectedNode, onClose, onSave, onDelete }: NodeEditorProps) {
    const [editedData, setEditedData] = useState<any>(null)

    useEffect(() => {
        if (selectedNode) {
            setEditedData({ ...selectedNode.data })
        } else {
            setEditedData(null)
        }
    }, [selectedNode])

    if (!selectedNode || !editedData) {
        return (
            <Card className="w-full h-1/7 p-4 border font-family-poppins">
                <h3 className="text-lg font-semibold text-center">Editor de Nó</h3>
                <p className="text-sm text-gray-600">Clique em um nó no canvas para editar ou excluir.</p>
            </Card>
        )
    }

    const inputText = (key: string, label: string) => (
        <div className="space-y-1 font-family-poppins">
            <Label className="text-sm" htmlFor={`edit-text-field-${label}`}>
                {label}
            </Label>
            <Input
                id={`edit-text-field-${label}`}
                value={editedData[key] ?? ""}
                onChange={(e) => setEditedData((prev: any) => ({ ...prev, [key]: e.target.value }))}
            />
        </div>
    )

    const calculateConversion = () => {
        if (selectedNode.type === 'custom') {
            if (editedData.firstStatValue === 0) return "N/A"
            const percent = ((editedData.secondStatValue / editedData.firstStatValue) * 100).toFixed(2)
            return `${percent}%`
        }

        const numericValues = Object.entries(editedData)
            .filter(([key, value]) => typeof value === "number" && key !== "label")
            .map(([_, value]) => value as number)

        if (numericValues.length < 2 || numericValues[0] === 0) return null

        const percent = ((numericValues[1] / numericValues[0]) * 100).toFixed(2)
        return `${percent}%`
    }

    const renderFields = () => {
        let entries = Object.entries(editedData).filter(([key]) => key !== "label")

        if (selectedNode.type === 'custom') {
            entries = entries.filter(([key]) => key === "firstStatValue" || key === "secondStatValue")
        }

        const genericFields = entries.map(([key, value]) => {
            if (key === "firstStatValue" || key === "secondStatValue") {
                const label =
                    key === "firstStatValue"
                        ? editedData.firstStatName || "Valor Métrica 1"
                        : editedData.secondStatName || "Valor Métrica 2"

                return (
                    <div key={key} className="space-y-1 font-family-poppins">
                        <Label className="text-sm" htmlFor={`edit-number-field-${value}`}>
                            {label}
                        </Label>
                        <Input
                            id={`edit-number-field-${value}`}
                            type="number"
                            value={editedData[key] ?? ""}
                            onChange={(e) => setEditedData((prev: any) => ({ ...prev, [key]: Number(e.target.value) }))}
                        />
                    </div>
                )
            }

            if (typeof value === "number") {
                return (
                    <div key={key} className="space-y-1 font-family-poppins">
                        <Label className="text-sm" htmlFor={`edit-number-field-${value}`}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Label>
                        <Input
                            id={`edit-number-field-${value}`}
                            type="number"
                            value={editedData[key] ?? ""}
                            onChange={(e) => setEditedData((prev: any) => ({ ...prev, [key]: Number(e.target.value) }))}
                        />
                    </div>
                )
            }

            return (
                <div key={key} className="space-y-1 font-family-poppins">
                    <Label className="text-sm" htmlFor={`edit-text-field-${value}`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Label>
                    <Input
                        id={`edit-text-field-${value}`}
                        value={editedData[key] ?? ""}
                        onChange={(e) => setEditedData((prev: any) => ({ ...prev, [key]: e.target.value }))}
                    />
                </div>
            )
        })

        const conversion = calculateConversion()

        return (
            <>
                {inputText("label", "Nome")}
                <Separator className="my-3" />
                {genericFields}
                {conversion && (
                    <div className="mt-3 rounded border px-3 py-2 bg-gray-50 font-family-poppins">
                        <p className="text-sm font-medium">Taxa de conversão</p>
                        <p className="text-base text-slate-700">{conversion}</p>
                    </div>
                )}
            </>
        )
    }

    return (
        <Card className="w-full h-120 p-4 border font-family-poppins text-center">
            <h3 className="text-lg font-semibold mb-3">Editor de Nó</h3>
            <div className="space-y-3">{renderFields()}</div>

            <Separator className="my-4" />

            <div className="flex gap-2 justify-between">
                <Button variant="destructive" onClick={() => onDelete(selectedNode.id)}>
                    Excluir
                </Button>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button onClick={() => onSave(selectedNode.id, editedData)}>Salvar</Button>
                </div>
            </div>
        </Card>
    )
}
