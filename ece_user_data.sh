#!/bin/bash
apt-get remove -y docker docker-engine docker.io containerd runc
apt-get update -y
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
apt-key fingerprint 0EBFCD88
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io
#groupadd docker
usermod -aG docker ubuntu
systemctl enable docker
curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
git clone https://github.com/conatel-i-d/prueba_de_ingreso.git
cd prueba_de_ingreso/frontend/frontend
docker run -it --rm --name my-running-script -v "$PWD":/usr/src/app -w /usr/src/app node:stretch npm install
docker run -it --rm --name my-running-script -v "$PWD":/usr/src/app -w /usr/src/app node:stretch npm run build
cd ../..
docker-compose up -d