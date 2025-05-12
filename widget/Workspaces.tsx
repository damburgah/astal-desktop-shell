import { bind, Variable } from "astal"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default()
const wsLabels = ["α", "β", "γ", "δ", "ε", "ζ"]

const WorkspaceButton = (index: number, label: string) => {
    const wsId = index + 1

    const classNames = Variable.derive(
        [bind(hypr, "focusedWorkspace")],
        (fw) => {
            const classes = ["Workspace"]
            if (fw?.id === wsId) classes.push("Active")
            return classes
        }
    )

    return <button
        cssClasses={classNames()}
        hexpand
        onClicked={() => {
            if (hypr.focusedWorkspace?.id !== wsId)
                hypr.dispatch("workspace", wsId.toString())
        }}
        tooltipText={`Switch to workspace ${wsId}`}>
        <label label={label} />
    </button>
}

export default function Workspaces() {
    return wsLabels.map((label, i) => WorkspaceButton(i, label))
}
