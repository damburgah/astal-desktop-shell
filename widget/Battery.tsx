import Battery from "gi://AstalBattery"
import { Gtk } from "astal/gtk4"

const bat = Battery.get_default()

export default function BatteryIndicator() {
    return <box cssClasses={["bar-segment"]}>
        <box>
            <label
                label={"󰂄"}
                // label={"󰁹"}
                halign={Gtk.Align.START}
                hexpand
            />
            <label
                // label={ `${bat.percentage}` }
                // label={"90%"}
                label={"max"}
                halign={Gtk.Align.END}
                hexpand
            />
        </box>
    </box>
}
