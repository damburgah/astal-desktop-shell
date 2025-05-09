import { Gtk } from "astal/gtk4"

export default function Workspaces() {
    return <button
        onClicked="echo launching"
        hexpand
        halign={Gtk.Align.CENTER}
    >
        
    </button>
}
