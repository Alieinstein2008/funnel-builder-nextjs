import AddNodePanel from "@/components/sidebar/AddNodePanel"
import FlowCanvas from "@/components/flow/FlowCanvas"
import NodeEditor from "@/components/sidebar/NodeEditor"

export default function Home() {
  return (
    <div className="flex h-screen">
      <AddNodePanel></AddNodePanel>
      <div className="flex-1">
        <FlowCanvas></FlowCanvas>
      </div>
    </div>
  )


}
