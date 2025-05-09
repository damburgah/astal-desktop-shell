import { App, Astal, Gtk, Gdk } from "astal/gtk4"
import Launcher from "./Launcher"
import MenuButton from "./MenuButton"
import Workspaces from "./Workspaces"

export default function Bar(gdkmonitor: Gdk.Monitor) {
    const { LEFT, BOTTOM, TOP } = Astal.WindowAnchor

    return <window
        visible
        cssClasses={["Bar"]}
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={LEFT | BOTTOM | TOP}
        application={App}>
        <centerbox
          cssName="centerbox"
          orientation={Gtk.Orientation.VERTICAL}
        >
            <box>
                <Launcher />
                <Workspaces />
            </box>
            <box />
            <MenuButton />
        </centerbox>
    </window>
}
