FROM ubuntu:18.04
RUN apt-get update && apt-get install -y iputils-ping net-tools less man openssh-server sudo nano dnsutils
RUN adduser --disabled-password --gecos "" admin
RUN echo admin:admin | chpasswd
RUN usermod -aG sudo admin
CMD service ssh start && tail -f /var/log/lastlog

