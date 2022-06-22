Country Name (2 letter code) [AU]:TW
State or Province Name (full name) [Some-State]:iisi
Locality Name (eg, city) []:台北市
Organization Name (eg, company) [Internet Widgits Pty Ltd]:市政府
Organizational Unit Name (eg, section) []:資訊局
Common Name (e.g. server FQDN or YOUR name) []:https://api.tpps.taipei
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:iTap
An optional company name []:iisi
PS D:\SVN_109iTaipei\source code\CSCP_APIOUT_110\v1.1.7>     openssl x509 -req -days 3650 -in csrreq.csr -signkey private-key.pem -out auth-cert.pem
Signature ok
subject=C = TW, ST = iisi, L = \C3\A5\C2\8F\C2\B0\C3\A5\C2\8C\C2\97\C3\A5\C2\B8\C2\82, O = \C3\A5\C2\B8\C2\82\C3\A6\C2\94\C2\BF\C3\A5\C2\BA\C2\9C, OU = \C3\A8\C2\B3\C2\87\C3\A8\C2\A8\C2\8A\C3\A5\C2\B1\C2\80, CN = https://api.tpps.taipei
Getting Private key