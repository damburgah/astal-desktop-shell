export default function Launcher() {
    return <button
        cssClasses={["Launcher"]}
        onClicked="echo launching"
        hexpand>
            <image
                iconName="nix"
                pixelSize={30}
            />
    </button>
}
