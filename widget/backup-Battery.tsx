import Battery from "gi://AstalBattery"
import { Gtk } from "astal/gtk4"

const bat = Battery.get_default()

export default function BatteryIndicator() {
    return <box cssClasses={["bar-segment"]}>
        <centerbox hexpand>
            <box>
                <label
                    label={"󰂄"}
                    // label={"l"}
                />
            </box>
            <box halign={Gtk.Align.START}>
                <label
                    label={"m"}
                    // label={"l"}
                />
            </box>
            <box hexpand={true}>
                <label
                    // label={ `${bat.percentage}` }
                    label={"10"}
                />
            </box>
        </centerbox>
    </box>
}
