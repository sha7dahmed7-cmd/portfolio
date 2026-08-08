/* =========================================
   SHAH.D — INTERACTIVE PORTFOLIO
========================================= */

/* =========================================
   ELEMENTS
========================================= */

const accessScreen = document.getElementById("access-screen");
const mainInterface = document.getElementById("main-interface");

const enterButton = document.getElementById("enter-btn");
const leaveButton = document.getElementById("leave-btn");

const choices = document.querySelectorAll(".choice");

const breakButton = document.getElementById("break-btn");
const breakOutput = document.getElementById("break-output");

const restartButton = document.getElementById("restart-btn");


/* =========================================
   ENTER EXPERIENCE
========================================= */

enterButton.addEventListener("click", () => {

    accessScreen.style.transition = "opacity 0.8s ease";
    accessScreen.style.opacity = "0";

    setTimeout(() => {
        accessScreen.style.display = "none";
        mainInterface.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, 800);

});


/* =========================================
   LEAVE BUTTON
========================================= */

leaveButton.addEventListener("click", () => {

    const response = confirm("You really want to leave?");

    if (response) {
        document.body.innerHTML = `
            <main style="
                min-height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#050505;
                color:#fff;
                font-family:Arial;
                text-align:center;
                padding:30px;
            ">
                <div>
                    <p style="color:#666; letter-spacing:4px; font-size:11px;">
                        ACCESS TERMINATED
                    </p>
                    <h1 style="font-size:60px; margin:25px 0;">
                        MAYBE NEXT TIME.
                    </h1>
                    <button
                        onclick="location.reload()"
                        style="padding:14px 25px; background:#fff; border:0; cursor:pointer;"
                    >
                        TRY AGAIN
                    </button>
                </div>
            </main>
        `;
    }

});


/* =========================================
   NAVIGATION THROUGH QUESTIONS
========================================= */

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const targetId = choice.dataset.target;
        const target = document.getElementById(targetId);

        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================
   TRY TO BREAK IT
========================================= */

let breakCount = 0;

breakButton.addEventListener("click", () => {

    breakCount++;

    const messages = [
        "Nothing broke. Try harder.",
        "You changed something. Good.",
        "Okay... that wasn't supposed to happen.",
        "SYSTEM WARNING: curiosity detected.",
        "You actually kept clicking.",
        "Fine. You win this round.",
        "YOU BROKE SOMETHING. GOOD."
    ];

    const messageIndex = Math.min(
        breakCount - 1,
        messages.length - 1
    );

    const currentMessage = messages[messageIndex];
    breakButton.textContent = currentMessage;
    breakOutput.textContent = "> " + currentMessage;

    /* RED ALERT AT 3 CLICKS */
    if (breakCount >= 3) {

        const breakSection = document.getElementById("break-mode");
        if (breakSection) {
            breakSection.classList.add("red-alert");
        }

        breakButton.style.backgroundColor = "#ff0000";
        breakButton.style.color = "#ffffff";

        document.body.style.transition = "transform 0.1s ease";
        document.body.style.transform = "translateX(3px)";

        setTimeout(() => {
            document.body.style.transform = "translateX(0)";
        }, 100);

    }

    /* final state */
    if (breakCount >= messages.length) {

        document.body.classList.add("breached");

        breakOutput.innerHTML = `
            <span>
                > SYSTEM MESSAGE
                <br><br>
                YOU BROKE SOMETHING.
                <br>
                GOOD.
                <br><br>
                That's how I learn too.
            </span>
        `;

        breakButton.textContent = "SYSTEM COMPROMISED";
    }

});


/* =========================================
   RESTART EXPERIENCE
========================================= */

restartButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(() => {
        location.reload();
    }, 700);

});


/* =========================================
   RANDOM SYSTEM STATUS
========================================= */

const statusElement = document.querySelector(".system-status span");

const statuses = [
    "WAITING",
    "LISTENING",
    "READY",
    "OBSERVING"
];

if (statusElement) {

    let statusIndex = 0;

    setInterval(() => {
        statusIndex++;

        if (statusIndex >= statuses.length) {
            statusIndex = 0;
        }

        statusElement.textContent = statuses[statusIndex];
    }, 2500);

}


/* =========================================
   CURSOR INTERACTION
========================================= */

document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;

    document.documentElement.style.setProperty("--mouse-x", `${x * 20}px`);
    document.documentElement.style.setProperty("--mouse-y", `${y * 20}px`);

});


/* =========================================
   KEYBOARD SECRET
========================================= */

let secretCode = "";

document.addEventListener("keydown", (event) => {

    secretCode += event.key.toLowerCase();

    if (secretCode.length > 12) {
        secretCode = secretCode.slice(-12);
    }

    if (secretCode.includes("shahd")) {

        document.body.style.transition = "filter 0.5s ease";
        document.body.style.filter = "invert(1)";

        setTimeout(() => {
            document.body.style.filter = "invert(0)";
        }, 700);

        breakOutput.textContent = "> SECRET FOUND: SHAH.D";
        secretCode = "";

    }

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log("%c SHAH.D ", "font-size:25px;font-weight:bold;");
console.log("%c You weren't supposed to look here.", "font-size:14px;");
console.log("%c But since you're here...", "font-size:12px;color:#777;");
console.log("%c Try typing: shahd", "font-size:12px;color:#777;");