import { bind, Variable } from "astal"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default()

const wsLabels = ["α", "β", "γ", "δ", "ε", "ζ"]

export default function Workspaces() {
    return wsLabels.map((label, i) => {
        const classNames = Variable.derive(
            [bind(hypr, "focusedWorkspace")
        ], (fw) => {
            const classes = ["Workspace"]
            if (fw.id === i + 1) classes.push("Active")
            return classes
        })

        return <button
                cssClasses={classNames()}
                onClicked="echo launching"
                hexpand>
                <label label={label} />
        </button>
    })
}
