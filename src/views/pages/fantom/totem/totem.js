<!DOCTYPE html>
<html lang="en">
<%- include(`${partials}/head`); -%>

<body>
<%- include(`${partials}/header_main`); -%>
<pre id="log">
*************** 👨‍🌾 UNOFFICIAL VISOR FARMING CALCULATOR 👨‍🌾 ***************
INFO  : https://totemfantom.gitbook.io/totemftm/
***************************************************************************************

</pre>
<div class="loader--1"></div>
<%- include(`${partials}/scripts`, {scriptname: 'visor'}); -%>
</body>
</html>