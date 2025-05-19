import { Gtk } from "astal/gtk4"
import { Variable } from "astal"

const time = Variable("").poll(1000, "date +%H:%M")

// export default function Clock() {
export default function Clock({ size }: { size: Variable<number> }) {
    return <box
        cssClasses={["Clock"]}
        halign={Gtk.Align.CENTER}
        setup={self => {
            self.connect("size-allocate", (_, allocation) => {
                const width = allocation.width
                if (width !== size.value) {
                    size.value = width
                }
            })
        }}>
        <label label={time()} />
    </box>
}
