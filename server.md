*** System restart required ***
Last login: Mon Apr 15 11:45:13 2024 from 45.249.80.23
ubuntu@ip-172-31-30-149:~$ pm2 monit
ubuntu@ip-172-31-30-149:~$ cd 
.cache/       .config/      .npm/         .nvm/         .pm2/         .ssh/         stronger-vet/ 
ubuntu@ip-172-31-30-149:~$ cd stronger-vet/strongerveteranservice/
agenda/       emails/       lib/          node_modules/ routes/       views/        
bin/          .git/         models/       public/       tests/        
ubuntu@ip-172-31-30-149:~$ cd stronger-vet/strongerveteranservice/
agenda/       emails/       lib/          node_modules/ routes/       views/        
bin/          .git/         models/       public/       tests/        
ubuntu@ip-172-31-30-149:~$ cd stronger-vet/strongerveteranservice/
ubuntu@ip-172-31-30-149:~/stronger-vet/strongerveteranservice$ cat .env
SECRET=lOGICSQUARE
MONGODB_CONNECTION_STRING="mongodb://localhost:27017/veterans"
API_VERSION=1
AWS_ACCESS_KEY="AKIAUDWJFKQ6WZDRBBLL"
AWS_SECRET="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"
AWS_BUCKET_NAME="grouped-dev"
AWS_BUCKET_REGION="us-east-1"
PORT="3000"
SMTP_SECURE="yes"
SMTP_HOST="smtp.mailgun.org"
SMTP_PORT="465"
SMTP_FROM_ADDRESS="no-reply@mg.smoothire.com"
SMTP_AUTH_USER="no-reply@mg.smoothire.com"
SMTP_AUTH_PASSWORD="f057dc1f131bc3c173e648a2c9eedcc8-4534758e-cd3ec81c"
SITE_URL="https://api-sv.logic-square.com"
ADMIN_LOGIN_URL="http://strongerveterans-adminapp.surge.sh/login"
USER_LOGIN_URL="https://veterancommunityresources-userapp.surge.sh/home"
ubuntu@ip-172-31-30-149:~/stronger-vet/strongerveteranservice$ cd
ubuntu@ip-172-31-30-149:~$ cd /etc/nginx/sites-available/
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ ls
default
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ sudo rm default 
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ ls
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ cd ../s
sites-available/ sites-enabled/   snippets/        
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ cd ../sites-enabled/
ubuntu@ip-172-31-30-149:/etc/nginx/sites-enabled$ ls
default
ubuntu@ip-172-31-30-149:/etc/nginx/sites-enabled$ sudo rm default 
ubuntu@ip-172-31-30-149:/etc/nginx/sites-enabled$ ls
ubuntu@ip-172-31-30-149:/etc/nginx/sites-enabled$ cd ../sites-available/
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ sudo nano api.mvcrconnect.com
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ sudo ln -s /etc/nginx/sites-available/api.mvcrconnect.com /etc/nginx/sites-enabled/
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ cd ../sites-enabled/
ubuntu@ip-172-31-30-149:/etc/nginx/sites-enabled$ ls
api.mvcrconnect.com
ubuntu@ip-172-31-30-149:/etc/nginx/sites-enabled$ cd ../sites-available/
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ sudo systemctl restart nginx
ubuntu@ip-172-31-30-149:/etc/nginx/sites-available$ cd
ubuntu@ip-172-31-30-149:~$ sudo apt install certbot python3-certbot-nginx
Reading package lists... Done
Building dependency tree       
Reading state information... Done
certbot is already the newest version (0.40.0-1ubuntu0.1).
python3-certbot-nginx is already the newest version (0.40.0-0ubuntu0.1).
The following packages were automatically installed and are no longer required:
  gyp javascript-common libauthen-sasl-perl libc-ares2 libdata-dump-perl libdrm-amdgpu1 libdrm-intel1 libdrm-nouveau2 libdrm-radeon1 libencode-locale-perl libfile-basedir-perl libfile-desktopentry-perl
  libfile-listing-perl libfile-mimeinfo-perl libfont-afm-perl libfontenc1 libgl1 libgl1-mesa-dri libglapi-mesa libglvnd0 libglx-mesa0 libglx0 libhtml-form-perl libhtml-format-perl libhtml-parser-perl
  libhtml-tagset-perl libhtml-tree-perl libhttp-cookies-perl libhttp-daemon-perl libhttp-date-perl libhttp-message-perl libhttp-negotiate-perl libice6 libio-html-perl libio-socket-ssl-perl libio-stringy-perl
  libipc-system-simple-perl libjs-inherits libjs-is-typedarray libjs-psl libjs-typedarray-to-buffer libllvm12 liblwp-mediatypes-perl liblwp-protocol-https-perl libmailtools-perl libnet-dbus-perl
  libnet-http-perl libnet-smtp-ssl-perl libnet-ssleay-perl libnode-dev libnode64 libpciaccess0 libpython2-stdlib libpython2.7-minimal libpython2.7-stdlib libsensors-config libsensors5 libsm6 libssl-dev
  libtie-ixhash-perl libtimedate-perl libtry-tiny-perl liburi-perl libuv1-dev libvulkan1 libwayland-client0 libwww-perl libwww-robotrules-perl libx11-protocol-perl libx11-xcb1 libxaw7 libxcb-dri2-0
  libxcb-dri3-0 libxcb-glx0 libxcb-present0 libxcb-randr0 libxcb-shape0 libxcb-shm0 libxcb-sync1 libxcb-xfixes0 libxcomposite1 libxcursor1 libxfixes3 libxft2 libxi6 libxinerama1 libxkbfile1 libxml-parser-perl
  libxml-twig-perl libxml-xpathengine-perl libxmu6 libxrandr2 libxrender1 libxshmfence1 libxt6 libxtst6 libxv1 libxxf86dga1 libxxf86vm1 mesa-vulkan-drivers nodejs-doc perl-openssl-defaults python-pkg-resources
  python2 python2-minimal python2.7 python2.7-minimal x11-common x11-utils x11-xserver-utils xdg-utils
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 11 not upgraded.
ubuntu@ip-172-31-30-149:~$ sudo ufw status
Status: inactive
ubuntu@ip-172-31-30-149:~$ sudo ufw allow 'OpenSSH'
Rules updated
Rules updated (v6)
ubuntu@ip-172-31-30-149:~$ sudo ufw status
Status: inactive
ubuntu@ip-172-31-30-149:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
ubuntu@ip-172-31-30-149:~$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             

