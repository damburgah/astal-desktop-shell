import Battery from "gi://AstalBattery"

const bat = Battery.get_default()

export default function BatteryIndicator() {
    return <box cssClasses={["bar-segment"]}>
        <centerbox hexpand>
            <box/>
            <box>
                <label
                    label={ `${bat.percentage}` }
                />
            </box>
            <box/>
        </centerbox>
    </box>
}
