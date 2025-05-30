import { Gtk } from "astal/gtk4"
import { bind, Variable } from "astal"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default()
const wsLabels = ["α", "β", "γ", "δ", "ε", "ζ"]

const occupiedWorkspaces = Variable(
    wsLabels.map((_, i) => {
        const wsId = i + 1
        return hypr.get_workspace(wsId)?.get_clients().length > 0
    })
)

hypr.connect("clientMoved", () => {
    occupiedWorkspaces.set(
        wsLabels.map((_, i) => {
            const wsId = i + 1
            return hypr.get_workspace(wsId)?.get_clients().length > 0
        })
    )
})

const WorkspaceButton = (index: number, label: string) => {
    const wsId = index + 1

    const classNames = Variable.derive(
        [bind(hypr, "focusedWorkspace")],
        (fw, occupied) => {
            const classes = ["Workspace"]
            const workspace = hypr.get_workspace(wsId)

            hypr.connect("client-moved", () => {
                return self
            })

            if (fw?.id === wsId) classes.push("Active")
            if (workspace?.get_clients().length > 0) classes.push("Occupied")

            // const occupied = hypr.get_workspace(wsId)?.get_clients().length > 0
            // occupied && classes.push("Occupied")

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
