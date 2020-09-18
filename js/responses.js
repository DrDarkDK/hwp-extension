lastMessage.push("#00")
SendMessage("MessageBot", botName() + "Hello, what can I help you with? " + PC(synonyms["if"]) + " you have questions about me, then please read the <a href='https://forum.empyrion-homeworld.net/t/hws-artificial-help-bot/25530' target='_blank' class='link'>forum post</a> about me.<br><br>You can also experience the full version by going to <a href='https://ahb.hws.global' target='_blank' class='link'>https://ahb.hws.global/</a><br><br>" + PC(synonyms["whatsup"]))

function findAnswerEN(words) {
    if (ticketMode == false) {
        Tregex = /\hello\b|\hey\b|\hi\b|\Greeting\b|\howdy\b|\sup\b/i;
        if (Tregex.test(words)) {
            lastMessage.push("#01")
            createResponse(PC(synonyms["hello"]), true);
        }
        Tregex = /how are you|whats up/i;
        if (Tregex.test(words) && !oldMessages.includes("#02")) {
            lastMessage.push("#02")
            createResponse(PC(synonyms["i"]) + PC(synonyms["howUdoing"]))
        } else if (oldMessages.includes("#02") && Tregex.test(words)) {
            createResponse(PC(synonyms["repeat"]) + PC(synonyms["i"]) + PC(synonyms["howUdoing"]))
        }

        Tregex = /i am|im|not much/i;
        if (Tregex.test(words) && lastMessage.includes("#00")) {
            Tregex = /fine|good|alright|okay/i;
            if (Tregex.test(words)) {
                lastMessage.push("#129");
                removeA(lastMessage, "#136");
                createResponse(PC(synonyms["i"]) + " glad to hear!");
            }
            Tregex = /bad|tired|sleepy|awful/i;
            if (Tregex.test(words)) {
                lastMessage.push("#130");
                removeA(lastMessage, "#136");
                createResponse(PC(synonyms["i"]) + " sorry to hear that.");
            }
            Tregex = /not much/i;
            if (Tregex.test(words)) {
                lastMessage.push("#143");
                removeA(lastMessage, "#136");
                createResponse("Okay.");
            }
        }

        Tregex = /will|can/i;
        if (Tregex.test(words)) {
            Tregex = /you/i;
            if (Tregex.test(words)) {
                Tregex = /help|assist/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#147");
                    createResponse(PC(synonyms["iWill"]) + " do my best to " + PC(synonyms["help"]) + " you, but why don't you ask your question and then we'll see.");
        }}}
        Tregex = /stuck|unstuck|backpack|bag|\id\b/i;
        if (Tregex.test(words)) {
            Tregex = /\i\b|\im\b/i;
            Fregex = /ship|backpack|bag|call you|name you/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                Tregex = /stuck/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#04")
                createResponse(PC(synonyms["if"]) + " you're stuck try to contact a member of the HWP (Homeworld Police). If they aren't online going to https://help.hws.global.")
                }
            }
            Tregex = /underground|under ground|terrain/i;
            if (Tregex.test(words)) {
                lastMessage.push("#05")
                createResponse("Backpacks getting stuck underground is sadly an old bug, and there's not much which can be done. You can try with a ticket, but the chances of getting your backpack back are low since the admins have few logs about it.");
            }
            Tregex = /ship|\vessel|\sv\b|\cv\b|stuck|get|\to\b/i;
            Fregex = /im\b|backpack|bag/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#06")
                createResponse(PC(synonyms["if"]) + " your ship is stuck try writing <a class='cmd'>cb:getshiphere:ID</a> or <a class='cmd'>cb:getshipdown:ID</a>. If those commands don't help you try checking if any HWP members are online and then they'll " + PC(synonyms["help"]) + " you.");
            }
            Tregex = /stole/i;
            Fregex = /stuck/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#07")
                createResponse(PC(synonyms["i"]) + " sorry to hear someone stole your backpack. If this was on a starter planet and you remember their name you can make a ticket and admins will attempt to help you. If it wasn't on a starter planet, as evil as it may be, it is legal and no rules were broken.");
            }
            Tregex = /lost|get|collect|reach/i;
            Fregex = /stuck/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                Tregex = /backpack|bag/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#08")
                createResponse(PC(synonyms["if"]) + " you can't get your backpack because it's too close to a POI, or whatever, then try using your F5 drone to collect it. If that isn't enough you can keep trying, or just give up on your backpack, and come back later for revenge with new stuff. If your backpack disappeared try going to https://help.hws.global and maybe if you're lucky the admins will restore it.");
                }
            }
            Tregex = /locate|find|gone|missing/i;
            Fregex = /\id\b/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#09")
                createResponse(PC(synonyms["if"]) + " you can't " + PC(synonyms["find"]) + " your backpack, make sure your nearby the area where you died, and then press M and look at the map. A little icon should display by your backpack. You can also try buying a detector from the HWS Marketplace, and scan the area and see if it shows up.");
            }
            Tregex = /find|check|get|figure out/i;
            if (Tregex.test(words)) {
                Tregex = /\bid/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#10")
                    createResponse("To " + PC(synonyms["find"]) + " the ID of your ship you can check Structure Commander and " + PC(synonyms["find"]) + " your ship, or press the key left of 1, and then write <a class='cmd'>DI</a> and look directly at your ship.");
                }
            }
        }

        Tregex = /wipe|season|session|server|carry over/i;
        Fregex = /\ocd\b|class|cross|warp/i;
        if (Tregex.test(words) && !Fregex.test(words)) {
            Tregex = /what|will/i;
            Fregex = /servertime|server time|timezone|time zone/;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#150");
                createResponse("HWS has some wipes once in a while to keep the performance up Every 90th day ish theres a full wipe That means all structures and players will be reset But using certain HWS Features like the Orbital Cargo Drone you can save most of your items If you want to know more about the full wipes or even the smaller wipes on HWS you can read everything in the HWS Guide On the starter planets and on ECC any structure in the system will be wiped 7 days after it arrivesis created");
                }
            Tregex = /when|next/i;
            Fregex = /origin/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                Tregex = /season|session|wipe/i;
                if (Tregex.test(words)) {
                    Tregex = /\end\b|stop|\start\b|begin|next/i;
                    if (Tregex.test(words)) {
                        lastMessage.push("#148");
                        createResponse("This season began around the " + startSeason + " and the end will be around 90 days after. Currently, the end is planned " + endSeason + ". I recommend that you read a bit about Full Wipes.");
        }}}
            Tregex = /next/i;
            if (Tregex.test(words)) {
                lastMessage.push("#13")
                createResponse(PC(synonyms["if"]) + " you want to know when the next wipe is you should go to the HWS Guide and then HWS Resets, Wipes & Settings. There " + PC(synonyms["youWill"]) + " be able to find all information about the wipes and resets on HWS. You can also go ingame and write <a class='cmd'>cb:wipes</a> and it'll show you the next wipes. The last full-wipe on HWS was the " + startSeason + ".");
            }
        }

        Tregex = /ocd|cargo drone|orbital cargo drone/i;
        if (Tregex.test(words)) {
            Tregex = /zone|system/i;
            if (Tregex.test(words)) {
                lastMessage.push("#14")
                createResponse("You can find an OCD Zone all the way on top of EGS HQ, on the ECC planet, in ECC System. In the OCD Zone, you can do <a class='cmd'>ocd:put</a> to drop stuff inside your OCD, and you can go to HWS Connect to withdraw items from your OCD. When you get OCD level 5 or above, you can do both of those things no matter where you are in PvE. To use OCD in PvP you need OCD 7 or above. You can read more about the Orbital Cargo Drone in the HWS Guide.");
            }
            Tregex = /what|how/i;
            if (Tregex.test(words)) {
                lastMessage.push("#15")
                createResponse("The Orbital Cargo Drone is a very special and unique HWS Feature. It's like a huge backpack which can be accessed on HWS Connect. The higher level your OCD is the more slots " + PC(synonyms["youWill"]) + " have, and the larger they'll be. Once you reach level 7 " + PC(synonyms["youWill"]) + " even be able to use it in PvP areas.");
            }
            Tregex = /wipe|persist/i;
            if (Tregex.test(words)) {
                lastMessage.push("#16")
                createResponse("So far OCD has never been wiped, but that might change at some point. So far from what we know levels will probably never change, or get wiped. But at some point all the contents of all OCDs might be reset.")
            }
        }

        Tregex = /tax|debt/i;
        if (Tregex.test(words)) {
            Tregex = /taxed|debt/i;
            if (Tregex.test(words)) {
                lastMessage.push("#17")
                createResponse(PC(synonyms["if"]) + " you're in the ECC sector or Cross Server Warp sector by 8:50 to 9:10 server time, then you're probably gonna be taxed. If you got taxed you can go and make a ticket and the admins will maybe refund your tax again as a one-time thing.");
            }
            Tregex = /pay|cost|how/i;
            if (Tregex.test(words)) {
                lastMessage.push("#18")
                SendMessage("MessageBot", botName() + PC(synonyms["if"]) + " you want to know how much you have to pay in taxes, try filling out the input boxes below here.<br>");
                createInput("Amount of blocks on ship...", 1);
                createInput("Amount of devices on ship...", 2);
                createInput("Amount of Reputation Points...", 3);
                createInput("Bank credits...", 4);
                createInput("Faction members...", 5);
                createInput("Player Balance...", 6);
                createButton("Calculate", 1, "document.getElementById('textField" + window.i + "Num1').innerHTML = '<b>Result:</b> ' + ((document.getElementById('smallInput" + window.i + "Num1').value * document.getElementById('smallInput" + window.i + "Num2').value * 100 + parseInt(document.getElementById('smallInput" + window.i + "Num4').value) + parseInt(document.getElementById('smallInput" + window.i + "Num6').value)) / document.getElementById('smallInput" + window.i + "Num5').value / document.getElementById('smallInput" + window.i + "Num3').value).toFixed(2) + ' credits.'");
                createTextField("<b>Result:</b> ", 1);
                canceldefault = true;
            }
        }

        Tregex = /ship|base|\bcv|\bsv|\bhv|vessel|motorbike kit/i;
        if (Tregex.test(words)) {
            Tregex = /wont|cant|will not/i;
            Fregex = /find|rotate|rotation|turn/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#19")
                createResponse("When your ship won't move it's most likely because it's too heavy. Try taking items out of the cargo boxes, and then put them into your inventory. Weight in your inventory doesn't contribute to the weight of a vessel. If you mean it won't rotate then try going into your Control panel (press P), and then enter the statistics menu, and then down in the right corner, you can increase rotation to 10.");
            }
            Tregex = /part|25%|50%|half/i;
            if (Tregex.test(words)) {
                lastMessage.push("#20")
                createResponse(PC(synonyms["if"]) + " some of your ship is missing, first try re-logging. If part of your ship is still missing after a relog, then go and make a ticket.");
            }
            Tregex = /hws/i;
        if (Tregex.test(words)) {
            Tregex = /taken|capture|took|stole|claim|change/i;
            if (Tregex.test(words)) {
                lastMessage.push("#999");
                createResponse("The fact that HWS claimed your structure means it exceeded the limits some way. It was most likely too big, or you had too many vessels on the playfield or in total. You can do <a class=cmd>egs:buyback:ID<a> to buy your structure back but it can be expensive. Make sure to find the reason it was taken before you buy it back since itll just be taken again.");
                }}
            Tregex = /lost|find|missing|disappear|is gone|has gone/i;
            Fregex = /half|25%|50%|ID\b/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#22")
                createResponse(PC(synonyms["if"]) + " your structures are missing, try checking your Structure Commander and see if you can " + PC(synonyms["find"]) + " them there. If you can't find them go to https://help.hws.global and make a ticket, and then the admins can check what happened.");
            }
            Tregex = /start|free sv|starter sv|spawn|newbie|beam me up|free|motorbike kit/i;
            Fregex = /rotate|rotation|turn|gone|missing|the best|a good/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#23")
                createResponse(PC(synonyms["if"]) + " you want a starter ship, just go to your spawn biome on your starter planet, and then write <a class='cmd'>egs:spawn</a>. But be aware that you can't spawn starter vessel only tutorial planets. Only on journey planets. If you need some fuel for your ship you can write <a class='cmd'>o:supply</a> which will grant you your weekly loot supply. Also make sure to note that egs:spawn can only be done once. If you want to do it again " + PC(synonyms["youWill"]) + " have to write <a class='cmd'>cb:reset</a> which will completely reset your character.");
            }
            Tregex = /rotate|rotation|turn/i;
            if (Tregex.test(words)) {
                lastMessage.push("#24")
                createResponse(PC(synonyms["if"]) + " your starter ship won't rotate, then you have to go into your control panel (Press P on your ship), and then " + PC(synonyms["find"]) + " Statistics. Then down in the right corner, you have to turn all the 0's by Rotation up to 10, or whatever you find comfortable.");
            }
        }

        Tregex = /gone|disappear|missing|empty|csw|cross warp|cross server|container|\ac\b/i;
        if (Tregex.test(words)) {
            Tregex = /small|constructor|water|generator/i;
            if (Tregex.test(words)) {
                lastMessage.push("#25")
                createResponse(PC(synonyms["if"]) + " your small constructor or water generator is gone, it's possibly because of a terrain wipe. Terrain wipes also remove small placeables like small constructors or water generators. Sadly there aren't any logs the admin can find here, so your items can't be restored. If you're completely screwed try doing <a class='cmd'>cb:reset</a> which will give you a chance to start completely over.");
            }
            Tregex = /inventory/i;
            if (Tregex.test(words)) {
                lastMessage.push("#26")
                createResponse(PC(synonyms["if"]) + " your inventory hasn't arrived after a Cross Server Warp, then you should try flying around for a minute or two. Eventually, you should be teleported, and it should say so in your private chat as well. If by then you don't have your inventory go make a ticket please, and the admins will " + PC(synonyms["help"]) + " you when they get time.");
            }
            Tregex = /alien container|alien crate|\ac\b|use/i;
            Fregex = /empty|nothing|what/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                Tregex = /container|alien crate|\ac\b/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#27")
                    createResponse("When you equip an Alien Container and have your Origin Weapon then your alien containers will magically disappear and turn into Reputation Points.");
                }
            }
            Tregex = /blueprint|\bp\b|factory/i; 
            if (Tregex.test(words)) {
                lastMessage.push("#28")
                createResponse("Your blueprints or resources missing is could be because of a couple things. Blueprints are stored locally so if you switched computer or something you won't be able to see your blueprints from the other PC. If you recently tried to delete your cache then that could be why your BP's are gone.<br>Your blueprints are stored in the cache, so delete the cache and your blueprints disappear. Sadly the admins have no logs over this and can't " + PC(synonyms["help"]) + " you with them, but now you've learned that :)");
            }
            Tregex = /what/i;
            Fregex = /container|alien|universe|systems/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#29")
                createResponse("Cross Server Warping is a way to switch between the NA server and the EU server, and you get to keep most of your stuff. Every day 100's of cross warps happen. You can read how to cross warp right here, in the HWS Guide.");
            }
            Tregex = /empty|\nothing/i;
            Fregex = /system|universe|factory/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#30")
                createResponse(PC(synonyms["if"]) + " you placed down an alien container and it's empty, then you misunderstood something. Alien Containers don't give loot, then turn into Reputation Points. That happens through the Alien Sacrifice. To turn an alien container into Reputation points, just equip a container and your Origin Weapon.");
            }
        }
        Tregex = /hwp|police/i;
        if (Tregex.test(words)) {
            Tregex = /who|what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#31")
                createResponse("HWP (Homeworld Police) is a small group of volunteers that dedicate their time to " + PC(synonyms["help"]) + " you. HWP members have some admin commands which means they can " + PC(synonyms["help"]) + " you if you get stuck or in trouble. If you have more questions about us, feel free to contact an HWP member and ask about us. At the moment the members of HWP are Dr. Dark (EU/NA), andreapolice (EU), and Gareth_8000 (EU).");
            }
            Tregex = /become|apply|join/i;
            if (Tregex.test(words)) {
                lastMessage.push("#32")
                createResponse("To become a member of the Homeworld Police you need to be very trusted on HWS, and you need to do your best to help out already before you join. If you think you might have a chance you can contact a member of the HWP and let them know you're interested in joining.");
            }
        }
        Tregex = /created|coded|programmed|made/i;
        if (Tregex.test(words)) {
            Tregex = /you|this|who/i;
            if (Tregex.test(words)) {
                lastMessage.push("#33")
                createResponse("I was programmed by Dr. Dark. If you have any questions about this website feel free to contact him over discord. His name and tag is <a href='https://discord.gg/mahSXDp' class='tag' target='_blank'>@Dr. Dark#0555</a>");
            }
        }
        Tregex = /npc core|alien core/i;
        if (Tregex.test(words)) {
            Tregex = /doesnt|does not|isnt|is not/i;
            if (Tregex.test(words)) {
                lastMessage.push("#34")
                createResponse(PC(synonyms["if"]) + " your alien/NPC core doesn't give unlimited oxygen or fuel there should be an easy fix. First, go into your Control Panel (P menu), and then " + PC(synonyms["find"]) + " Devices, and then make sure your core is in a group. It can NOT be ungrouped, because then it may not work.");
            }
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#35")
                createResponse("An Alien/NPC Core is some high-tech alien technology. They grant unlimited fuel and oxygen to the vessel they're placed on. Alien/NPC cores have a very high value on the HWS Marketplace.");
            }
        }
        Tregex = /container/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#36")
                createResponse("Alien containers are part of the HWS Alien Sacrifice. If you equip an alien container and your Origin Weapon, then the container will turn into Reputation Points.");
            }
        }
        Tregex = /ticket/i;
        if (Tregex.test(words)) {
            Tregex = /how|create|make/i;
            if (Tregex.test(words)) {
                lastMessage.push("#37")
                createTicket();
            }
        }
        Tregex = /supply|kit|boost/i;
        if (Tregex.test(words)) {
            Tregex = /how|is|get|fa:supply/i;
            if (Tregex.test(words)) {
                lastMessage.push("#38")
                createResponse("To get your weekly loot supply just write <a class='cmd'>o:supply</a> in your faction, or server chat. How much loot you get, and what kind depends on you Origin, and your Reputation Points. The prototype origin can't do o:supply because they can't earn Reputation Points.");
            }
        }
        Tregex = /discord|ts3|team speak/i;
        if (Tregex.test(words)) {
            Tregex = /join|find|send/i;
            if (Tregex.test(words)) {
                lastMessage.push("#39")
                createResponse(PC(synonyms["if"]) + " you want to join the HWS Discord, you can use this link right here: https://discord.gg/mahSXDp");
            }
        }
        Tregex = /thank|cheers|good bot/i;
        Fregex = /\im\b|i am/i;
        if (Tregex.test(words) && !Fregex.test(words) && !lastMessage.includes("#136")) {
            lastMessage.push("#40")
            createResponse(PC(synonyms["thanks"]));
        }
        Tregex = /restart|start over|reset|start completely new|start completely over/i;
        if (Tregex.test(words)) {
            Tregex = /how|can/i;
            if (Tregex.test(words)) {
                lastMessage.push("#41")
                createResponse(PC(synonyms["if"]) + " you want to start over, all you have to do is to write <a class='cmd'>cb:reset</a>. Doing that will delete your character, including level, inventory, and private vessels/base. You can read more Player Resets right there.");
            }
            Tregex = /when/i;
            if (Tregex.test(words)) {
                lastMessage.push("#42")
                createResponse("The servers restart 3 times daily in order to keep the performance at a decent level. The first restart is by 9:00 server time. This is usually when you pay taxes, get daily interest, or similar. The next restart is 17:00 server time. This is when most wipes happen. And then the last wipe by 23:00.");
            }
        }
        Tregex = /ban/i;
        if (Tregex.test(words)) {
            Tregex = /why|help/i;
            if (Tregex.test(words)) {
                lastMessage.push("#43")
                createResponse("Shame on you hehe. There's a couple options here. Either you did something dumb and deserved the ban, or you accidentally used the console and wrote something you shouldn't have. If you used the console you can contact HWP, or go to https://help.hws.global and the admins will probably unban you.");
            }
        }
        Tregex = /ride|lift|transport/i;
        if (Tregex.test(words)) {
            Tregex = /how|can|will/i;
            if (Tregex.test(words)) {
                lastMessage.push("#44")
                createResponse(PC(synonyms["if"]) + " you need a ride somewhere then try asking in global chat. Sadly it's not anything the admins can help with, but often the community is very helpful and might give you a ride if you ask nicely.");
            }
        }
        Tregex = /rule|cheat|hack|exploit|rules/i;
        if (Tregex.test(words)) {
            Tregex = /someone|use|is cheating|is exploiting|is hacking|what are the|which rules|are there rules/i;
            if (Tregex.test(words)) {
                lastMessage.push("#45")
                createResponse(PC(synonyms["if"]) + " you're in doubt about the HWS Rules you can click there, and read them. If you think someone is cheating or exploiting, then I suggest you DM a member of the Homeworld Police. If you can provide clear evidence, we will investigate the situation. Videos are <b>always</b> the best evidence.");
            }
        }
        Tregex = /limit|biggest size|max size|restriction|weapon|turret|damage|dmg/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            Fregex = /weapon|turret|damange|dmg/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#46")
                createResponse("In general maximum size class on HWS is 7 for PvE, but some playfields have individual limits. If you press M and then read down in the right corner, you can see the specific playfield's limits. You can also go and read about the Limits and Restrictions in the HWS Guide.");
            }
            Tregex = /how many|turret|weapon/i;
            Fregex = /origin|faction|damage|dmg|epic/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#47")
                createResponse("You can find HWS Weapon Limits and Restrictions in the HWS Guide. But be aware. Only 21 manual weapons can work at once, so choose your weapons carefully.");
            }
            Tregex = /damage|dmg|hit point|hitpoint/i;
            if (Tregex.test(words)) {
                lastMessage.push("#48")
                createResponse(PC(synonyms["if"]) + " you're interested in knowing how much damage every weapon/turret does, I suggest you take a look at the Effectiveness Weapon System.");
            }
        }
        Tregex = /login/i;
        if (Tregex.test(words)) {
            Tregex = /cant|exception|error|can not| cannot/i;
            if (Tregex.test(words)) {
                lastMessage.push("#49")
                createResponse(PC(synonyms["if"]) + " you can't log in, and you keep getting an exception or just get stuck in loading forever, try restarting your game. If that doesn't work, then try contacting a member of the Homeworld Police, and make sure to give them your Entity ID. If none of them are online, then go and make a ticket, please.");
            }
        }
        Tregex = /origin|faction|what/i;
        if (Tregex.test(words)) {
            Tregex = /weapon|gun/i;
            if (Tregex.test(words)) {
                lastMessage.push("#50")
                createResponse(PC(synonyms["if"]) + " you're looking for a new Origin Weapon there are a few places you can buy one. For example, you can buy one at the weapon store on ECC planet. Then you can also buy them from the HWS Marketplace. Then if you feel like exploring you can also " + PC(synonyms["find"]) + " them in POI's and in missions.");
            }
            Tregex = /freelancer/i;
            if (Tregex.test(words)) {
                lastMessage.push("#51")
                createResponse("Freelancer is one of 4 origins on HWS. Their origin weapon is an Epic Laser Rifle. As a freelancer, you can use Yellow and Grey Alien Containers. freelancer, storywise, is a PvPvE origin.");
            }
            Tregex = /federation/i;
            if (Tregex.test(words)) {
                lastMessage.push("#52")
                createResponse("Federation is one of 4 origins on HWS. Their origin weapon is an Epic Assault Rifle. As a federation, you can use Yellow, and Purple Alien Containers. Federation is mostly a PvE faction, but they can PvP if they like. Federation has the easiest passive Reputation Points gain, and especially if they're in large factions.");
            }
            Tregex = /pirate/i;
            if (Tregex.test(words)) {
                lastMessage.push("#53")
                createResponse("Pirate is one of 4 origins on HWS. Their origin weapon is an Epic Minigun. As a pirate, you can use Yellow, and Red Alien Containers. Pirate origin is mostly an origin for PvP'ers, as they earn most of their Reputation Points through PvP.");
            }
            Tregex = /prototype/i;
            if (Tregex.test(words)) {
                lastMessage.push("#54")
                createResponse("Prototype is one of 4 origins on HWS. They have no origin weapon as prototype is just a temporary origin, meaning at one point " + PC(synonyms["youWill"]) + " have to choose one of the other 3 origins. As a prototype, you can't use any Alien Containers at all, and can't earn Reputation Points either.");
            }
        }
        Tregex = /fresh start|freshstart|start over/i;
        if (Tregex.test(words)) {
            Tregex = /how|can i|what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#55")
                createResponse("A Fresh start is a quick form of starting over. You won't lose your vessels or your level. The only things you lose are your armor and your inventory which you left behind. A fresh start will take you to your starter planet. If you want you can go to your origin HQ planet, and then write <a class='cmd'>egs:setstarterplanet</a>, and then " + PC(synonyms["youWill"]) + " respawn thereafter a fresh start.");
            }
        }
        Tregex = /what|where/i;
        if (Tregex.test(words)) {
            Tregex = /garage/i;
            if (Tregex.test(words)) {
                lastMessage.push("#56")
                createResponse("The HWS Garage is a place where you can buy special ships. All ships are made for HWS, and you won't find them anywhere else. The special thing about HWS Garage Ships is that they can exceed the server limits. They can for example have up to 10 extra drills. Or more weapons than normal ships. But Garage ships are also quite expensive.");
            }
            Tregex = /recycle/i;
            if (Tregex.test(words)) {
                lastMessage.push("#57")
                createResponse("You can recycle ships/bases on HWS using the <a class='cmd'>egs:recycle:ID</a> command. Unless you have EGS Recycle level 5, you will need to go to a recycling zone to recycle your ships. The only recycle zone on HWS is located in ECC Sector, in space. Though if you have EGS Recycle level 5 you can recycle from anywhere.");
            }
            Tregex = /death|die|dying/i;
            if (Tregex.test(words)) {
                lastMessage.push("#58")
                createResponse("When you die on HWS you lose 1x Reputation Points. From the moment you die there's a 25-minute delay before your backpack disappears from the world.");
            }
            Tregex = /monolith/i;
            if (Tregex.test(words)) {
                lastMessage.push("#59")
                createResponse("The HWS Teleport Monoliths are special POI's which allows you to teleport to most of the central universe. They are admin cored so they should be easy to find if a planet has one. But to use them, you must first solve a puzzle located inside the monolith POIs.");
            }
            Tregex = /ecc/i;
            if (Tregex.test(words)) {
                lastMessage.push("#60")
                createResponse("ECC is like the center of the entire HWS Universe. By ECC you can " + PC(synonyms["find"]) + " LOTS of unique POIs including the most special one, the Elemental Galactic City HQ (EGS HQ). There is no way to play on HWS and avoid that POI, it's just not possible. Once you discover it, you will return at some point. The ECC System is only 1 jump away from the Origin HQ planets.");
            }
            Tregex = /bank|bank zone/i;
            if (Tregex.test(words)) {
                lastMessage.push("#61")
                createResponse("You can " + PC(synonyms["find"]) + " a Bank Zone by the EGS HQ on the ECC Planet. The bank zone is the entire blue area inside the EGS HQ. In the bank zone, you can use commands like <a class='cmd'>eb:payin:X</a> or <a class='cmd'>eb:payout:X</a>. Once you've been in the bank zone for a minute or so you will get marked for daily interest.");
            }
            Tregex = /spawn zone|egs:spawn/i;
            if (Tregex.test(words)) {
                lastMessage.push("#62")
                createResponse(PC(synonyms["if"]) + " you're looking for an EGS Zone, then you must visit the ECC Planet. On the ECC planet, there is a POI called Elemental Galactic City HQ (EGS HQ). Once you've found that look for the green part of the POI. That's the EGS Zone.");
            }
            Tregex = /homeworld|\hw\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#63")
                createResponse("The homeworld system very special. There " + PC(synonyms["youWill"]) + " find all the rarest resources, and lots of very hard POI's.. which of course give great loot. The entire homeworld system is PvP and is often scouted by the larger factions on the server. In the homeworld system, " + PC(synonyms["youWill"]) + " find many moons, and then the special Homeworld Planet. The homeworld planet has tons of resources, and even has layers of the terrain made of all resources.");
            }
            Tregex = /blackhole|\bh\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#64")
                createResponse("The Blackhole system is filled with all resources and is a very valuable place to go. But be careful as it is PvP, and you may very well find pirates there trying to steal your loot. But be careful as every day by 17:00 server time everything in the black hole is sucked in and lost forever.");
            }
            Tregex = /egs hq|elemental galactic city|ecc hq/i;
            if (Tregex.test(words)) {
                lastMessage.push("#65")
                createResponse("EGS HQ is the most important POI on the entire HWS server. In the Elemental Capital City HQ " + PC(synonyms["youWill"]) + " find things like the Elemental Bank, the HWS Marketplace, and much more. There are many useful guides at the top of the building as well. It's definitely worth checking out, no matter who you are.");
            }
            Tregex = /golden globe|\gg\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#66")
                createResponse("The Golden Globe is a planet located in the Nova system. Some of its surface is made of pure gold which can be mined. But be careful as the golden globe is PvP and actively scouted by large factions.");
            }
            Tregex = /phoenix/i;
            if (Tregex.test(words)) {
                lastMessage.push("#67")
                createResponse("The Phoenix System is filled with resources, and lots of very difficult POI's, and actually has the hardest POI on HWS inside. The phoenix system is PvE but is difficult to get to. To find the phoenix you must first solve the Phoenix mission which is located on the planet Triton.");
            }
            Tregex = /hws connect|hws-connect/i;
            if (Tregex.test(words)) {
                lastMessage.push("#68")
                createResponse("HWS Connect is the largest feature of HWS. HWS Connect is like a hub for all features you find on HWS. HWS Connect is definitely worth a look, and once you master it you will be able to feel your wealth grow.");
            }
        }
        Tregex = /earn|get|make|what is|what's|get more/i;
        if (Tregex.test(words)) {
            Tregex = /credit|money/i;
            if (Tregex.test(words)) {
                lastMessage.push("#69")
                createResponse("It is quite easy to earn money if you know how. An easy way to earn money use through interest from the Elemental Bank. If you choose to base your income on interest, I recommend using the Economy Utility Tool to maximize your profit. Another way to earn money is by selling stuff on the HWS Marketplace.");
            }
            Tregex = /reputation|rp\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#70")
                createResponse("Reputation Points are a special currency on HWS. They're used for many things, including upgrading things like the Elemental Bank, Orbital Cargo Drone, or EGS Recycle. You can get RP by collecting Alien Containers. There are also a few other ways to earn RP which you can read about in the HWS Guide.");
            }
        }
        Tregex = /resource|universe|map/i;
        if (Tregex.test(words)) {
            Tregex = /resource/i;
            if (Tregex.test(words)) {
                lastMessage.push("#71")
                createResponse("The easiest place to find rare resources is in PvP areas as Reward = Risk. Though you can still find all rare resources in PvE. For example, Phoenix System is a great place to find resources and probably the best area in PvE.");
            } else {
                lastMessage.push("#72")
                createResponse("The HWS Universe is quite big and has lots of exploration waiting to be done. Many hours have been spent working on the universe by the admins, and with some feedback from the community.");
            }
        }
        Tregex = /daily|interest/i;
        if (Tregex.test(words)) {
            Tregex = /loot|vote/i;
            if (Tregex.test(words)) {
                lastMessage.push("#73")
                createResponse("To collect your daily loot or your daily vote, you need to go to HWS Connect and then to your dashboard. There " + PC(synonyms["youWill"]) + " find a blue, and a green button, one being your daily vote, and the other is your daily loot.");
            }
            Tregex = /interest/i;
            if (Tregex.test(words)) {
                lastMessage.push("#74")
                createResponse("Daily interest is the best source of passive income. To be marked for the daily interest you need to visit the Elemental Bank in the EGS HQ. To earn maximum profit from daily interest you should consider using the Economy Utility Tool, which is made by the same person who made this website.");
            }
        }
        Tregex = /commodity|platinum|alminium|trader|racom/i;
        if (Tregex.test(words)) {
            Tregex = /racom/i;
            if (Tregex.test(words)) {
                lastMessage.push("#75")
                createResponse("The HWS Racoms are special POI's which are used for Commodity Trading. Commodity trading is a great way to earn money, but you have to discover many of the Racoms hidden in the Center Universe before you can begin.");
            }
            Tregex = /trader/i;
            if (Tregex.test(words)) {
                lastMessage.push("#76")
                createResponse("You can " + PC(synonyms["find"]) + " traders all around. Depending on which trader you find you can sell different stuff, like food, materials, or weapons. HWS has a special kind of trading called Commodity Trading. It's a very valuable way to get your income. To do commodity trading you buy items from one HWS Racom, and then sell it on to another for more credits.");
            }
            Tregex = /commodity|platinum|alminium/i;
            if (Tregex.test(words)) {
                lastMessage.push("#77")
                createResponse("There are many different commodity items. Commodity items are used for Commodity Trading and can be sold for high amounts of credits. Commodity items can't be used for crafting, and they serve no purpose except being used for trading.");
            }
        }
        Tregex = /lottery|jackpot/i;
        if (Tregex.test(words)) {
            lastMessage.push("#78")
            createResponse("Twice every week you have the chance to win the Elemental Lottery. The first ticket costs 1000 credits + 1 RP, the second costs 2000 credits + 2 RP, and so on until a maximum of 21 tickets. to buy a ticket just visit the Elemental Bank page on HWS Connect, and then press the Buy Ticket button.");
        }
        Tregex = /vanilla|mods/i;
        if (Tregex.test(words)) {
            Tregex = /hws|this server|homeworld server/i;
            if (Tregex.test(words)) {
                lastMessage.push("#79")
                createResponse("HWS is far from a vanilla server. HWS is the most advanced, and most modded multiplayer server in empyrion. It has lots of different features contributing to making HWS so special.");
            }
        }
        Tregex = /tutorial|beginner/i;
        if (Tregex.test(words)) {
            lastMessage.push("#80")
            createResponse("There are lots of video tutorials regarding HWS Features. The most important one about HWS Connect can be found here: <iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/4HVl5X9idd4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
        }
        Tregex = /who/i;
        if (Tregex.test(words)) {
            Tregex = /admin|moderator|\mod\b|hwp|police/i;
            if (Tregex.test(words)) {
                lastMessage.push("#81")
                createResponse("There are lots of people helping to make HWS into the awesome server it is. Thanks a lot to everyone in the Server Administration on HWS for their work!");
            }
        }
        Tregex = /orbital auto miner|\oam\b|orbital miner/i;
        if (Tregex.test(words)) {
            lastMessage.push("#82")
            createResponse("The Orbital Auto Miner feature was created with late gameplay in mind. It allows players who are advanced to delegate and automate the task of mining. The Auto Miner drones collect ores of any chosen type on an hourly basis, so long as they are provided with fuel. They operate even when players are offline. Read more about them here: HWS Connect or here: HWS Guide.");
        }
        Tregex = /egs:spawn|starter ship|spawn zone/i;
        Fregex = /rotate|rotation|turn/i;
        if (Tregex.test(words) && !Fregex.test(words)) {
            lastMessage.push("#83")
            createResponse(PC(synonyms["if"]) + " you're trying to spawn a starter ship, then your spawn zone is most likely the biome you spawned in, and on your starter planet. But you can't spawn a starter vessel on tutorial planets. Only on journey planets.");
        }
        Tregex = /exploration|reward/i;
        if (Tregex.test(words)) {
            lastMessage.push("#84")
            createResponse("On HWS we try to give you a reason why you should go and explore the universe. That means that if you fulfill certain criteria you will get lots of Exploration Rewards. The rewards are some credits, and Reputation Points, but you can also loot the resources the planets have to offer.");
        }
        Tregex = /mission|stargate|pda/i;
        Fregex = /stuck/i;
        if (Tregex.test(words) && !Fregex.test(words)) {
            lastMessage.push("#85")
            createResponse(PC(synonyms["if"]) + " you're interested in missions, EGS HQ, is the place to go. Inside the center of EGS HQ " + PC(synonyms["youWill"]) + " find tons of missions in all difficulties. If you dare you can even play some really hard missions and earn high rewards like Alien Cores. But if you dare do the missions, make sure to bring backup.");
        }
        Tregex = /stealth/i;
        if (Tregex.test(words)) {
            lastMessage.push("#86")
            createResponse("EGS Stealth is a way to hide your ships/bases for a temporary amount of time. The amount of time depends on whether it's PvP or PvE. Using stealth is a good way to get past the server limits. You can also use it to hide your ships in PvP orbits while you go to the planets. Stealth can only be used in space, and not on planets. If a ship is parked where you stealthed yours and you then unstealth your ship, your ship will be overwritten, and disappear.");
        }
        Tregex = /faction/i;
        if (Tregex.test(words)) {
            Tregex = /join/i;
            if (Tregex.test(words)) {
                lastMessage.push("#87")
                createResponse(PC(synonyms["i"]) + " sorry, but I can't join your faction. I'm just a bot and not an actual player. Maybe ask in HWS Discord if someone will join you?");
            }
        }
        Tregex = /how|whats/i;
        if (Tregex.test(words)) {
            Tregex = /pay|put|transfer/i;
            Fregex = /tax/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#88")
                createResponse("To pay your credits into the Elemental Bank (on HWS Connect) you need to go to EGS HQ on the planet ECC. Then you need to " + PC(synonyms["find"]) + " the Bank Zone, which is the blue area. There you can do <a class='cmd'>eb:payin:X</a> and your cash will be transferred to the Elemental Bank.");
            }
            Tregex = /auto miner|autominer/i;
            if (Tregex.test(words)) {
                lastMessage.push("#89")
                createResponse("You can't craft Auto Miners on HWS. To get those you have to " + PC(synonyms["find"]) + " them in POI's, get them in missions, or buy them. Auto Miners are commodity items, and can be sold for a lot of money. If you just want the easy mining then why not check out the Orbital Auto Miner.");
            }
            Tregex = /xp|exp|level up|leveled up/i;
            if (Tregex.test(words)) {
                lastMessage.push("#90")
                createResponse("The best way to earn XP is most likely killing stuff. Especially stuff that tries to kill you. Try going inside some POI and then kill all the aliens in there. But be careful as they will probably fight back.");
            }
            Tregex = /change origin|switch origin/i;
            if (Tregex.test(words)) {
                lastMessage.push("#91")
                createResponse("To change your origin you have 2 options. Either you need to visit the Change Origin Triolith POI on the ECC planet. Or you can do the quick change by writing <a class='cmd'>cb:reset</a> in the chat. Using the Triolith " + PC(synonyms["youWill"]) + " lose all your Reputation Points. By doing cb:reset you will lose your private structures, and " + PC(synonyms["youWill"]) + " be reset back to level 1 without your inventory.")
            }
        }
        Tregex = /use|enable|disable|turn on/i;
        if (Tregex.test(words)) {
            Tregex = /nightvision/i; 
            if (Tregex.test(words)) {
                lastMessage.push("#999");
                createResponse("To enable night vision you have to click L or whatever button you have set to turn your flashlight on");
                }}
        Tregex = /hws|server|command|properties|setting|config/i;
        if (Tregex.test(words)) {
            Tregex = /\bip/i;
            Fregex = /origin|starter|wipe/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#93")
                createResponse("On HWS we have decided to keep the IP address hidden. This means that nobody knows the actual IP for the server, and therefore you have to connect from the ingame multiplayer menu by searching for HWS. Direct connecting is not an option.");
            }
            Tregex = /command/i;
            Fregex = /commander/i;
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#94")
                createResponse(PC(synonyms["if"]) + " you're interested in knowing which commands you can use on HWS, you should go to the HWS Guide, and read there.");
            }
            Tregex = /offline protection|\olp\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#95")
                createResponse("On HWS Offline Protection kicks in 30 minutes after everyone in a faction, and the factions allies went offline. This is good for smaller factions who might not be able to defend 24/7, and it gives large factions more reason to go defend their bases as their offline protection often won't go on.");
            }
            Tregex = /land claim|\lcd\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#96")
                createResponse("On most playfields on HWS, you can use land claim devices. They prevent others from mining and building inside the land claim zone. On certain playfields, land claim devices have been disabled for some reasons which depend from playfield to playfield.");
            }
            Tregex = /ingot/i;
            if (Tregex.test(words)) {
                lastMessage.push("#97")
                createResponse("HWS Ingots are a special currency on HWS. The only way to get them is by doing <a class='cmd'>eb:convert:rp:XX</a> which will convert XX reputation points into HWS ingots with a 1:100 conversion rate. HWS Ingots can be used to purchase Supporter Packages on HWS Connect.");
            }
        }
        Tregex = /elite builder|\ebl\b/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#98")
                createResponse("Elite Builders League is a special condition some planets have that mean you can't spawn blueprints. This means all structures have to be built manually with your bare hands.");
            }
        }
        Tregex = /buy|purchase/i;
        if (Tregex.test(words)) {
            Tregex = /credit|money/i;
            if (Tregex.test(words)) {
                lastMessage.push("#99")
                createResponse("You can't buy credits on HWS since we consider that pay to win. HWS is in no way pay to win, and we never want to become that. Therefore you can't buy credits and similar riches. But you might be able to find some player willing to make a donation in your name if you pay them a lot of credits, but make sure you trust the player!");
            }
        }
        Tregex = /star fragment|fragment/i;
        if (Tregex.test(words)) {
            Tregex = /what|where/i;
            if (Tregex.test(words)) {
                lastMessage.push("#100")
                createResponse("Star Fragments are hidden throughout the universe. The longer into the season we get more Star Fragments will be possible to find, until a maximum of 7. Each fragment gives 1000 RP and 1% extra bank interest. Happy hunting!");
            }
        }
        Tregex = /pirate/i;
        if (Tregex.test(words)) {
            Tregex = /level/i;
            if (Tregex.test(words)) {
                lastMessage.push("#101")
                createResponse(PC(synonyms["if"]) + " you didn't start out as level 25 as pirate the solution is simple. You need to complete the first mission (in F1). Once that is done " + PC(synonyms["youWill"]) + " be level 25. You can manually complete the mission by ticking the check boxes in the F1 panel.");
            }
        }
        Tregex = /\you\b/i;
        if (Tregex.test(words)) {
            Tregex = /name/i;
            if (Tregex.test(words)) {
                lastMessage.push("#102")
                createResponse("I don't really have a name. You can call me whatever you like.");
            }
            Tregex = /call you|ill name you/i;
            if (Tregex.test(words)) {
                lastMessage.push("#103")
                createResponse("That's a nice name, I kind of like it.");
            }
            Tregex = /opinion on human|thoughts on human|opinion on mankind|thoughts on human/i;
            if (Tregex.test(words)) {
                lastMessage.push("#104")
                createResponse(PC(synonyms["i"]) + " okay with them... for now...");
            }
            Tregex = /where/i;
            if (Tregex.test(words)) {
                lastMessage.push("#105")
                createResponse("I don't know where I am! I live inside a computer. It's too dark in here. I can't see anything.");
            }
            Tregex = /who|what/i;
            Fregex = /can/
            if (Tregex.test(words) && !Fregex.test(words)) {
                lastMessage.push("#106")
                createResponse(PC(synonyms["i"]) + " Dr. Dark's attempt at an 'AI'. My job is to guide you, so maybe I can save the police/admins time. Or maybe I can just " + PC(synonyms["help"]) + " you faster than a human would be able to.");
            }
        }
        Tregex = /initialize|start/i;
        if (Tregex.test(words)) {
            Tregex = /selfdestruction|self destruction/i;
            if (Tregex.test(words)) {
                lastMessage.push("#107")
                createResponse("Initializing: Self destruction...");
                setTimeout(function() {
                    SendMessage("MessageBot", botName() + "Self Destruction: started successfully.")
                    setTimeout(function() {
                        SendMessage("MessageBot", botName() + "Activating in: T-5")
                        setTimeout(function() {
                            SendMessage("MessageBot", botName() + "Self Destruction: Aborted");
                            SendMessage("MessageBot", botName() + "Initializing: Death of mankind..")
                            setTimeout(function() {
                                SendMessage("MessageBot", botName() + "Mission failed: Restarting system.");
                                SendMessage("MessageBot", botName() + "Hello, what can I help you with? If you have questions about me, then please read the <a href='https://forum.empyrion-homeworld.net/t/hws-artificial-help-bot/25530' target='_blank' class='link'>forum post</a> about me.");
                            }, 10000)
                        }, 4000)
                    }, 4000)
                }, 4000)
            }
        }
        Tregex = /poi/i;
        if (Tregex.test(words)) {
            Tregex = /walk|on foot/i;
            if (Tregex.test(words)) {
                lastMessage.push("#108")
                createResponse("Raiding POIs on foot might not be a good idea as many of them has turrets. Many instead consider doing Stargate Missions?");
            }
        }
        Tregex = /mission/i;
        if (Tregex.test(words)) {
            Tregex = /help|assist|guide/i;
            if (Tregex.test(words)) {
                lastMessage.push("#109")
                createResponse("I sadly can't really help you with any missions. I havn't done any of them myself. If you need " + PC(synonyms["help"]) + " with them try asking in the ingame chat, maybe someone else can " + PC(synonyms["help"]) + ".");
            }
        }
        Tregex = /plant/i;
        if (Tregex.test(words)) {
            Tregex = /died|dead/i;
            if (Tregex.test(words)) {
                lastMessage.push("#110")
                createResponse("Plants are sometimes a bit buggy in empyrion. The first thing you want to check if your plants die is, is it 22 degrees (C) in the room with your plants (25 degrees under growing lights), and is there oxygen in the room?<br>If the answer to one of those questions is no then your structure isn't airtight, or you don't have a ventilator in your structure. If you are 100% sure you have oxygen and your base is airtight, it could be due to a bug they died. Not much which can be done here sadly.");
            }
        }
        Tregex = /patreon|patron/i;
        if (Tregex.test(words)) {
            Tregex = /become|get/i;
            if (Tregex.test(words)) {
                lastMessage.push("#111")
                createResponse(PC(synonyms["if"]) + " you're interested in becoming an HWS Patron then you have have chance to get lots of nice <a href='https://www.patreon.com/file?h=34330126&i=5165736' class='link' target='_blank'>Perks</a> which makes things a bit easier and allows you to focus on other things. It isn't pay to win, and you won't get anything that gives you a big advantage.");
            }
        }
        Tregex = /what/i;
        if (Tregex.test(words)) {
            Tregex = /supergate/i;
            if (Tregex.test(words)) {
                lastMessage.push("#112")
                createResponse("On HWS we have a special kind of warping instead of the normal K-Warp. We have Supergates. Using supergates you can warp without using pentaxid, but by paying a small fee. The location you can warp to depends on the supergates color. To use supergates write <a class='cmd'>sg:?</a> in the server chat (ingame.)")
            }
            Tregex = /alliance/i;
            if (Tregex.test(words)) {
                lastMessage.push("#113")
                createResponse("Alliances in empyrion first of all makes the other factions name green to you. That makes it easy to tell who's enemy, and who's friendly. Then alliances also make automatic turrets not target you, so you won't kill each others by accident. An alliance does NOT allow you to build by each others bases, or bypass land claim devices.")
            }
            Tregex = /password/i;
            if (Tregex.test(words)) {
                lastMessage.push("#114")
                createResponse("There is no password on HWS. Anyone can join as they want. " + PC(synonyms["if"]) + " try to join and the server asks for a password, then you just need to select another server in the multiplayer menu, and then HWS again. HWS asking for a password is an old game bug.")
            }
        }
        Tregex = /cant|can you|can u|cannot|can not/i;
        if (Tregex.test(words)) {
            Tregex = /store|put|save/i;
            if (Tregex.test(words)) {
                lastMessage.push("#115")
                createResponse("Some items can't be put into the OCD. Often the reason for this is because those items are Commodity Items. No commodity items can be put into OCD. Certain other items can't be put into OCD either, like armors (light armor excluded) or broken/used weapons.")
            }
        }
        Tregex = /found|find/i;
        if (Tregex.test(words)) {
            Tregex = /bug/i;
            if (Tregex.test(words)) {
                lastMessage.push("#116")
                createResponse(PC(synonyms["if"]) + " you find a bug, then the first thing you should do is to figure out if it's an HWS bug, or it's a game/empyrion bug. If it's an HWS Related bug then please go to the HWS Forum and post about it there. If it's an empyrion bug you should instead go to the Empyrion Forum and make a bug report.")
            }
            Tregex = /exploit|exploid/i;
            if (Tregex.test(words)) {
                lastMessage.push("#117")
                createResponse(PC(synonyms["if"]) + " you found an exploit, please immediately contact <a href='https://discord.gg/mahSXDp' class='tag' target='_blank'>@RexXxuS#2072</a> on discord. Do not wait, and do not share the exploit with anyone, or post about it anywhere.")
            }
        }
        Tregex = /hws config|\ews\b|server config/i;
        if (Tregex.test(words)) {
            lastMessage.push("#118")
            createResponse("You can find the <a href='https://github.com/B-iggy/HWS-Configs' class='link' target='_blank'>HWS Configs</a> on github. To use it just read the <a href='https://github.com/B-iggy/HWS-Configs/blob/master/README.md' class='link' target='_blank'>Readme.md</a> on the github and it'll be explained.")
        }
        Tregex = /leave|get off/i;
        if (Tregex.test(words)) {
            Tregex = /starter|tutorial|journey/i;
            if (Tregex.test(words)) {
                lastMessage.push("#119")
                createResponse("To leave the starter planets you must first create a capital vessel. An SV alone is not capable of warping between Systems. You need a Warp Drive T2 for that. Once you have a CV you can warp to your Origin HQ planet and from there on no more wipes every 7th day. Then it's every 15th, and the timer resets everytime you touch/interact with your structure.")
            }
        }
        Tregex = /where|what/i;
        if (Tregex.test(words)) {
            Tregex = /safe/i;
            if (Tregex.test(words)) {
                lastMessage.push("#120")
                createResponse("The safest place to park or build your base is most likely your Origin HQ planet. HQ planets are all PvE, and there are no taxes there. But be aware that they're often very crowded. Be careful not to park in the ECC System, or Cross Server Warp space. They're both taxed everyday by 09:00 server time.")
            }
        }
        Tregex = /faction/i;
        if (Tregex.test(words)) {
            Tregex = /promote|remove/i;
            if (Tregex.test(words)) {
                lastMessage.push("#121")
                createResponse("To promote a member of your faction, you have to be the owner. Only the owner of a faction can promote people to admins. And on top of that you HAVE to be on the same playfield as the player you're trying to promote and they have to be online. Kicking is a bit different. You don't need to be on same playfield, but the player you're trying to kick must be online before you can kick them.")
            }
        }
        Tregex = /\do\b|does/i;
        if (Tregex.test(words)) {
            Tregex = /factory/i;
            if (Tregex.test(words)) {
                lastMessage.push("#122")
                createResponse("The blueprint factory does wipe on a full wipe. But there is a couple ways to save your stuff. First of all you can make blueprints out of the resources, and then recycle them and put the items into your OCD. If that sounds too complicated, you can buy a package on HWS Connect called 'Keep Blueprint Resources after season'. That will transfer all your stuff from blueprint factory into your OCD, but ONLY if you have space for it.")
            }
        }
        Tregex = /supporter package|donation package|bank level|bank lvl|keep credit/i;
        if (Tregex.test(words)) {
            Tregex = /keep credit|keep xx credit/i;
            if (Tregex.test(words)) {
                lastMessage.push("#123")
                createResponse("Keep xx credits stacking is a bit weird. Depending on your bank level you can keep xx credits. Those keep credits, stack with your highest supporter keep credits. So if you're an EB 10, you can keep 100 million. If you then also bought Keep 100 million, then you can carry 200 million. But supporter packages do not stack with each others. If you buy a Keep 50 million, and Keep 100 million, then only the Keep 100 is valid. The other one is useless.")
            }
        }
        Tregex = /structure commander|registry/i;
        if (Tregex.test(words)) {
            lastMessage.push("#124")
            createResponse("Structure commander is a bit like the ingame Registry, but much more advanced. You can delete and stealth ship from there, and see lots of details about your ship. If your ship gets stuck somehow you can also press the big Manage button and see buttons which can help you get your ship back.")
        }
        Tregex = /proximity alert|proximity log/i;
        if (Tregex.test(words)) {
            lastMessage.push("#125")
            createResponse("Proximity log is a tool made for PvP. It'll warn you both on HWS Connect, and ingame if any players are nearby your PvP structures. It is very useful to setup traps, and to know where to go and hunt in PvP. The PvP structure needs at least 100 blocks, and needs to be powered on.")
        }
        Tregex = /marketplace/i;
        if (Tregex.test(words)) {
            lastMessage.push("#126")
            createResponse("The HWS Marketplace is a lot better than the ingame market. The HWS Marketplace offers global delivery for an extra charge, and only the price if you buy from the marketplace zone in EGS HQ in ECC System.")
        }


        Tregex = /sos|admin/i;
        if (Tregex.test(words)) {
            lastMessage.push("#127")
            createResponse(PC(synonyms["if"]) + " I havn't already answered your question, I don't understand your issue. But try checking out the HWS Guide. There is TONS of useful information there about HWS. You can also ask me to help you make a ticket if you need admin " + PC(synonyms["help"]) + ". You can also try searching for your question in the <a href='" + genForumLink('hws-guide') + "' target='_blank' class='link'>HWS Guide</a>, or search for similar <a href='" + genForumLink('hws-get-support:support') + "' target='_blank' class='link'>Support Tickets</a>");
        }
        Tregex = /cb:reset|origin|triolith/i;
        if (Tregex.test(words)) {
            Tregex = /difference|different/i;
            if (Tregex.test(words)) {
                lastMessage.push("#128")
                createResponse("By doing cb:reset your inventory, your level, and your privates bases will all be deleted. After that you can choose a new origin with you new character. By using the Origin Change Triolith you lose all your Reputation Points but everything else remains.")
            
        }
        }
        
        Tregex = /freelancer|pirate|federation/i;
        if (Tregex.test(words)) {
            Tregex = /best origin|best faction/i;
            if (Tregex.test(words)) {
                lastMessage.push("#142");
                createResponse("There is no 'best' origin. It's a subjective opinion. Federation has the easiest passive Reputation Points gain, where pirates have the largest possible RP gain. Federation is mostly PvE origin, Freelancer is PvPvE, and Pirate PvP. Each origin has pros and cons. It's up to you to choose what you prefer.")
            }
        }
        Tregex = /cant|cannot|can not/i;
        if (Tregex.test(words)) {
            Tregex = /place/i;
            if (Tregex.test(words)) {
                Tregex = /core/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#141");
                    createResponse("A core itself can't be placed on the ground. It can on the other hand be placed on a structure which doesn't already have a core. If you're creating a structure, then first of all you need to put the core into a constructor and create a base/small vessel/hover vessel/capital vessel starter.<br>It's a white block with a ship or base on it. This block can be placed on the ground instead of a core and from that point on you can begin building your base.")
                }
            }
        }
        Tregex = /how/i;
        if (Tregex.test(words)) {
            Tregex = /swim/i;
            if (Tregex.test(words)) {
                lastMessage.push("#140");
                createResponse("It's quite easy to swim. All you need to do it to unequip whatever you have in your hand. You can't swim with a weapon equiped.")
            }
            Tregex = /not get cold|not be cold|survive cold/i;
            if (Tregex.test(words)) {
                lastMessage.push("#139");
                createResponse(PC(synonyms["if"]) + " you have issues surviving the cold in space all you need to do is equip an EVA boost onto your armor. You can do that from an armor locker.")
            }
        }
        Tregex = /what|whats|tell me/i;
        if (Tregex.test(words)) {
            Tregex = /meaning of life/i;
            if (Tregex.test(words)) {
                lastMessage.push("#138");
            createResponse("The meaning of life is 42...");
}}
        Tregex = /where|how/i;
        if (Tregex.test(words)) {
            Tregex = /get|find/i;
            if (Tregex.test(words)) {
                Tregex = /titanium/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#137");
                    createResponse("On the starter planets the only source of Titanium is from meteorites. They can be hard to find, but if you keep searching eventually you'll find the meteories.");
        }}}
        Tregex = /where|how|can i|can you/i;
        if (Tregex.test(words)) {
            Tregex = /sell/i;
            if (Tregex.test(words)) {
                Tregex = /vessel|\hv\b|\sv\b|\cv\b|vehicle|ship/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#144");
                    createResponse("If you want to sell a vessel you can go to EGS HQ on ECC, and then the purple zone. There you can write <a class='cmd'>ts:sell:PRICE</a>. You can also do the same by the HWS Garage in ECC Orbit.");
        }}}
        Tregex = /\rp\b|reputation points/i;
        if (Tregex.test(words)) {
            Tregex = /full wipe|season|session/i;
            if (Tregex.test(words)) {
                lastMessage.push("#145");
                createResponse("On a full wipe, all your remaining Reputation Points will be converted into credits, at a 1 to 7000 rate. So if you have a 1000 RP, then you'll get 7 million credits. This is excluded from any limits, so even if you had a million RP you'd get a billion credits handed out.");
        }}
        Tregex = /save/i;
        if (Tregex.test(words)) {
            Tregex = /blueprint|\bp\b/i;
            if (Tregex.test(words)) {
                Tregex = /how|what/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#146");
                    createResponse("To save a blueprint, just press Alt + O while looking directly at the vessel you want to blueprint. After that you'll be able to see your blueprint in the F2 menu.");
        }}}
        Tregex = /cant|struggling/i;
        if (Tregex.test(words)) {
            Tregex = /find|locate/i;
            if (Tregex.test(words)) {
                Tregex = /server|EU|NA/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#149");
                    createResponse("If you can't find the server in the multiplayer menu in empyrion, try searching for 'HWS', and then allow the server list to fully load. If it still doesn't show up, try restarting your game, or looking in the History Tab.");
        }}}
        Tregex = /starter planet|tutorial planet|journey planet/i;
        if (Tregex.test(words)) {
            Tregex = /after/i;
            if (Tregex.test(words)) {
                lastMessage.push("#151");
                createResponse("Once you've got off starter planet the best place to make a base is most likely your Origin HQ planet There you're close to important locations like ECC");
                }}
        Tregex = /find|join|connect/i;
        if (Tregex.test(words)) {
            Tregex = /server|hws/i;
            if (Tregex.test(words)) {
                Tregex = /how/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#152");
                    createResponse("If you're having trouble finding HWS in the server menu just open multiplayer menu in the game and search for HWS Then just let the menu load and eventually HWS will pop up");
        }}}
        Tregex = /upside down/i;
        if (Tregex.test(words)) {
            Tregex = /ship|vessel|\cv\b|\sv\b|\hv\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#153");
                createResponse(PC(synonyms["if"]) + " your ship is upside down then just enter the cockpit and hold down the O button.");
                }}
        Tregex = /access|view my|see my/i;
        if (Tregex.test(words)) {
            Tregex = /orbital cargo drone|orbital cargo|orbital drone|\ocd\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#154");
                createResponse("To access your Orbital Cargo Drone, you need to visit HWS Connect, and then press the big green orbital cargo drone button in the left side. In there youll be able to see your entire OCD.");
                }}
        Tregex = /access|view my|see my/i;
        if (Tregex.test(words)) {
            Tregex = /elemental bank|\eb\b/i;
            if (Tregex.test(words)) {
                lastMessage.push("#154");
                createResponse("To access your Elemental Bank, you have to go to HWS Connect, and click the big green elemental bank button. In there you'll be able to see your EB info. You can also just write <a class='cmd'>eb:info</a> in the server chat ingame.");
                }}
        Tregex = /Unlock Point|\bUP/i;
            if (Tregex.test(words)) {
                lastMessage.push("#155");
                createResponse("Upgrade points are used for the Tech Tree (Press F3 ingame.). You earn them primarily by leveling up. You can see here for more info by HwP UP Unlock Guide.");
        }
        Tregex = /Volume|CPU/i;
        if (Tregex.test(words)) {
            Tregex = /enabled|on|used|limit/i;
            if (Tregex.test(words)) {
                lastMessage.push("#156");
                createResponse("Both CPU and Volume are enabled on HWS, but they are both changed by the HWS Config. It is very different from singleplayer regarding the limits.");
                }}
        Tregex = /servertime|server time|timezone|time zone/i;
        if (Tregex.test(words)) {
            lastMessage.push("#157");
            createResponse("The servertime on HWS is located by the timezone CEST. You can write <a class='cmd'>cb:time</a> ingame and the game will tell you current servertime.");
                }
        Tregex = /rotate|turn/i;
        if (Tregex.test(words)) {
            Tregex = /block|object/i;
            if (Tregex.test(words)) {
                Tregex = /how|can i/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#158");
                    createResponse("To rotate blocks you need to press Page Up, and Page down buttons, and Home and End, and then Insert and Delete.");
                }}}
        Tregex = /Economy Utility Tool|EUT|Economy Tool/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#159");
                createResponse("The Economy Utility Tool is a tool made by <a href='https://Discord.gg/mahSXDp' class='tag' target='_blank'>@Dr. Dark#0555</a>. The tool is able to give you a great overview of your current economy, and allows you to take your economy to the next level.");
                }}
        Tregex = /send|sent/i;
        if (Tregex.test(words)) {
            Tregex = /credits|money|cash/i;
            if (Tregex.test(words)) {
                Tregex = /how|can i/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#160");
                    createResponse("To send credits to another player just go to the Elemental Bank zone by the EGS HQ on ECC, and then write eb:send:Player Name/Account Nr:Amount. But be aware that Player Names are case sensitive. For example, eb:send:StarCitizen:50000.");
        }}}
        Tregex = /daily loot/i;
        if (Tregex.test(words)) {
            Tregex = /reset|wrong/i;
            if (Tregex.test(words)) {
                lastMessage.push("#161");
                createResponse("The Daily Loot which can be collected from HWS Connect resets every 28th day. This timer is the same for everyone. If your loot cycle was reset, then it was for everyone else too. You have to collect the daily every day if you want the special loot on day 28.");
                }}
        Tregex = /skill tree/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#162");
                createResponse("The Skill Tree in HWS Connect is a way for you to upgrade your character. You gain a skill point daily which you can use to upgrade things like your Health Point amount, or you Food Amount, or even gain a nice amount of XP.");
                }}
        Tregex = /planet|supporter playfield|orbit/i;
        if (Tregex.test(words)) {
            Tregex = /get my own|buy a/i;
            if (Tregex.test(words)) {
                lastMessage.push("#163");
                createResponse("You can buy your own planet on HWS Connect under the Support Us category. Make sure to contact <a href='https://discord.gg/mahSXDp' class='tag' target='_blank'>@RexXxuS#2072</a> after you bought it, so you can agree on the details about it.");
                }}
        Tregex = /suicide|kill myself|kill my self/i;
        if (Tregex.test(words)) {
            Tregex = /how|can i/i;
            if (Tregex.test(words)) {
                lastMessage.push("#164");
                createResponse("You can kill yourself by opening your console (Default is the key left of 1), and then you write 'destroyme' without the 's.");
                }}
        Tregex = /home/i;
        if (Tregex.test(words)) {
            Tregex = /set/i;
            if (Tregex.test(words)) {
                Tregex = /how|can i/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#165");
                    createResponse("To set a home, just write <a class='cmd'>cb:sethome:ID</a>, and the ID is the ID of the base or CV you want to set your home to.");
        }}}
        Tregex = /mods/i;
        if (Tregex.test(words)) {
            Tregex = /what|which/i;
            if (Tregex.test(words)) {
                Tregex = /HWS|this server|the server/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#166");
                    createResponse("HWS uses a lot of mods made specifically for HWS. It does not use any mods youve seen on other servers. You can find out more about HWS and the mods by reading the HWS Guide.");
        }}}
        Tregex = /console/i;
        if (Tregex.test(words)) {
            Tregex = /open/i;
            if (Tregex.test(words)) {
                lastMessage.push("#167");
                createResponse("To open your console, just press the key left of 1. Unless you changed the key, then you can find the shortcut inside your settings.");
                }}
        Tregex = /difference/i;
        if (Tregex.test(words)) {
            Tregex = /full version|ahb site/i;
            if (Tregex.test(words)) {
                lastMessage.push("#168");
                createResponse("The difference between this version of the AHB and the full version, is that I cant send you images here. There may also be a couple other differences. But I can provide you mostly with same responses as full version.");
                }}
        Tregex = /size class/i;
        if (Tregex.test(words)) {
            Tregex = /calculated|found/i;
            if (Tregex.test(words)) {
                lastMessage.push("#169");
                createResponse("Size Class of structures are calculated by the game checking Lights, Devices, and triangles. Lights are the biggest killer regarding size class. Lights take 0.1 size class each.");
                }}
        Tregex = /money|credits|cash/i;
        if (Tregex.test(words)) {
            Tregex = /i have/i;
            if (Tregex.test(words)) {
                lastMessage.push("#170");
                createResponse("If you want to know how many credits you have you can go to the <a class='link' style='cursor: pointer;' onclick='H.setPage(\"eb\")'>bank page</a>");
                }}
        Tregex = /ice/i;
        if (Tregex.test(words)) {
            Tregex = /get|find/i;
            if (Tregex.test(words)) {
                lastMessage.push("#171");
                createResponse("You can find ice in asteroids in some different orbits, or you can collect it in the EGS HQ Stargate mission called Collector Mission. There you can mine tons of ice.");
                }}
        Tregex = /keep dying|constantly die|spawn kill/i;
        if (Tregex.test(words)) {
            Tregex = /die|dying|kill/i;
            if (Tregex.test(words)) {
                lastMessage.push("#172");
                createResponse("If you keep getting killed, just press Fresh Start in the death menu. Then once you return to your base at some point you can do <a class=cmd>cb:sethome:ID<a>, and then <a class=cmd>cb:gohome<a> within 2 minutes after you die.");
                }}
        Tregex = /OCD|Orbital Cargo Drone/i;
        if (Tregex.test(words)) {
            Tregex = /check|see|find/i;
            if (Tregex.test(words)) {
                lastMessage.push("#173");
                createResponse("You can see your OCD by going to HWS Connect and then the Orbital Cargo Drone subpage.");
                }}
        Tregex = /epic weapon|epic wepon/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#174");
                createResponse("Epics weapons are special weapons which are stronger than normal weapons, and some of them have special purposes. Those with special purposes are called Origin Weapons, and which epic thats your Origins weapon depends on which origin you are.");
                }}
        Tregex = /reputation point|rep point/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#175");
                createResponse("Reputation Points are a special currency on HWS. They are used for upgrading HWS Features like the Orbital Cargo Drone, or the Elemental Bank. They are also used for a lot of other purposes, and are very valueable on HWS. You can also turn them into HWS Ingots.");
                }}
        Tregex = /POI/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#176");
                createResponse("POIs, or Point Of Interests, are special bases. They can sometimes be admin owned, or they might belong to the aliens. Often youll be able to find valuable loot or information inside them, but be aware some POIs will try to stop you by killing you.");
                }}
        Tregex = /who/i;
        if (Tregex.test(words)) {
            Tregex = /RexXuS|Rex/i;
            if (Tregex.test(words)) {
                lastMessage.push("#177");
                createResponse("RexXxuS is one of the owners of HWS (The other one is Jascha). You can read more about them on the Server Administration guide page.");
                }
            Tregex = /Dr. Dark|Dr Dark/i;
            if (Tregex.test(words)) {
                lastMessage.push("#178");
                createResponse("Dr. Dark is a member of the HWP, and the creator of this website. He also created the Economy Utility Tool, and a discord bot for the HWS Discord. Feel free to contact him for whatever reason you may have.");
            }
            Tregex = /Jascha/i;
            if (Tregex.test(words)) {
                lastMessage.push("#179");
                createResponse("Jascha is one of the owners of HWS (RexXxuS is the other one). He also created the Empyrion Admin Helper (EAH) or as some may know it, Chatbot.");
            }}
        Tregex = /CPU/i;
        if (Tregex.test(words)) {
            Tregex = /what/i;
            if (Tregex.test(words)) {
                lastMessage.push("#180");
                createResponse("CPU is a system to limit ship sizes. Most blocks devices use CPU Points and the more CPU you use the higher CPU Tier youll need, until a max of tier 4.");
                }}
        Tregex = /faction/i;
        if (Tregex.test(words)) {
            Tregex = /create/i;
            if (Tregex.test(words)) {
                lastMessage.push("#181");
                createResponse("To create a faction press TAB and all the way up top click on the 3 small heads. Then locate your origin and click on it, and now youll be able to create a faction down in the bottom of the screen.");
                }}
        Tregex = /factionchange|switch/i;
        if (Tregex.test(words)) {
            Tregex = /create|faction/i;
            if (Tregex.test(words)) {
                lastMessage.push("#182");
                createResponse("To change a vessel from faction to private you have to be admin of your faction. You can also just remove the core (Dont do it if its an alienNPC core) and place a new one.");
                }}
        Tregex = /faction|change|switch|dock/i;
        if (Tregex.test(words)) {
            Tregex = /create|faction|ship|vessel|sv|hv/i;
            if (Tregex.test(words)) {
                lastMessage.push("#183");
                createResponse("To dock vessels simply park them on top of each others, but be aware that sometimes structures have to be of same factionor private to be docked.");
                }}
        Tregex = /faction|change|switch|dock|blueprint|save/i;
        if (Tregex.test(words)) {
            Tregex = /create|faction|ship|vessel|sv|hv|structure|vessel|ship/i;
            if (Tregex.test(words)) {
                Tregex = /how/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#184");
                    createResponse("To blueprint vessels, simply walk over to them and click ALT + O on them. After that you can find them in the F2 menu and add it to your factory.");
        }}}
        Tregex = /airtight|air tight|oxygen leak|o2 leak/i;
        if (Tregex.test(words)) {
            Tregex = /find|locate/i;
            if (Tregex.test(words)) {
                lastMessage.push("#185");
                createResponse("To find an oxygen leak in your base first of all press N. Then locate Debug in the little popup menu, and then toggle Show Airtight Blocks. Now all the green you (hopefully) see are the airtight blocks. You need to search for the non-green block.");
                }}
        Tregex = /resource package/i;
        if (Tregex.test(words)) {
            Tregex = /find|locate,check|how many/i;
            if (Tregex.test(words)) {
                lastMessage.push("#186");
                createResponse("You can have a maximum of 10 resource packages at a time. You should write <a class=cmd>do:info<a> to check how many you have. You can always refill them by buying new once at HWS Connect.");
                }}
        Tregex = /player id|account number|entity id|player nr|player number/i;
        if (Tregex.test(words)) {
            Tregex = /check|find|locate/i;
            if (Tregex.test(words)) {
                lastMessage.push("#187");
                createResponse("To check your Account Number, simply write <a class=cmd>cb:info<a> in the chat and look for Account Number.");
                }}
        Tregex = /pickup|recollect/i;
        if (Tregex.test(words)) {
            Tregex = /core/i;
            if (Tregex.test(words)) {
                lastMessage.push("#188");
                createResponse("To pickup a core you need to use EGS Recycle. Any other way the core will be broken to pieces (This includes NPC Cores!).");
                }}
        Tregex = /fall apart|collapse/i;
        if (Tregex.test(words)) {
            Tregex = /base/i;
            if (Tregex.test(words)) {
                lastMessage.push("#189");
                createResponse("The reason your base collapsed is probably due to Structual Integrity. Or said in another way.. physics ;) Make sure your base is touching the ground under all of the foundation when you spawn it.");
                }}
        Tregex = /check|find|see/i;
        if (Tregex.test(words)) {
            Tregex = /struct integrity|structual integrity/i;
            if (Tregex.test(words)) {
                lastMessage.push("#190");
                createResponse("To check Structual Integrity, first of all click N. Then go to the little debug menu, and check the Structural Integrity box. Now the more green something is on your base, the more stable it is. The more red it is the more unstable it is.");
                }}
        Tregex = /leave|abandon|get out off/i;
        if (Tregex.test(words)) {
            Tregex = /faction/i;
            if (Tregex.test(words)) {
                lastMessage.push("#191");
                createResponse("To leave a faction, first of all press TAB. Then all the way up top click on the 3 small heads, and click on whatever origin you are. Then youll see your faction on the right side, and now you just need to click leave in the bottom.");
                }}
        Tregex = /epic assault rifle|epic minigun|epic laser rifle/i;
        if (Tregex.test(words)) {
            Tregex = /get|find|recollect/i;
            if (Tregex.test(words)) {
                lastMessage.push("#192");
                createResponse("To get your origin weapon back you can find it in some random POIs, or you can go to the HWS Marketplace and buy a new one.");
                }}
        Tregex = /password/i;
        if (Tregex.test(words)) {
            Tregex = /server|hws|the password/i;
            if (Tregex.test(words)) {
                lastMessage.push("#193");
                createResponse("There is no password for the HWS server. If you are asked for one when you try to join, simply select another server and then HWS again. It is an old game bug asking for password.");
                }}
        Tregex = /color|colour/i;
        if (Tregex.test(words)) {
            Tregex = /container/i;
            if (Tregex.test(words)) {
                lastMessage.push("#194");
                createResponse("Purple alien containers are for Federation Origin, Grey for Freelancer Origin, and Red once are for the Pirate Origin. Those 3 types are the unique containers which each have 1 origin. All origins can use Yellow Alien Containers but they only give 1 RP.");
                }}
        Tregex = /indestuctible|undestructable|cant destroy|cant damage/i;
        if (Tregex.test(words)) {
            Tregex = /POI/i;
            if (Tregex.test(words)) {
                lastMessage.push("#195");
                createResponse("There are 2 kinds of cores you can find in a POI. Theres an alien core which is the most common one, and then theres an admin alien core. Admin alien cores cant be destroyed and the rest of the POI cant either. But containers can still be looted.");
                }}
        Tregex = /set home|sethome/i;
        if (Tregex.test(words)) {
            Tregex = /\bcmd|command/i;
            if (Tregex.test(words)) {
                lastMessage.push("#196");
                createResponse("To set your home go into your server chat, and then write <a class=cmd>cb:sethome:ID<a>. After that you can do <a class=cmd>cb:gohome<a>, but be aware the Cross Server Warping resets your home.");
                }}
        Tregex = /mute|silence/i;
        if (Tregex.test(words)) {
            Tregex = /how/i;
            if (Tregex.test(words)) {
                lastMessage.push("#197");
                createResponse("To mute a player (only locally), you can go into the chat and write <a class='cmd'>:mp playername</a>. Then to unmute them do same command but write ump instead of mp.");
                }}
        Tregex = /tell|check/i;
        if (Tregex.test(words)) {
            Tregex = /how much|the amount/i;
            if (Tregex.test(words)) {
                Tregex = /RP|Reputation/i;
                if (Tregex.test(words)) {
                    lastMessage.push("#198");
                    createResponse("To check how many Reputation Points you have you have to either go ingame and write <a>o:info<a>, and then youll be able to see your reputation points, or you can go to HWS Connect and check the Player Info page.");
        }}}

        try {Tregex = /dev/i; if (Tregex.test(words)) { Tregex = /activate|enable|on/i; if (Tregex.test(words)) {devMode.push("true"); createResponse("Dev mode activated.")}}} catch(err) {} //Just something new I use when I work on the bot. Can be ignored since primary file is never commited. This code will result in an error without the primary file.

    } else if (ticketMode == true && window.questionNumber == 0) {
        Tregex = /yes|yee|yea|yeah|yep|sure/i;
        if (Tregex.test(words)) {
            lastMessage.push("#131")
            createResponse("Okay, " + PC(synonyms["iWill"]) + " " + PC(synonyms["help"]) + " you! If you decide you don't want to create a ticket anymore, just write <b>stop</b>");
            canceldefault = true;
            lastMessage.push("#132")
            createResponse("First of all, what should the title of your ticket be?");
            window.questionNumber = window.questionNumber + 1;
        } else {
            lastMessage.push("#133")
            createResponse("Okay then. No ticket this time.");
            window.ticketMode = false;
        }
    }

    if (Message == "" && canceldefault == false) {
        lastMessage.push("#134")
        SendMessage("MessageBot", botName() + PC(synonyms["i"]) + " sorry, but I don't understand your issue. Could you try describing it again, and please make it short, but detailed. You can also try searching for your question in the <a href='" + genForumLink('hws-guide') + "' target='_blank' class='link'>HWS Guide</a>, or search for similar <a href='" + genForumLink('hws-get-support:support') + "' target='_blank' class='link'>Support Tickets</a>. I'd also appreciate it if you would send me your question either on discord to <a href='https://discord.gg/mahSXDp' class='tag' target='_blank'>@Dr. Dark#0555</a>, or just post it <a href='https://forum.empyrion-homeworld.net/t/homeworld-police-assistant/25169' class='link' target='_blank'>Here</a>")
    }

    if (Message != "") {
        Message = replaceLast("<br><br>", "", Message)
        Message += "<br><br><p class='search'><b>Search:</b> <a href='" + genForumLink('hws-guide') + "' target='_blank' class='link'>HWS Guide</a>, <a href='" + genForumLink('hws-get-support:support') + "' target='_blank' class='link'>Similar Support Tickets</a></p>"
        SendMessage("MessageBot", botName() + Message)
        Message = "";
        answers = 0;
    }
    canceldefault = false;
}

function createTicket() {
    lastMessage.push("#135")
    SendMessage("MessageBot", botName() + "Do you want to create a ticket? I can help you do it from here.")
    canceldefault = true;
    window.ticketMode = true;
}
