var inputArea = document.getElementById("inputBox");
var lastMessage = [];
var oldMessages = [];
var ticketMode = false;
var questionNumber = 0;
var ticket = [];
var startSeason = "13th August"
var endSeason = "to be the 11th November"
var uniMapLink = "https://forum.empyrion-homeworld.net/uploads/default/original/2X/b/bbe20892c7c7ca690e8c5d13a68644c9cd338b0d.png"
var uniMapSize = 0;
var Message = "";
var currentImg = "";
var answers = 0;
var i = 0;
var canceldefault = false;
var Tregex;
var Fregex;

inputArea.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitButton").click();
        inputArea.select();
    }
});

//Change 1 to 0 inorder to disable this marquee.
window.onload = function() {if(0 == 1) {addMarq();};}; function addMarq() {var x = document.createElement("marquee");x.innerHTML = "<b style='color: #fdb100'>Important:</b>";x.setAttribute("scrollamount", 1); x.setAttribute("scrolldelay", "10");x.setAttribute("truespeed", "");x.setAttribute("loop", 2);document.getElementById("marq").appendChild(x)}

function submitText() {
    if (inputArea.value.length < 2) {
        inputArea.setAttribute("placeholder", "Needs at least 2 character.");
        inputArea.value = "";
    } else {
        SendMessage("MessagePerson", userName() + inputArea.value);

        if (ticketMode == true) {
            canceldefault = true;
            var quickArray = inputArea.value.split(" ");
            if (inputArea.value.toLowerCase() != "stop") {
                switch (questionNumber) {
                    case 1:
                        ticket["title"] = extraEncode(inputArea.value);
                        SendMessage(
                            "MessageTicket",
                            "<b>Ticket Title: </b>" + ticket["title"]
                        );
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "Now, please explain with as much details at possible what happened?"
                        );
                        break;
                    case 2:
                        ticket["WhatHappened"] = extraEncode(inputArea.value);
                        SendMessage(
                            "MessageTicket",
                            "<b>What Happened: </b>" + ticket["WhatHappened"]
                        );
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "Who were involved in this? Please use their steam names/ingame names."
                        );
                        break;
                    case 3:
                        ticket["Players"] = extraEncode(inputArea.value);
                        SendMessage(
                            "MessageTicket",
                            "<b>Players involved: </b>" + ticket["Players"]
                        );
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "Which server did it happen on? The EU, or the NA server? Or maybe both?"
                        );
                        break;
                    case 4:
                        ticket["Server"] = extraEncode(inputArea.value);
                        SendMessage("MessageTicket", "<b>Server: </b>" + ticket["Server"]);
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "When did this happen? Please use servertime (CEST timezone or write <a class='cmd'>cb:time</a> ingame.)"
                        );
                    case 5:
                        ticket["Time"] = extraEncode(inputArea.value);
                        SendMessage(
                            "MessageTicket",
                            "<b>When did this happen: </b>" + ticket["Time"]
                        );
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "Which playfield did this happen on? (Playfield = Name of the planet/orbit)"
                        );
                        break;
                    case 6:
                        ticket["Playfield"] = extraEncode(inputArea.value);
                        SendMessage(
                            "MessageTicket",
                            "<b>Which playfield did this happen on: </b>" +
                            ticket["Playfield"]
                        );
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "What are the <a href='https://empyrion-homeworld.net/hws-connect.html#page-structures' class='link'>Structure name(s)</a>"
                        );
                        break;
                    case 7:
                        ticket["StructureNames"] = extraEncode(inputArea.value);
                        SendMessage(
                            "MessageTicket",
                            "<b>Structure Names: </b>" + ticket["StructureNames"]
                        );
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "What are the structure ID's?"
                        );
                        break;
                    case 8:
                        ticket["StructureIDs"] = extraEncode(inputArea.value);
                        SendMessage(
                            "MessageTicket",
                            "<b>Structure ID's: </b>" + ticket["StructureIDs"]
                        );
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "How can we help you now?"
                        );
                        break;
                    case 9:
                        ticket["WhatNow"] = extraEncode(inputArea.value);
                        SendMessage(
                            "MessageTicket",
                            "<b>How can we help now: </b>" + ticket["WhatNow"]
                        );
                        questionNumber++;
                        SendMessage(
                            "MessageBot",
                            botName() + "That was all. I'll generate a link now so you can create a ticket."
                        );
                        createTicketLink();
                        questionNumber = 0;
                        ticket = [];
                        ticketMode = false;
                        break;
                }
            } else {
                questionNumber = 0;
                ticket = [];
                ticketMode = false;
                SendMessage(
                    "MessageBot",
                    botName() + "Ticket mode has been disabled. You're now free to ask questions again."
                );
            }
        }
        inputArea.value = inputArea.value.split("#").join("")
        inputArea.value = inputArea.value.split("%").join("")
        inputArea.value = inputArea.value.split("&").join("")
        inputArea.value = inputArea.value.split("/").join("")
        inputArea.value = inputArea.value.split("'").join("")

        var inputArray = inputArea.value

        try {if (devMode.includes("true")) {try {devFindAnswer(inputArray)} catch(err) {}}} catch(err) {} //Just something new I use when I work on the bot. Can be ignored since primary file is never commited.
        try {if (!devMode.includes("true")) {findAnswer(inputArray);}} catch(err) {findAnswer(inputArray);}
        window.inputArea.value = "";
        oldMessages = lastMessage;
        lastMessage = [];
    }
}

