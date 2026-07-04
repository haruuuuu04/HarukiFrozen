(function () {
    if (!Game || !Game.registerMod) {
        console.log("Cookie Clicker not loaded yet");
        return;
    }

    let enabled = true;

    // ON/OFFトグル
    function toggle() {
        enabled = !enabled;
        console.log("HarukiFrozen: " + (enabled ? "ON" : "OFF"));
    }

    // オートクリック
    setInterval(() => {
        if (!enabled) return;
        if (Game.ClickCookie) Game.ClickCookie();
    }, 10);

    // ゴールデンクッキー & ラースクッキー & トナカイ
    setInterval(() => {
        if (!enabled) return;

        for (let i in Game.shimmers) {
            let s = Game.shimmers[i];
            if (s && s.type) s.pop();
        }
    }, 500);

    // グローバルにON/OFF
    window.HarukiFrozenToggle = toggle;

    console.log("HarukiFrozen v0.1 loaded. Use HarukiFrozenToggle() to toggle.");
})();