ubuntu@ip-172-31-30-149:~$ sudo ufw allow 'Nginx Full'
Rule added
Rule added (v6)
ubuntu@ip-172-31-30-149:~$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
Nginx Full                 ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             
Nginx Full (v6)            ALLOW       Anywhere (v6)             

ubuntu@ip-172-31-30-149:~$ sudo certbot --nginx -d api.mvcrconnect.com
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): vineet@logic-square.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.4-April-3-2024.pdf. You must agree in
order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel: A

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: Y
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for api.mvcrconnect.com
Waiting for verification...
Challenge failed for domain api.mvcrconnect.com
http-01 challenge for api.mvcrconnect.com
Cleaning up challenges
Some challenges have failed.

IMPORTANT NOTES:
 - The following errors were reported by the server:

   Domain: api.mvcrconnect.com
   Type:   caa
   Detail: CAA record for mvcrconnect.com prevents issuance
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
ubuntu@ip-172-31-30-149:~$ sudo certbot --nginx -d api.mvcrconnect.com
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for api.mvcrconnect.com
Waiting for verification...
Challenge failed for domain api.mvcrconnect.com
http-01 challenge for api.mvcrconnect.com
Cleaning up challenges
Some challenges have failed.

IMPORTANT NOTES:
 - The following errors were reported by the server:

   Domain: api.mvcrconnect.com
   Type:   caa
   Detail: CAA record for mvcrconnect.com prevents issuance
ubuntu@ip-172-31-30-149:~$ sudo certbot --nginx -d api.mvcrconnect.com
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for api.mvcrconnect.com
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/api.mvcrconnect.com

Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
Redirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/api.mvcrconnect.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations! You have successfully enabled https://api.mvcrconnect.com

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=api.mvcrconnect.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/api.mvcrconnect.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/api.mvcrconnect.com/privkey.pem
   Your cert will expire on 2024-07-14. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le

ubuntu@ip-172-31-30-149:~$ sudo systemctl status certbot.timer
● certbot.timer - Run certbot twice daily
     Loaded: loaded (/lib/systemd/system/certbot.timer; enabled; vendor preset: enabled)
     Active: active (waiting) since Thu 2024-04-04 10:28:22 UTC; 1 weeks 4 days ago
    Trigger: Mon 2024-04-15 15:07:45 UTC; 2h 26min left
   Triggers: ● certbot.service

Apr 04 10:28:22 ip-172-31-30-149 systemd[1]: Started Run certbot twice daily.
ubuntu@ip-172-31-30-149:~$ sudo certbot renew --dry-run
Saving debug log to /var/log/letsencrypt/letsencrypt.log

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Processing /etc/letsencrypt/renewal/api.mvcrconnect.com.conf
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Cert not due for renewal, but simulating renewal for dry run
Plugins selected: Authenticator nginx, Installer nginx
Renewing an existing certificate
Performing the following challenges:
http-01 challenge for api.mvcrconnect.com
Waiting for verification...
Cleaning up challenges

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
new certificate deployed with reload of nginx server; fullchain is
/etc/letsencrypt/live/api.mvcrconnect.com/fullchain.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
** DRY RUN: simulating 'certbot renew' close to cert expiry
**          (The test certificates below have not been saved.)

Congratulations, all renewals succeeded. The following certs have been renewed:
  /etc/letsencrypt/live/api.mvcrconnect.com/fullchain.pem (success)
** DRY RUN: simulating 'certbot renew' close to cert expiry
**          (The test certificates above have not been saved.)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
ubuntu@ip-172-31-30-149:~$ 



server {
    server_name api.mvcrconnect.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_redirect off;
        proxy_http_version 1.1;
        
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
                
        # WebSocket support (nginx 1.4)
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}


api.mvcrconnect.com