import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"

const time = createPoll("", 1000, "date +%H:%M")

export default function Clock() {
    return <box
        cssClasses={["Clock"]}>
        <box>
            <box
                hexpand
                halign={Gtk.Align.CENTER}
            >
                <label
                    label={time}
                />
            </box>
        </box>
    </box>
}
