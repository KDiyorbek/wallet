/* <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="QD_webBot" data-size="medium" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
<script type="text/javascript">
  function onTelegramAuth(user) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
  }
</script> */

/*-------------------*/

// function detectMobile() {
//   var userAgent = navigator.userAgent.toLowerCase();
//   return /iphone|ipad|android|blackberry|windows phone/.test(userAgent);
// }
// if (!detectMobile()) {
//   window.location.href = "ban.html";
// }

/*-----------------*/



/*-------------------*/

function copyToClipboard() {
  const link = document.getElementById("content").queryASelector("a");
  const url = link.href;
  navigator.clipboard.writeText(url).then(() => {
    document.getElementById("successMessage").textContent = "address copied to clipboard!";
    setTimeout(() => {
      document.getElementById("successMessage").textContent = "";
    }, 3000);
  }, (error) => {
  });
}