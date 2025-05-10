export default function Launcher() {
    return <button
        onClicked="echo launching"
        hexpand>
            {/* <image iconName="system-run-symbolic" /> */}
            {/* <image iconName="nix-symbolic" /> */}
            <image iconName="nix" />
            {/* <image file ="assets/nix-symbolic.svg" /> */}
    </button>
}
