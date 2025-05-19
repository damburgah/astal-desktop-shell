import { Gtk } from "astal/gtk4"
import { bind, Variable } from "astal"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default()
const wsLabels = ["α", "β", "γ", "δ", "ε", "ζ"]

export default function Workspaces() {
    return wsLabels.map((label, i) => WorkspaceButton(i, label))
}

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

        <box
            halign={Gtk.Align.CENTER}
            cssClasses={["inner"]}
        >
            <label label={label} />
        </box>
    </button>
}
