import { bind, Variable } from "astal"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default()

const wsLabels = ["α", "β", "γ", "δ", "ε", "ζ"]

function WorkspaceButton(index: number, label: string) {
    const classNames = Variable.derive(
        [bind(hypr, "focusedWorkspace")],
        (fw) => {
            const classes = ["Workspace"]
            if (fw?.id === index + 1) classes.push("Active")
            return classes
        }
    )

    return <button
        cssClasses={classNames()}
        onClicked="echo launching"
        hexpand>
        <label label={label} />
    </button>
}

export default function Workspaces() {
    return wsLabels.map((label, i) => WorkspaceButton(i, label))
}
