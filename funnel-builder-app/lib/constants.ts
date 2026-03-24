import { CustomNodeData } from "@/types/flow"

export const CUSTOM_COLOR_MAP = {
    blue: {
        header: "bg-blue-500",
        body: "bg-blue-800",
        border: "border-blue-300",
        indicator: "border-blue-600",
        separator: "border-blue-400",
        handle: "#3b82f6"
    },
    green: {
        header: "bg-green-500",
        body: "bg-green-800",
        border: "border-green-300",
        indicator: "border-green-600",
        separator: "border-green-400",
        handle: "#10b981"
    },
    yellow: {
        header: "bg-yellow-500",
        body: "bg-yellow-800",
        border: "border-yellow-300",
        indicator: "border-yellow-600",
        separator: "border-yellow-400",
        handle: "#f59e0b"
    },
    red: {
        header: "bg-red-500",
        body: "bg-red-800",
        border: "border-red-300",
        indicator: "border-red-600",
        separator: "border-red-400",
        handle: "#ef4444"
    },
    purple: {
        header: "bg-purple-500",
        body: "bg-purple-800",
        border: "border-purple-300",
        indicator: "border-purple-600",
        separator: "border-purple-400",
        handle: "#8b5cf6"
    },
    pink: {
        header: "bg-pink-500",
        body: "bg-pink-800",
        border: "border-pink-300",
        indicator: "border-pink-600",
        separator: "border-pink-400",
        handle: "#ec4899"
    },
    indigo: {
        header: "bg-indigo-500",
        body: "bg-indigo-800",
        border: "border-indigo-300",
        indicator: "border-indigo-600",
        separator: "border-indigo-400",
        handle: "#6366f1"
    },
    gray: {
        header: "bg-gray-500",
        body: "bg-gray-800",
        border: "border-gray-300",
        indicator: "border-gray-600",
        separator: "border-gray-400",
        handle: "#6b7280"
    }
}

export const HANDLE_DEFAULT_HEX_COLORS = {
    ad: "#3b82f6",
    landing: "#10b981",
    form: "#f59e0b",
    checkout: "#ef4444",
    custom: "#8b5cf6"
}

export const CUSTOM_COLOR_OPTIONS = [
    { value: "blue", label: "Azul" },
    { value: "green", label: "Verde" },
    { value: "yellow", label: "Amarelo" },
    { value: "red", label: "Vermelho" },
    { value: "purple", label: "Roxo" },
    { value: "pink", label: "Rosa" },
    { value: "indigo", label: "Índigo" },
    { value: "gray", label: "Cinza" }
]

export const CUSTOM_LUCIDE_ICON_OPTIONS = [
    "Star", "Heart", "Zap", "Target", "TrendingUp", "Users", "Mail", "Phone",
    "Calendar", "Clock", "MapPin", "Camera", "Music", "Video", "Image", "File",
    "Settings", "Search", "Filter", "Download", "Upload", "Share", "Link", "Code"
]

export const DEFAULT_INITIAL_STEPS = [
    {
        id: "ad",
        type: "ad",
        label: "Anúncio",
        icon: "Megaphone",
        defaultData: {
            label: "Anúncio",
            impressions: 5000,
            clicks: 800
        }
    },
    {
        id: "land",
        type: "landing",
        label: "Landing Page",
        icon: "PanelTop",
        defaultData: {
            label: "Landing Page",
            visits: 800,
            leads: 320
        }
    },
    {
        id: "form",
        type: "form",
        label: "Formulário",
        icon: "SquareUserRound",
        defaultData: {
            label: "Formulário",
            submissions: 320,
            registrations: 150
        }
    },
    {
        id: "check",
        type: "checkout",
        label: "Checkout",
        icon: "ShoppingCart",
        defaultData: {
            label: "Checkout",
            started: 150,
            purchases: 75
        }
    },
]

export const DEFAULT_INITIAL_FORM_DATA: CustomNodeData = {
    label: "",
    firstStatName: "",
    secondStatName: "",
    firstStatValue: 0,
    secondStatValue: 0,
    color: "blue",
    icon: "Star"
}