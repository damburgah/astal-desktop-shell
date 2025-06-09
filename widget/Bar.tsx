import { App, Astal, Gtk, Gdk } from "astal/gtk4"
import Launcher from "./Launcher"
import Workspaces from "./Workspaces"
import BatteryIndicator from "./Battery"
import Clock from "./Clock"

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
        <box orientation={VERTICAL}>
            {/* Top Section */}
            <box
                cssClasses={["TopSection"]}
                name="TopSection"
                orientation={VERTICAL}
            >
                <Launcher />
                <Workspaces />
            </box>

            {/* Spacer */}
            <box
                cssClasses={["Spacer"]}
                name="Spacer"
                vexpand
            />

            {/* Bottom Section */}
            <box
                cssClasses={["bottom-section"]}
                name="BottomSection"
                orientation={VERTICAL}
            >
                <BatteryIndicator />
                <Clock />
            </box>
        </box>
    </window>
}
