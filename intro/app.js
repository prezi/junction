var PREZI_ID = "tptocujqbomr";
var showUI = false;
var webcamHandlingActive = false;
var playerHandlingActive = false;

function startApp() {
    var playerConfig = {
        preziId: PREZI_ID,
        width: 1392,
        height: 783
    };

    var player = new PreziPlayer('prezi-player', playerConfig);

    player.on(PreziPlayer.EVENT_STATUS, function(playerStatusEvent) {
        var status = playerStatusEvent.value;
        if (status == PreziPlayer.STATUS_CONTENT_READY) {
            setupButtonHandling(player);
            setupWebcamHandling(player);
            setupPlayerHandling(player);
        }
    });

    document.addEventListener('keypress', function(keypressEvent) {
        if (keypressEvent.key === 'u' && !showUI) {
            showUI = true;
            var uiContainerElement = document.getElementById("ui-container");
            uiContainerElement.className = "";
        } else if (keypressEvent.key === 'w') {
            webcamHandlingActive = !webcamHandlingActive;
        } else if (keypressEvent.key === "p") {
            playerHandlingActive = !playerHandlingActive;
        }


    });
}

function setupButtonHandling(player) {
    var previousButton = document.getElementById('previous-button');
    var nextButton = document.getElementById('next-button');

    previousButton.addEventListener('click', function(clickEvent) {
        player.previousStep();
    });

    nextButton.addEventListener('click', function(clickEvent) {
        player.nextStep();
    });
}

function setupWebcamHandling(player) {
    document.addEventListener('gest', function(gesture) {
        if (!webcamHandlingActive) {
            return;
        }
        if (gesture.left) {
            player.previousStep();
        } else if (gesture.right) {
            player.nextStep();
        }
    }, false);
    gest.start();
}

function setupPlayerHandling(player) {
    player.on(PreziPlayer.EVENT_CURRENT_STEP, function(playerStepEvent) {
        if (!playerHandlingActive) {
            return;
        }

        var stepNumber = playerStepEvent.value;

        // Create message element
        var message = 'Navigated to step ' + stepNumber;
        var messageElement = document.createElement('div');
        messageElement.innerHTML = message;
        messageElement.className = 'message-container';

        // Append message element to the UI
        var uiContainer = document.getElementById('ui-container');
        uiContainer.appendChild(messageElement);

        // Remove the message element after 2 seconds
        setTimeout(function() {
            uiContainer.removeChild(messageElement);
        }, 2000);
    });
}
