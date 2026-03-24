"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CustomNodeData, CustomNodeDialogProps } from "@/types/flow"
import { useFlowStore } from "@/store/useFlowStore"
import * as LucideIcons from "lucide-react"
import { CUSTOM_COLOR_OPTIONS, CUSTOM_LUCIDE_ICON_OPTIONS, DEFAULT_INITIAL_FORM_DATA } from "@/lib/constants"
import { v4 as uuidv4 } from "uuid"

const colorOptions = CUSTOM_COLOR_OPTIONS;
const iconOptions = CUSTOM_LUCIDE_ICON_OPTIONS;
const defaultFormData = DEFAULT_INITIAL_FORM_DATA

export default function CustomNodeDialog({ isOpen, onClose }: CustomNodeDialogProps) {
  const { addNode } = useFlowStore()

  const [formData, setFormData] = useState(defaultFormData)

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()

    if (!formData.label.trim() || !formData.firstStatName.trim() || !formData.secondStatName.trim()) {
      return
    }

    const newNode = {
      id: `${uuidv4()}`,
      type: "custom" as const,
      position: {
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100
      },
      data: formData
    }

    addNode(newNode)
    onClose()

    setFormData(defaultFormData)
  }

  const handleInputChange = (field: keyof CustomNodeData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const selectedIcon = (LucideIcons as any)[formData.icon] || LucideIcons.Circle

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="font-family-poppins sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <LucideIcons.Plus className="h-5 w-5" />
            Adicionar Nova Etapa Personalizada
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} name="custom-node-form" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="label">Nome da Etapa *</Label>
                <Input
                  id="label"
                  value={formData.label}
                  onChange={(e) => handleInputChange("label", e.target.value)}
                  placeholder="Ex: Newsletter, Webinar, Consultoria..."
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-family-poppins">Aparência Visual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="color">Cor do Tema</Label>
                  <Select value={formData.color} onValueChange={(value) => handleInputChange("color", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {colorOptions.map((color) => (
                        <SelectItem key={color.value} value={color.value}>
                          <div className="flex items-center gap-2 font-family-poppins">
                            <div className={`w-3 h-3 rounded-full bg-${color.value}-500`} />
                            {color.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icon">Ícone</Label>
                  <Select value={formData.icon} onValueChange={(value) => handleInputChange("icon", value)}>
                    <SelectTrigger>
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          {React.createElement(selectedIcon, { className: "h-4 w-4" })}
                          {formData.icon}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {iconOptions.map((icon) => {
                        const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Circle
                        return (
                          <SelectItem key={icon} value={icon}>
                            <div className="flex items-center gap-2 font-family-poppins">
                              {React.createElement(IconComponent, { className: "h-4 w-4" })}
                              {icon}
                            </div>
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                  Primeira Estatística
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstStatName">Nome *</Label>
                    <Input
                      id="firstStatName"
                      value={formData.firstStatName}
                      onChange={(e) => handleInputChange("firstStatName", e.target.value)}
                      placeholder="Ex: Visualizações, Cliques..."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstStatValue">Valor</Label>
                    <Input
                      id="firstStatValue"
                      type="number"
                      value={formData.firstStatValue}
                      onChange={(e) => handleInputChange("firstStatValue", parseInt(e.target.value) || 0)}
                      min="0"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                  Segunda Estatística
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="secondStatName">Nome *</Label>
                    <Input
                      id="secondStatName"
                      value={formData.secondStatName}
                      onChange={(e) => handleInputChange("secondStatName", e.target.value)}
                      placeholder="Ex: Conversões, Vendas..."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondStatValue">Valor</Label>
                    <Input
                      id="secondStatValue"
                      type="number"
                      value={formData.secondStatValue}
                      onChange={(e) => handleInputChange("secondStatValue", parseInt(e.target.value) || 0)}
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <DialogFooter className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={!formData.label.trim() || !formData.firstStatName.trim() || !formData.secondStatName.trim()}>
              <LucideIcons.Plus className="h-4 w-4 mr-2" />
              Adicionar Etapa
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}