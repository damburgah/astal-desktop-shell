import { App, Astal, Gtk, Gdk } from "astal/gtk4"
import Launcher from "./Launcher"
import Clock from "./Clock"
import Workspaces from "./Workspaces"

export default function Bar(gdkmonitor: Gdk.Monitor) {
    const { LEFT, BOTTOM, TOP } = Astal.WindowAnchor
    const { VERTICAL } = Gtk.Orientation

    return <window
        visible
        cssClasses={["Bar"]}
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={LEFT | BOTTOM | TOP}
        application={App}>
        <box
          // cssName="centerbox"
          orientation={VERTICAL}
          vexpand
        >
            <box
                orientation={VERTICAL}>
                <Launcher />
                <Workspaces />
            </box>
            <box
                cssClasses={["Middle"]}
                // orientation={VERTICAL}
                vexpand
            />
            <box>
                <Clock />
            </box>
        </box>
    </window>
}
