import { Gtk } from "astal/gtk4"

export default function Launcher() {
    return <button
        cssClasses={["Launcher"]}
        hexpand
        onClicked="echo launching"
        setup={self => {
            // The first value defines the width of the bar
            self.set_size_request(69, 63)
        }}>
        <box>
            <box halign={Gtk.Align.CENTER} hexpand>
                <image
                    iconName="nix"
                    pixelSize={26}
                />
            </box>
        </box>
    </button>
}
