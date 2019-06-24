var qt = require("shimmy-shimmy-yam-qt");
var app = new qt.QApplication();
var window = new qt.QWidget();

// Quirk: the virtual method paintEvent() is mapped into a callback setter
window.paintEvent(function() {
    var p = new qt.QPainter();
    p.begin(window);
    p.drawText(20, 30, 'hello node, hello qt');
    p.end();
});

window.resize(300, 150);
window.show();

app.exec();