function SendMessage(msgclass, msg) {
    var Chat = document.getElementById("ChatArea");
    var messageBox = document.createElement("div");
    messageBox.setAttribute("id", "message" + window.i);
    messageBox.setAttribute("class", msgclass);
    messageBox.innerHTML = msg;
    Chat.appendChild(messageBox);

    if (msgclass == "MessagePerson") {
        inputArea.setAttribute("disabled", "");
        inputArea.setAttribute("placeholder", "Loading...");
    } else {
        inputArea.removeAttribute("disabled");
        inputArea.setAttribute("placeholder", "Your Question");
    }

    document.getElementById("message" + window.i).scrollIntoView()
    window.i = window.i + 1;
}

function createTicketLink() {
    var link = "https://forum.empyrion-homeworld.net/new-topic?title=" + ticket["title"] + "&body=%3D%3D%3D%3D%3D%3D%3D%20NOTICE%20FOR%20HELP%20%3D%3D%3D%3D%3D%3D%3D%0A%0A**[color%3Dd0901d]What%20happened:[/color]**%0A%3D%3E%20" + ticket["WhatHappened"] + "%0A%0A**[color%3Dd0901d]Player(s)%20with%20issue:[/color]**%0A%3D%3E%20" + ticket["Players"] + "%0A%0A**[color%3Dd0901d]Server:[/color]**%0A%3D%3E%20" + ticket["Server"] + "%0A%0A**[color%3Dd0901d]Time%20(cb:time):[/color]**%0A%3D%3E%20" + ticket["Time"] + "%0A%0A**[color%3Dd0901d]Playfield:[/color]**%0A%3D%3E%20" + ticket["Playfield"] + "%0A%0A**[color%3Dd0901d]Structure%20Name(s):[/color]**%0A%3D%3E%20" + ticket["StructureNames"] + "%0A%0A**[color%3Dd0901d]Structure%20ID(s):[/color]**%0A%3D%3E%20" + ticket["StructureIDs"] + "%0A%0A**[color%3Dd0901d]How%20can%20we%20help%20you%20now:[/color]**%0A%3D%3E%20" + ticket["WhatNow"] + "&category_id=35&tags=support";
    SendMessage("MessageBot", botName() + "<a class='link' href='" + link + "'>Here is your ticket! Just click this link, and then Create Topic.</a>")
}

