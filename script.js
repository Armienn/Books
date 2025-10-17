function isWhitespace(text, index) {
	return !String.fromCodePoint(text.codePointAt(index)).trim()
}

function replaceQuotes(text) {
	const parts = text.split('"')
	for (let i = 1; i < parts.length; i++) {
		const previous = parts[i - 1]
		const next = parts[i]

		if (!previous)
			parts[i] = '“' + parts[i]
		else if (!next)
			parts[i] = '”' + parts[i]
		else if (isWhitespace(previous, previous.length - 1))
			parts[i] = '“' + parts[i]
		else if (isWhitespace(next, 0))
			parts[i] = '”' + parts[i]
		else
			parts[i] = '"' + parts[i] // Ambiguous, leave as is
	}
	return parts.join("")
}

window.onload = function () {
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)
	let node
	while (node = walker.nextNode())
		node.nodeValue = replaceQuotes(node.nodeValue)
}
