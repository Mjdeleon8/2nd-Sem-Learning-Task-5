document.writeln("<h1>", "LEARNING ACTIVITY #5", "</h1><br>");
var c, name;
n = prompt("Enter items number", 0);
for (c = 1; c <= n; c = c + 1) {
  document.writeln(
    "<table>",
    "<input type='text'>",
    "<p>",
    c,
    ".",
    "<p>",
    "</input>",
    "</table>"
  );
}
