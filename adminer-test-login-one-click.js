// postgres login
// a test helper, please DO NOT use this in any PRODUCTION DB
javascript:((name, password)=>{document.getElementsByName('auth[driver]')[0].value = 'pgsql';document.getElementsByName('auth[server]')[0].value = 'postgres';document.getElementsByName('auth[username]')[0].value = name;document.getElementsByName('auth[password]')[0].value = password;document.getElementsByName('auth[db]')[0].value = '';document.getElementsByTagName('form')[0].submit();})('YOUR_NAME', 'YOUR_PASSWORD');
