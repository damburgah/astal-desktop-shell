import { Gtk } from "astal/gtk4"
import { bind, Variable } from "astal"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default()
const wsLabels = ["α", "β", "γ", "δ", "ε", "ζ"]
const wsIds = wsLabels.map((_, i) => i + 1)

const getOccupiedStates = () =>
    wsIds.map(wsId => hypr.get_workspace(wsId)?.get_clients().length > 0)

const occupiedWorkspaces = Variable(getOccupiedStates())

const updateOccupied = () => {
    occupiedWorkspaces.set(getOccupiedStates())
}

for (const signal of ["client-added", "client-moved", "client-removed"]) {
    hypr.connect(signal, updateOccupied)
}

const WorkspaceButton = (index: number, label: string): JSX.Element => {
    const wsId = index + 1

    const classNames = Variable.derive(
        [bind(hypr, "focusedWorkspace"), occupiedWorkspaces],
        (fw, occupied) => {
            const classes = ["Workspace"]
            if (fw?.id === wsId) classes.push("Active")
            if (occupied?.[index]) classes.push("Occupied")
            return classes
        }
    )

    return <button
        cssClasses={classNames()}
        hexpand
        onClicked={() => {
            if (hypr.focusedWorkspace?.id !== wsId) {
                hypr.dispatch("workspace", wsId.toString())
            }
        }}
        tooltipText={`Switch to workspace ${wsId}`}>

        <box>
            <box
                hexpand
                halign={Gtk.Align.CENTER}
                cssClasses={["inner"]}
            >
                <label label={label} />
            </box>
        </box>
    </button>
}

export default function Workspaces() {
    return <>
        {wsLabels.map((label, i) => WorkspaceButton(i, label))}
    </>
}
