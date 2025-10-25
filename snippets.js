// Saxos Danmarks Krønike fra grundtvigsværker.dk
var metaElements = [ ]
do {
  metaElements = [
    ...$0.getElementsByClassName("pbA"),
    ...$0.getElementsByClassName("rs_bible"),
    ...$0.getElementsByClassName("segStart"),
    ...$0.getElementsByClassName("segEnd"),
    ...$0.getElementsByClassName("lgNumber"),
    ...$0.getElementsByClassName("appInvisible"),
  ]
  for (const element of metaElements)
    element.remove()
}
while (metaElements.length > 0)

//var tekst = $0.textContent

//var tekst = "<p>" + $0.textContent.split("    ").join("</p><p>") + "</p>"

for (const element of [...$0.getElementsByClassName("firstIndent"), ...$0.getElementsByClassName("noIndent")])
  element.innerHTML = "¤p|(" + element.innerHTML + "¤p|)"
for (const element of $0.getElementsByTagName("table"))
  element.innerHTML = "¤pre|(" + element.innerHTML + "¤pre|)"
for (const element of $0.getElementsByClassName("l_noIndent"))
  element.innerHTML = element.innerHTML + "¤"
for (const element of $0.getElementsByClassName("l_firstIndent"))
  element.innerHTML = element.innerHTML + "¤"
for (const element of $0.getElementsByClassName("l_secondIndent"))
  element.innerHTML = "¤|" + element.innerHTML + "¤"
for (const element of $0.getElementsByClassName("l_refrain"))
  element.innerHTML = element.innerHTML + "¤"
for (const element of $0.getElementsByClassName("italic"))
  element.innerHTML = "¤em|(" + element.innerHTML + "¤em|)"
for (const element of $0.getElementsByClassName("bold"))
  element.innerHTML = "¤em|(" + element.innerHTML + "¤em|)"
for (const element of $0.getElementsByClassName("center"))
  element.innerHTML = "¤div|(" + element.innerHTML + "¤div|)"
var tekst = $0.textContent
console.log(tekst
  .split("¤p|(").join("<p>")
  .split("¤p|)").join("</p>")
  .split("¤pre|(").join("<pre>")
  .split("¤pre|)").join("</pre>")
  .split("¤div|(").join("<div>")
  .split("¤div|)").join("</div>")
  .split("¤em|(").join("<em>")
  .split("¤em|)").join("</em>")
  .split("¤|").join("\t")
  .split("¤").join("\n")
  .split("\n\n").join("\n")
)
