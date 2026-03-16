
const sa1_ost = ["Open Your Heart", "It Doesn't Matter (SA1)", "Believe In Myself (SA1)", "Unknown from M.E. (SA1)", "My Sweet Passion", "Lazy Days", "Emerald Coast", "Windy Valley", "Icecap", "Sky Deck", "Speed Highway", "Red Mountain", "Casinopolis", "Twinkle Park", "Lost World", "Final Egg", "Chaos Boss Themes", "Tikal's Theme"];

const sa2_ost = ["Live & Learn", "It Doesn't Matter (SA2)", "Believe In Myself (SA2)", "Unknown from M.E. (SA2)", "Throw It All Away", "E.G.G.M.A.N.", "Fly In The Freedom", "City Escape", "Wild Canyon", "Pumpkin Hill", "Metal Harbor", "Radical Highway", "Weapons Bed", "Green Forest", "White Jungle", "Sky Rail", "Mad Space", "Cosmic Wall", "Meteor Herd", "Supporting Me", "Live Life"];

const heroes_ost = ["Sonic Heroes", "We Can", "This Machine", "Follow Me", "Team Chaotix", "Seaside Hill", "Ocean Palace", "Grand Metropolis", "Power Plant", "Casino Park", "BINGO Highway", "Rail Canyon", "Bullet Station", "Frog Forest", "Lost Jungle", "Hang Castle", "Mystic Mansion", "Egg Fleet", "Final Fortress", "What I'm Made Of..."];

// Combine them into one "Mega Roster"
const fullRoster = sa1_ost.concat(sa2_ost, heroes_ost);

// This part pushes them into the site's data (assuming 'items' is the array name)
fullRoster.forEach(song => {
    console.log("Adding to Roster: " + song);
    // If you are using a specific site like TierMaker or a Custom Ranker:
    // items.push(song); 
});

alert("Roster Buffed! " + fullRoster.length + " songs added.");