function extraEncode(msg) {
    var newText = msg.split("&").join("%26");
    var newText = msg.split("#").join("")
    var newText = encodeURI(newText);
    return (newText);
}

function botName() {
    return ("<div class='Name'><b>Assistant: </b></div>")
}

function userName() {
    return ("<div class='Name'><b>You: </b></div>")
}

function replaceLast(find, replace, string) {
    var lastIndex = string.lastIndexOf(find);

    if (lastIndex === -1) {
        return string;
    }

    var beginString = string.substring(0, lastIndex);
    var endString = string.substring(lastIndex + find.length);

    return beginString + replace + endString;
}

function checkbreak() {
    return ("<br><br>")
}

function genForumLink(tag) {
    var link = "https://forum.empyrion-homeworld.net/search?q=" + inputArea.value + " %23" + tag;
    return (link)
}

function clearText() {
    location.reload();
}

function createResponse(message) {
    message = urlCheck(message);
    answers = answers + 1;
    Message = Message + message + checkbreak();
}

function createInput(placeholder, number) {
    var input = document.createElement("input");
    input.placeholder = placeholder;
    input.setAttribute("class", "smallInput");
    input.setAttribute("id", "smallInput" + window.i + "Num" + number);
    document.getElementById("message" + (window.i - 1)).appendChild(input);
}

function createButton(text, number, formula) {
    var button = document.createElement("button");
    button.innerHTML = text;
    button.setAttribute("class", "small button")
    button.setAttribute("id", "smallButton" + window.i + "Num" + number)
    button.setAttribute("onclick", formula);
    document.getElementById("message" + (window.i - 1)).appendChild(document.createElement("br"))
    document.getElementById("message" + (window.i - 1)).appendChild(button);
}

function createTextField(innerText, number) {
    var text = document.createElement("p");
    text.innerHTML = innerText;
    text.setAttribute("class", "textField");
    text.setAttribute("id", "textField" + window.i + "Num" + number);
    document.getElementById("message" + (window.i - 1)).appendChild(document.createElement("br"));
    document.getElementById("message" + (window.i - 1)).appendChild(text);
}

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

synonyms = {
    okay: ["Okay", "All right"],
    hello: ["Hi", "Hello", "Greetings", "Howdy"],
    whatsup: ["How are you?", "What's up?", "What's happening?", "How goes it?", "How's it going?"],
    if: ["If", "In case that", "In case", "Assuming that", "Granted that"],
    i: ["I'm", "I am"],
    iWill: ["I'll", "I will", "I am going to", "I'm going to"],
    help: ["help", "assist"],
    find: ["find", "locate"],
    youWill: ["you'll", "you will"],
    howUdoing: [" good, thanks for asking :)", " alright.", " doing great!", " doing well, and yourself?", " fine, and you?"],
    repeat: ["You already asked me that. ", "Why are you asking me that again? ", "I already answered that. "],
    thanks: ["You're welcome ;)", "No problem :)", "Anytime", "I gotchu ^^"]
}

function PC(array) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return(randomElement);
}

