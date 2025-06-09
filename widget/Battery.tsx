import Battery from "gi://AstalBattery"

const bat = Battery.get_default()

export default function BatteryIndicator() {
    return <centerbox>
        <box/>
        <box>
            <label
                label={ `${bat.percentage}` }
            />
        </box>
        <box/>
    </centerbox>
}
