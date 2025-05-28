const vscode = require('vscode');

function activate(context) {
	const quoteSets = {
		optimus: [
			"I am Optimus Prime, and this IDE is our last stand.",
			"Freedom is the right of all devs who indent properly.",
			"We roll out... after we push the latest commit.",
			"Even Megatron can't defeat undefined variables.",
			"Autobots, we debug at dawn.",
			"This battlefield... smells like burnt circuits and broken builds.",
			"Do not grieve. Soon you'll understand async/await.",
			"My code is strong, but my linter is stronger.",
			"You call that a pull request, soldier?",
			"Autobots! Format that mess with Prettier — now!"
		],
		bumble: [
			"Bzzzt! This code slaps harder than Starscream's ego!",
			"Bumblebee only speaks in memes and well-structured functions.",
			"*Beeps in binary* — Translation: 'Fix your semicolons!'",
			"I may not talk, but I roast bugs with style.",
			"I crashed into the wall because someone didn't declare 'let'.",
			"My radio broke trying to read that spaghetti code.",
			"Bumblebee beats his enemies with beatboxing AND breakpoints.",
			"They say silence is golden — until your build fails silently.",
			"I'm small but deadly — like a null pointer.",
			"Even I can't transform that code into something usable."
		],
		mega: [
			"I will reduce your repo to ashes.",
			"You dare merge without my review?",
			"Bow before me, you semicolon peasants!",
			"My evil plan? Push to production without testing.",
			"Silence! I override ALL methods!",
			"You think you’ve seen errors? I invented stack overflows!",
			"My patience is deprecated — like your code.",
			"No documentation? Typical Autobot incompetence.",
			"I’ve destroyed planets... and now your main branch.",
			"The universe shall tremble at my infinite recursion!"
		],
		olg: [
			"I am Optimus Prime, and this keyboard is my battlefield.Bumblebee can beatbox, but he can't beat syntax errors.Autobots, roll out — into a sea of semicolons!Even Megatron can't defeat undefined variables.",
			"Freedom is the right of all sentient beings — and so is good indentation.I once tried to compile hope.It returned an error: 'Missing semicolon.'Unity is strength, but comments are everything.",
			"Even in war, compassion must lead.My spark burns for peace, though my fists are forged for battle.The road ahead is long, but we walk it together.Not as soldiers, but as guardians of life.",
			"I am Optimus Prime, leader of the Autobots. Our mission is to protect all life forms, even when the odds are against us. In the face of darkness, hope is the light that guides us forward. We fight not for glory, but for the survival of those who cannot defend themselves. Together, we stand strong and unyielding, a beacon of courage in a universe filled with chaos.",
			"Every battle we face tests our resolve and strength. Yet, even when beaten and broken, I rise for the cause that matters most. The spark of freedom burns eternal within me and all my comrades. No machine or tyranny can snuff it out. We are the shield between peace and destruction, the last line of defense in a world on the brink.",
			"The war against the Decepticons is endless, but so is my commitment. I carry the weight of many lives on my shoulders, and I do so willingly. In every strike, in every strategy, there is honor and sacrifice. Our cause is just, our hearts are true, and our will is unbreakable. This is the way of the Autobot.",
			"Though I am a warrior, I strive for peace. The battlefield is a harsh teacher, but it has shown me the value of compassion and unity. My words may be few, but my actions speak volumes across the stars. I fight not for conquest but for a future where all beings can live free. Until that day comes, I will never cease my fight.",
			"In the darkest moments, when hope seems lost, I remember why we fight. It is not for power or dominion, but for the promise of a better tomorrow. Each battle scars us, but also strengthens our resolve. With every fall, we rise higher. We are not just machines; we are the guardians of life and liberty in an uncaring universe."

		],
		blg: [
			"They call me the scout, the sneaky guy.But I’ve tripped over more cables than I’ve scouted spies.Optimus said ‘go undetected’ — I played dubstep.Mission failed but the vibes were immaculate.",
			"Yes, I talk through the radio…Because otherwise you’d hear my opinions in real time.And no one’s ready for that Bumble-Tea.Megatron once cried listening to my playlist.",
			"I once outran a missile and a bad haircut.Saved the day, crashed into a taco truck.Heroic? Yes. Graceful? Absolutely not.But hey, free tacos!",
			"I might be the smallest Autobot, but I’m the quickest on my feet and the loudest in spirit. Sometimes I mess up, sure — who hasn’t? But every mistake is just a new chance to learn, grow, and, most importantly, have some fun along the way. I may not have Optimus’s size or Megatron’s firepower, but what I lack in those, I make up for with heart and determination.",
			"People say I’m just the sidekick, but I see myself as the heartbeat of the team. When the chips are down, and everyone’s tired, it’s my energy that keeps us rolling forward. I’m the voice in the comms, the spark of laughter in the silence, the unexpected hero who turns the tide with a well-timed joke or an even better plan. Trust me, I’ve got more than just a radio voice.",
			"You want stealth? I’m your guy—well, sometimes. More often I’m the guy who accidentally sets off every alarm but still manages to save the day. Being small means I can sneak where others can’t, but it also means I have to work twice as hard to prove I’m a warrior to be reckoned with. So yeah, I may stumble and fall, but I always get back up faster than you can say ‘roll out!’",
			"Sure, I can’t shoot lasers like Megatron or carry the weight of an entire war like Optimus, but I’m not built for that. I’m built for the unexpected, the fast moves, the quick thinking that turns disasters into victories. Sometimes I’m the comic relief, other times I’m the scout who spots the danger first. Either way, I’m here, and I’m ready to roll.",
			"Being the smallest means I’ve got to be clever, sneaky, and a little bit annoying—okay, maybe a lot annoying. But hey, someone’s gotta keep the bigger bots on their toes. From hacking enemy systems to pulling off stunts that make everyone gasp, I bring the chaos that keeps our team alive. And yeah, I talk a lot… but that’s just part of the charm."

		],
		mlg: [
			"I’m Megatron, feared by all….Except for cats. I hate cats.One sat on my fusion cannon once.Now I carry hairballs into battle.",
			"I’ve conquered planets, armies, dimensions…But I can’t win an argument with Starscream.He says ‘technically,’ I black out.Somebody mute that guy permanently.",
			"My plan was flawless — until Bumblebee appeared.Wearing shades, chewing gum, blaring music.He hit me with a scooter.I, Megatron, was defeated by a Vespa.",
			"I am Megatron, ruler of the Decepticons and harbinger of chaos. My vision for the universe is one of order through strength, where only the powerful survive and the weak are crushed beneath our might. Every victory brings me closer to ultimate dominion, and every failure is merely a lesson in perfecting my strategy. Those who oppose me will fall, for resistance is futile.",
			"The battlefield is my domain, and I command it with ruthless precision. Fear and respect are two sides of the same coin, and I demand both from friend and foe alike. While Optimus preaches peace, I wield power, for true peace comes only after complete control. My enemies tremble at the sound of my name, and my allies know that victory will be absolute or nothing at all.",
			"I have faced countless challenges, from betrayals within my ranks to the relentless pursuit of the Autobots. Yet, I remain unbroken, fueled by an insatiable hunger for conquest and revenge. The galaxy will soon know the full extent of my wrath. My power is not just in my weapons, but in the fear I instill and the legends that grow around me.",
			"Some see me as a villain, but I am merely the force that brings change. The old order must fall for a new era to rise. I lead with iron will and a vision that transcends mere survival. Every spark of resistance is a threat to be extinguished, every rebellion a sign that I must strike harder, faster, and without mercy. I am inevitable.",
			"My name is Megatron, and I will not be forgotten. History will remember the Decepticons as the ones who dared to seize their destiny, no matter the cost. Strength is the law of the universe, and I am its enforcer. Those who stand in my way will be reduced to ashes, for I am the darkness that will consume the light."

		]

	};

	const provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'html' },
		{
			provideCompletionItems(document, position) {
				const line = document.lineAt(position);
				const text = line.text.substring(0, position.character).trim();

				const lowerText = text.toLowerCase();

				if (lowerText.endsWith('optimus')) {
					return [createQuoteItem('optimus', quoteSets.optimus, position, line)];
				}
				if (lowerText.endsWith('bumble')) {
					return [createQuoteItem('bumble', quoteSets.bumble, position, line)];
				}
				if (lowerText.endsWith('mega')) {
					return [createQuoteItem('mega', quoteSets.mega, position, line)];
				}
				if (lowerText.endsWith('olg')) {
					return [createQuoteItem('olg', quoteSets.olg, position, line)];
				}
				if (lowerText.endsWith('blg')) {
					return [createQuoteItem('blg', quoteSets.blg, position, line)];
				}
				if (lowerText.endsWith('mlg')) {
					return [createQuoteItem('mlg', quoteSets.mlg, position, line)];
				}

				return undefined;
			}
		},
		..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ \t".split("")// Trigger when typing a word and pressing Space or Tab
	);

	context.subscriptions.push(provider);
}

function createQuoteItem(trigger, quotes, position, line) {
	const item = new vscode.CompletionItem(`${trigger} quote`, vscode.CompletionItemKind.Text);
	item.insertText = quotes[Math.floor(Math.random() * quotes.length)];
	item.detail = `Random ${trigger} quote`;

	const start = line.text.toLowerCase().lastIndexOf(trigger, position.character - 1);
	if (start !== -1) {
		const range = new vscode.Range(
			line.lineNumber,
			start,
			line.lineNumber,
			position.character
		);
		item.range = range;
	}

	return item;
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
};
