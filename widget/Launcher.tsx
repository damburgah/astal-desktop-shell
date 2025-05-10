export default function Launcher() {
    return <button
        onClicked="echo launching"
        hexpand>
        <image
            file="assets/nix-snowflake-white.svg"
            pixelSize={24}
        />
    </button>
}
