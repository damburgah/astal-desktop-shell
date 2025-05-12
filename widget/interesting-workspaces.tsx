import { Gtk } from "astal/gtk4"
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

    function setup(button: Gtk.Button) {
        button.hexpand = true
        button.child = new Gtk.Label({ label })
        button.connect("clicked", () => "echo clicked")
        button.cssClasses = classNames.get()

        classNames.subscribe(classes => {
            button.cssClasses = classes
        })
    }

    return <button setup={setup} />
}

export default function Workspaces() {
    return wsLabels.map((label, i) => WorkspaceButton(i, label))
}
