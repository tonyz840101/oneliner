// uuid to base64url
javascript: ((bytes)=>{let binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join(""); alert(btoa(binString).replaceAll('+', '-').replaceAll('/','_').replaceAll('=',''))})(prompt("uuid").replaceAll('-','').match(/.{1,2}/g).map(v => parseInt(v,16)));

// base64url to uuid
javascript: ((binString)=>{alert(binString.split('').map(v=>v.codePointAt(0).toString(16)).join(""))})(atob(prompt("encodedId").replaceAll('-', '+').replaceAll('_','/')));