function urlCheck(message) {

    Tregex = /Reputation Points/;
    if (Tregex.test(message)) {
        message = message.split("Reputation Points").join('<a href="https://forum.empyrion-homeworld.net/t/hws-reputation-points/4388/1" class="link" target="_blank">Reputation Points</a>')
    }
    Tregex = /https:\/\/help.hws.global/;
    if (Tregex.test(message)) {
        message = message.split("https://help.hws.global").join('<a href="https://help.hws.global" class="link" target="_blank">https://help.hws.global</a>')
    }
    Tregex = /ticket/;
    if (Tregex.test(message)) {
        message = message.split("ticket").join('<a href="https://help.hws.global" class="link" target="_blank">ticket</a>')
    }
    Tregex = /HWS Marketplace/;
    if (Tregex.test(message)) {
        message = message.split("HWS Marketplace").join('<a href="https://forum.empyrion-homeworld.net/t/hws-marketplace/4376/1" target="_blank" class="link">HWS Marketplace</a>')
    }
    Tregex = /Structure Commander/;
    if (Tregex.test(message)) {
        message = message.split("Structure Commander").join('<a target="_blank" class="link" href="https://empyrion-homeworld.net/hws-connect.html#page-structures">Structure Commander</a>')
    }
    Tregex = /Orbital Cargo Drone/;
    if (Tregex.test(message)) {
        message = message.split("Orbital Cargo Drone").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/orbital-cargo-drone-ocd/4394/1">Orbital Cargo Drone</a>')
    }
    Tregex = /HWS Guide/;
    if (Tregex.test(message)) {
        message = message.split("HWS Guide").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/hws-resets-wipes-settings/4380">HWS Guide</a>')
    }
    Tregex = /Full Wipes/;
    if (Tregex.test(message)) {
        message = message.split("Full Wipes").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/hws-resets-wipes-settings/4380#hws-seasons">Full Wipes</a>')
    }
    Tregex = /Alien Containers/;
    if (Tregex.test(message)) {
        message = message.split("Alien Containers").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/the-alien-sacrifice/11586">Alien Containers</a>')
    } 
    Tregex = /Alien Container/;
    Fregex = /Alien Containers/;
    if (Tregex.test(message) && !Fregex.test(message)) {
        message = message.split("Alien Container").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/the-alien-sacrifice/11586">Alien Container</a>')
    }
    Tregex = /Origin Weapon/;
    if (Tregex.test(message)) {
        message = message.split("Origin Weapon").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/the-alien-sacrifice/11586#origin-specific-alien-container-weapons">Origin Weapon</a>')
    }
    Tregex = /HWS Alien Sacrifice/;
    if (Tregex.test(message)) {
        message = message.split("HWS Alien Sacrifice").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/the-alien-sacrifice/11586/1">HWS Alien Sacrifice</a>')
    }
    Tregex = /Alien\/NPC Core/;
    if (Tregex.test(message)) {
        message = message.split("Alien/NPC Core").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/alien-core/9472/2">Alien/NPC Core</a>')
    }
    Tregex = /right here, in the HWS Guide/;
    if (Tregex.test(message)) {
        message = message.split("right here, in the HWS Guide").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/cross-server-warp-csw/4398#how-does-it-work">right here, in the HWS Guide</a>')
    }
    Tregex = /HWS Resets, Wipes & Settings/;
    if (message.search("HWS Resets, Wipes & Settings") != -1) {
        message = message.split("HWS Resets, Wipes & Settings").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/hws-resets-wipes-settings/4380">HWS Resets, Wipes & Settings</a>')
    } 
    Tregex = /HWS Connect/;
    if (Tregex.test(message)) {
        message = message.split("HWS Connect").join('<a target="_blank" class="link" href="https://connect.hws.global">HWS Connect</a>')
    }
    Tregex = /taxes/;
    if (Tregex.test(message)) {
        message = message.split("taxes").join('<a target="_blank" class="link" href="https://empyrion-homeworld.net/hws-connect.html#page-tax-list">taxes</a>')
    }
    Tregex = /https:\/\/discord.gg\/mahSXDp/;
    if (Tregex.test(message)) {
        message = message.split("https://discord.gg/mahSXDp").join('<a target="_blank" class="link" href="https://discord.gg/mahSXDp">https://discord.gg/mahSXDp</a>')
    }
    Tregex = /Player Resets/;
    if (Tregex.test(message)) {
        message = message.split("Player Resets").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/hws-resets-wipes-settings/4380#player-resets">Player Resets</a>')
    }
    Tregex = /HWS Rules/;
    if (Tregex.test(message)) {
        message = message.split("HWS Rules").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/c/hws-guide/hws-rules/30">HWS Rules</a>')
    }
    Tregex = /Limits and Restrictions/;
    if (Tregex.test(message)) {
        message = message.split("Limits and Restrictions").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/4-limits-restrictions/4363">Limits and Restrictions</a>')
    }
    Tregex = /Effectiveness Weapon System/;
    if (Tregex.test(message)) {
        message = message.split("Effectiveness Weapon System").join('<a target="_blank" class="link" href="https://forum.empyrion-homeworld.net/t/hws-config-effectiveness-weapon-system-ews/9161/67">Effectiveness Weapon System</a>')
    }
    Tregex = /Entity ID/;
    if (Tregex.test(message)) {
        message = message.split('Entity ID').join("<a target='_blank' class='link' href='https://empyrion-homeworld.net/hws-connect.html#page-player-info'>Entity ID</a>")
    }
    Tregex = /Proximity log/;
    if (Tregex.test(message)) {
        message = message.split('Proximity log').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/proximity-alarms/17917'>Proximity log</a>")
    }
    Tregex = /Freelancer/;
    if (Tregex.test(message)) {
        message = message.split('Freelancer').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/freelancer-origin/4387/1'>Freelancer</a>")
    }
    Tregex = /Federation/;
    if (Tregex.test(message)) {
        message = message.split('Federation').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/federation-origin/4383/1'>Federation</a>")
    }
    Tregex = /Pirate/;
    if (Tregex.test(message)) {
        message = message.split('Pirate').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/pirate-origin/4384/1'>Pirate</a>")
    }
    Tregex = /HWS Garage/;
    if (Tregex.test(message) && !Fregex.test(message)) {
        message = message.split('HWS Garage').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/hws-garage/4643'>HWS Garage</a>")
    }
    Tregex = /HWS Teleport Monoliths/;
    if (Tregex.test(message)) {
        message = message.split('HWS Teleport Monoliths').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/teleport-monolith/13871/1'>HWS Teleport Monoliths</a>")
    }
    Tregex = /central universe/;
    if (Tregex.test(message)) {
        message = message.split('central universe').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/universe-map/4373/1'>central universe</a>")
    }
    Tregex = /HWS Universe/;
    if (Tregex.test(message)) {
        message = message.split('HWS Universe').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/universe-map/4373/1'>HWS Universe</a>")
    }
    Tregex = /Homeworld Planet/;
    if (Tregex.test(message)) {
        message = message.split('Homeworld Planet').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/the-homeworld-system/4372'>Homeworld Planet</a>")
    }
    Tregex = /The Blackhole/;
    if (Tregex.test(message)) {
        message = message.split('The Blackhole').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/the-black-hole/4379'>The Blackhole</a>")
    }
    Tregex = /Elemental Capital City HQ/;
    if (Tregex.test(message)) {
        message = message.split('Elemental Capital City HQ').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/elemental-capital-city-sector/4375'>Elemental Capital City HQ</a>")
    }
    Tregex = /Elemental Bank/;
    if (Tregex.test(message)) {
        message = message.split('Elemental Bank').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/elemental-bank-eb/4395/1'>Elemental Bank</a>")
    }
    Tregex = /Golden Globe/;
    if (Tregex.test(message)) {
        message = message.split('Golden Globe').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/golden-globe/12099/1'>Golden Globe</a>")
    }
    Tregex = /Phoenix System/;
    if (Tregex.test(message)) {
        message = message.split('Phoenix System').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/the-phoenix/16358/1'>Phoenix System</a>")
    }
    Tregex = /Economy Utility Tool/;
    if (Tregex.test(message)) {
        message = message.split('Economy Utility Tool').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/economy-utility-tool/11072/1'>Economy Utility Tool</a>")
    }
    Tregex = /EGS Recycle/;
    if (Tregex.test(message)) {
        message = message.split('EGS Recycle').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/egs-recycle-structures/7112/1'>EGS Recycle</a>")
    }
    Tregex = /Commodity Trading/;
    if (Tregex.test(message)) {
        message = message.split('Commodity Trading').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/trade-commodity/13865'>Commodity Trading</a>")
    }
    Tregex = /Center Universe/;
    if (Tregex.test(message)) {
        message = message.split('Center Universe').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/universe-map/4373/1'>Center Universe</a>")
    }
    Tregex = /Elemental Lottery/;
    if (Tregex.test(message)) {
        message = message.split('Elemental Lottery').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/elemental-lottery/11554'>Elemental Lottery</a>")
    }
    Tregex = /Server Administration/;
    if (Tregex.test(message)) {
        message = message.split('Server Administration').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/server-administration/4356'>Server Administration</a>")
    }
    Tregex = /Exploration Rewards/;
    if (Tregex.test(message)) {
        message = message.split('Exploration Rewards').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/hws-exploration-rewards/21494'>Exploration Rewards</a>")
    }
    Tregex = /Orbital Auto Miner/;
    if (Tregex.test(message)) {
        message = message.split('Orbital Auto Miner').join("<a target='_blank' class='link' href='https://empyrion-homeworld.net/hws-connect.html#page-oam'>Orbital Auto Miner</a>")
    }
    Tregex = /Supporter Packages/;
    if (Tregex.test(message)) {
        message = message.split('Supporter Packages').join("<a target='_blank' class='link' href='https://empyrion-homeworld.net/hws-connect.html#page-support-us'>Supporter Packages</a>")
    }
    Tregex = /Star Fragments/;
    if (Tregex.test(message)) {
        message = message.split('Star Fragments').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/the-star-fragment-hunt/24727'>Star Fragments</a>")
    }
    Tregex = /Stargate Missions/;
    if (Tregex.test(message)) {
        message = message.split('Stargate Missions').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/stargate-missions/7645'>Stargate Missions</a>")
    }
    Tregex = /HWS Patron/;
    if (Tregex.test(message)) {
        message = message.split('HWS Patron').join("<a target='_blank' class='link' href='https://www.patreon.com/hws'>HWS Patron</a>")
    }
    Tregex = /Supergates/;
    if (Tregex.test(message)) {
        message = message.split('Supergates').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/hws-supergate/11596/2'>Supergates</a>")
    }
    Tregex = /Commodity Items/;
    if (Tregex.test(message)) {
        message = message.split('Commodity Items').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/trade-commodity/13865/1'>Commodity Items</a>")
    }
    Tregex = /HWS Forum/;
    if (Tregex.test(message)) {
        message = message.split('HWS Forum').join("<a target='_blank' class='link' href='https://forum.hws.global'>HWS Forum</a>")
    }
    Tregex = /bug/;
    if (Tregex.test(message)) {
        message = message.split('bug').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/send-bug-reports-here/57/788'>bug</a>")
    }
    Tregex = /Empyrion Forum/;
    if (Tregex.test(message)) {
        message = message.split('Empyrion Forum').join("<a target='_blank' class='link' href='https://empyriononline.com/forums/bugs.24/'>Empyrion Forum</a>")
    }
    Tregex = /Cross Server Warp/;
    if (Tregex.test(message)) {
        message = message.split('Cross Server Warp').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/elemental-capital-city-sector/4375/1'>Cross Server Warp</a>")
    }
    Tregex = /ECC System/;
    if (Tregex.test(message)) {
        message = message.split('ECC System').join("<a target='_blank' class='link' href='https://forum.empyrion-homeworld.net/t/elemental-capital-city-sector/4375/1'>ECC System</a>")
    }
    Tregex = /HwP UP Unlock Guide/;
    if (Tregex.test(message)) {
        message = message.split('HwP UP Unlock Guide').join("<a target='_blank' class='link' href='https://www.youtube.com/watch?v=ez9UsBVuWVI'>HwP UP Unlock Guide</a>")
	}
    return(message)
}
