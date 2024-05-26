npm install express nodemon socket.io socket.io-client -y --save


mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
source ~/.bashrc # or source ~/.zshrc, depending on your shell
npm install -g @angular/cli

ng new  chatFrontend --standalone=false 
For Front end  need this package
npm install ngx-socket-io