import { App, Astal, Gtk, Gdk } from "astal/gtk4"
import Launcher from "./Launcher"
import Clock from "./Clock"
import Workspaces from "./Workspaces"
import { Variable } from "astal"

export default function Bar(gdkmonitor: Gdk.Monitor) {
    const { LEFT, BOTTOM, TOP } = Astal.WindowAnchor
    const { VERTICAL } = Gtk.Orientation

    // Shared variable to track clock width
    const clockWidth = Variable(0)

    return <window
        visible
        cssClasses={["Bar"]}
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={LEFT | BOTTOM | TOP}
        application={App}>
        <centerbox
          cssName="centerbox"
          orientation={VERTICAL}
        >
            <box
                orientation={VERTICAL}>
                <Launcher size={clockWidth} />
                <Workspaces />
            </box>
            <box />
            <box>
                <Clock size={clockWidth} />
            </box>
        </centerbox>
    </window>
}
