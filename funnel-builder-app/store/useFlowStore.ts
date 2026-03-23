import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Edge } from 'reactflow'
import { FlowNode } from '@/types/flow'
import { v4 as uuidv4 } from 'uuid'

interface FlowState {
  nodes: FlowNode[]
  edges: Edge[]
  isEditorOpen: boolean
  setNodes: (nodes: FlowNode[]) => void
  setEdges: (edges: Edge[]) => void
  addNode: (node: FlowNode) => void
  addEdge: (edge: Edge) => void
  removeNode: (nodeId: string) => void
  removeEdge: (edgeId: string) => void
  updateNode: (nodeId: string, updates: Partial<FlowNode>) => void
  openEditor: () => void
  closeEditor: () => void
}


export const useFlowStore = create<FlowState>()(
  persist(
    (set, get) => ({
      nodes: [],
      edges: [],
      isEditorOpen: false,
      
      setNodes: (nodes) => set({ nodes }),
      setEdges: (edges) => set({ edges }),
      
      addNode: (node) =>
        set((state) => ({
          nodes: [...state.nodes, node],
        })),
      
      addEdge: (edge) =>
        set((state) => ({
          edges: [...state.edges, { ...edge, id: edge.id || `${uuidv4()}` }],
        })),
      
      removeNode: (nodeId) =>
        set((state) => ({
          nodes: state.nodes.filter((node) => node.id !== nodeId),
          edges: state.edges.filter(
            (edge) => edge.source !== nodeId && edge.target !== nodeId
          ),
        })),
      
      removeEdge: (edgeId) =>
        set((state) => ({
          edges: state.edges.filter((edge) => edge.id !== edgeId),
        })),
      
      updateNode: (nodeId, updates) =>
        set((state) => ({
          nodes: state.nodes.map((node) =>
            node.id === nodeId ? { ...node, ...updates } as FlowNode : node
          ),
        })),
      
      openEditor: () => set({ isEditorOpen: true }),
      closeEditor: () => set({ isEditorOpen: false }),
    }),
    {
      name: 'funnel-builder-storage',
      onRehydrateStorage: () => (state) => {
        if (state && state.edges) {
          const edgesWithIds = state.edges.map(edge => ({
            ...edge,
            id: edge.id || `${uuidv4()}`
          }))
          state.edges = edgesWithIds
        }
      }
    }
  )
)
