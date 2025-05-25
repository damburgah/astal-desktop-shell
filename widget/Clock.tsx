import { Gtk } from "astal/gtk4"
import { Variable } from "astal"

const time = Variable("").poll(1000, "date +%H:%M")

export default function Clock() {
    return <box
        cssClasses={["Clock"]}
        hexpand>
        <box>
            <box
                hexpand
                halign={Gtk.Align.CENTER}
            >
                <label
                    label={time()}
                />
            </box>
        </box>
    </box>
}
