import { Gtk } from "ags/gtk4"
import { Variable } from "astal"

const time = Variable("").poll(1000, "date")

export default function MenuButton() {
    return <menubutton
        hexpand
        halign={Gtk.Align.CENTER}>
        <label label={time()} />
        <popover>
            <Gtk.Calendar />
        </popover>
    </menubutton>
}
