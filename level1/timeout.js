var g_time = 35;
var g_time_delay = 0;
var g_time_start = -10;
var g_continueIn = "";
var g_timerEnabled = true;
var g_timerTimeout = 0;
var g_adSenseForGamesDisplayed = false;
var g_decreaseCounterQueueTime = undefined;
var g_gameNameCache = null;

function setTimeLimit(n) {
    g_time = n;
}

function decreaseCounter(sTime) {
    if (g_adSenseForGamesDisplayed) {
        g_decreaseCounterQueueTime = sTime;

    } else {
        if (sTime == "" || sTime == null) { sTime = "Time: "; }

        if (document.getElementById)
        {
            if (--g_time > 0)
            {
                var elm = document.getElementById("counter");
                if (elm)
                {
                    if (g_time_start == -10) { g_time_start = g_time; }
                    adjustBar(g_time_start, g_time);
                    elm.innerHTML = sTime + g_time;
                    if (g_timerEnabled) {
                        g_timerTimeout = setTimeout('decreaseCounter("' + sTime + '")', 1000);
                    }
                }
            }
            else
            {
                document.mainForm.submit();
            }
        }
    }
}

function adjustBar(max, n) {
    p = getPercentage(max, n);
    var elm = document.getElementById("counterbar");
    elm.style.width = p + "px";
    elm.style.backgroundColor = "rgb(" + Math.round( (100 - p)  * 2.45 ) + ",120,100)";
}

function getPercentage(max, n) {
    p = 0;

    if (max > 0 && n > 0) {
        if (n > max)  {
            p = 100;
        }
        else if (n < 0) {
            p = 0;
        }
        else {
            p =  Math.round( (n / max) * 100 );
        }
    }

    return p;
}

function focusInput() {
    document.mainForm.guess.focus();
}

function delayContinue(timeDelay, sContinueIn) {
    if (sContinueIn == "" || sContinueIn == null) {
        sContinueIn = "Continue in [number] seconds...";
    }

    if (g_continueIn == "") {
        g_continueIn = sContinueIn;
    }

    if (document.getElementById)
    {
        if (timeDelay != 0)
        {
            var elm = document.getElementById("continueButton");
            elm.style.display = "none";
            g_time_delay = timeDelay;
        }

        if (--g_time_delay > 0)
        {
            var elm = document.getElementById("continueDelay");
            if (elm) {
                elm.innerHTML = g_continueIn.replace(/\[number\]/, g_time_delay);
                setTimeout('delayContinue(0, "")', 1000);
            }
        }
        else
        {
            var elm = document.getElementById("continueDelay");
            elm.style.display = "none";

            elm = document.getElementById("continueButton");
            if (elm)
            {
                elm.style.display = "block";
                focusContinue();
            }
        }

    }
}

function focusContinue() {
    document.mainForm.continueButton.focus();
}

function toggleEnglishWordGames() {
    var elmGames = document.getElementById("englishWordGames");
    var elmFooter = document.getElementById("footer");
    var elmHome = document.getElementById("home");

    if (elmGames.style.display != "block") {
        elmGames.style.display = "block";
        elmFooter.style.top = (elmHome) ? "70px" : "150px";
    }
    else {
        elmGames.style.display = "none";
        elmFooter.style.top = (elmHome) ? "40px" : "125px";
    }
}

function misc_toggleElm(id) {
    var elm = document.getElementById(id);
    if (elm) {
        elm.style.display = (elm.style.display != "block") ? "block" : "none";
    }
}

function misc_toggleTimer() {
    g_timerEnabled = !g_timerEnabled;
    var elm = document.getElementById("counterbar");
    if (g_timerEnabled) {
        g_timerTimeout = setTimeout( 'decreaseCounter()', 100 );
        elm.title = "Pause timer";
    }
    else {
        clearTimeout(g_timerTimeout);
        g_timerTimeout = 0;
        var elm = document.getElementById("counterbar");
        elm.style.backgroundColor = "rgb(0,198,163)";
        elm.title = "Continue timer";
    }
}
