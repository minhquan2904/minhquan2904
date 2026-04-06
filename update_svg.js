const fs = require('fs');
const path = 'svg/banner.png';
let content = fs.readFileSync(path, 'utf8');

// Replace big name
const target1 = '<text class="cls-26" transform="translate(155.51 456.17) scale(.43 1)"><tspan x="0" y="0">H</tspan><tspan class="cls-34" x="199.54" y="0">O</tspan><tspan class="cls-33" x="396.08" y="0">ANG</tspan><tspan class="cls-37" x="984.12" y="0">C</tspan><tspan class="cls-31" x="1164.92" y="0">A</tspan><tspan class="cls-30" x="1347.3" y="0">U</tspan></text>';
const replacement1 = '<text class="cls-26" transform="translate(155.51 456.17) scale(.43 1)"><tspan x="0" y="0">QUAN</tspan><tspan class="cls-37" x="984.12" y="0">BM</tspan></text>';

// Replace intro text
const target2 = 'I’m Hoang Cau';
const replacement2 = "I'm Minh Quan";

if (content.includes(target1)) {
    console.log('Found target 1');
    content = content.replace(target1, replacement1);
} else {
    console.log('Target 1 NOT found');
}

if (content.includes(target2)) {
    console.log('Found target 2');
    content = content.replace(target2, replacement2);
} else {
    console.log('Target 2 NOT found');
}

fs.writeFileSync(path, content, 'utf8');
console.log('SVG updated.');
